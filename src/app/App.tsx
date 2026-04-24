import { useState, useEffect, useCallback, useRef } from 'react';
import SessionShell, { Phase, ChatMessage } from './SessionShell';
import { Q3SummaryLeft, CalendarLeft } from './LeftContentQ3';
import { BIDocsLeft, BIDashboardLeft, EmailLeft, BIActionButtons } from './LeftContentBI';

/* ===== Timing constants (must match SessionShell) ===== */
const EXPAND_DELAY = 800;
const EXPAND_DURATION = 2000;
const CONTENT_FADE = 800;
const LEFT_CROSSFADE = 800;
const END_SESSION_DELAY = 2000;
const SHRINK_DELAY = 800;
const SHRINK_DURATION = 2000;

/* ===== Flow state ===== */
type Flow = 'q3' | 'bi';

/**
 * Each flow has a sequence of "screens" — user types on landing (or in the
 * card) and advances to the next screen. After the final screen, the end
 * session button appears.
 *
 * Q3: q3-summary → calendar  (2 screens)
 * BI: bi-docs → bi-dashboard → bi-email  (3 screens)
 */
type Q3Screen = 'q3-summary' | 'calendar';
type BIScreen = 'bi-docs' | 'bi-dashboard' | 'bi-email';
type Screen = Q3Screen | BIScreen;

type WindowMode = 'normal' | 'minimized';

export default function App() {
  const [scale, setScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [windowMode, setWindowMode] = useState<WindowMode>('normal');

  const [phase, setPhase] = useState<Phase>('landing');
  const [flow, setFlow] = useState<Flow>('q3');
  const [screen, setScreen] = useState<Screen>('q3-summary');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [endSessionVisible, setEndSessionVisible] = useState(false);

  // Track timers so we can cancel on unmount / rapid transitions
  const timers = useRef<number[]>([]);
  const addTimer = useCallback((cb: () => void, ms: number) => {
    const id = window.setTimeout(cb, ms);
    timers.current.push(id);
    return id;
  }, []);
  const clearTimers = useCallback(() => {
    timers.current.forEach(id => clearTimeout(id));
    timers.current = [];
  }, []);
  useEffect(() => () => clearTimers(), [clearTimers]);

  /* ===== Responsive scale ===== */
  useEffect(() => {
    const update = () => {
      const sx = window.innerWidth / 1920;
      const sy = window.innerHeight / 1200;
      setScale(Math.min(sx, sy));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  /* ===== Window chrome handlers ===== */
  const handleClose = useCallback(() => {
    clearTimers();
    setEndSessionVisible(false);
    setChatMessages([]);
    setScreen('q3-summary');
    setFlow('q3');
    setPhase('landing');
    setWindowMode('normal');
  }, [clearTimers]);

  const handleMinimize = useCallback(() => {
    setWindowMode('minimized');
  }, []);

  const handleRestore = useCallback(() => {
    setWindowMode('normal');
  }, []);

  /* ===== Flow data helpers ===== */

  const pushMessages = useCallback((...msgs: ChatMessage[]) => {
    setChatMessages(prev => [...prev, ...msgs]);
  }, []);

  /** Schedule the AI reply for a given screen, after the user's bubble lands */
  const scheduleAIReply = useCallback((screenKey: Screen, delayMs: number) => {
    addTimer(() => {
      let aiMsg: ChatMessage | null = null;
      switch (screenKey) {
        case 'q3-summary':
          aiMsg = {
            id: 'ai-q3-confirm',
            role: 'ai',
            text: 'A document containing all the projects worked on this quarter was made. Please confirm if you are fine with it or delete documents you wish to remove',
          };
          break;
        case 'calendar':
          aiMsg = {
            id: 'ai-q3-scheduled',
            role: 'ai',
            text: (
              <>
                <p style={{ margin: 0 }}>Meeting was scheduled for Q3 summary with 85 invitees</p>
                <p style={{ margin: '5px 0 0', fontSize: '11px', opacity: 0.5, textDecoration: 'underline' }}>see invitees</p>
              </>
            ),
          };
          break;
        case 'bi-docs':
          aiMsg = {
            id: 'ai-bi-collected',
            role: 'ai',
            text: "Collected this year's earning data. Please confirm if these are the documents you wish to include.",
          };
          break;
        case 'bi-email':
          aiMsg = {
            id: 'ai-bi-forwarding',
            role: 'ai',
            text: (
              <>
                <p style={{ margin: '0 0 4px' }}>Forwarding document to relevant people:</p>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  <li>Tom C (Finance Rep.) &lt;tom.c@hp.com&gt;</li>
                  <li>Jesse M (Accounting Rep.) &lt;jesse.m@hp.com&gt;</li>
                  <li>Chris H (Sales Rep.) &lt;chris.h@hp.com&gt;</li>
                </ul>
              </>
            ),
          };
          break;
      }
      if (aiMsg) pushMessages(aiMsg);
    }, delayMs);
  }, [addTimer, pushMessages]);

  /** Show end session button after a delay */
  const scheduleEndSessionButton = useCallback((delayMs: number) => {
    addTimer(() => setEndSessionVisible(true), delayMs);
  }, [addTimer]);

  /* ===== Expand from landing into flow =====
   *
   * Prompt-keyword routing (case-insensitive):
   *   - contains "q3"        → Q3 flow
   *   - contains "bi" / "power bi" → BI flow
   *   - otherwise            → keep current `flow` state (fallback)
   */
  const handleLandingSubmit = useCallback((text: string) => {
    clearTimers();

    const lower = text.toLowerCase();
    let nextFlow: Flow = flow;
    if (/\bq3\b/.test(lower)) nextFlow = 'q3';
    else if (/\bbi\b/.test(lower) || /power\s*bi/.test(lower)) nextFlow = 'bi';
    setFlow(nextFlow);

    // Step 1: 800ms delay before anything happens
    addTimer(() => {
      // Step 2: Start expanding (2000ms animation)
      setPhase('expanding');

      addTimer(() => {
        // Step 3: Phase → content. Left-content + first user bubble appear.
        setPhase('content');

        // User's opening prompt, canonicalized per flow
        const openingText = nextFlow === 'q3'
          ? '"I need to create Q3 performance summary"'
          : 'Create Power BI of this year\'s earnings';

        pushMessages({
          id: nextFlow === 'q3' ? 'user-q3-open' : 'user-bi-open',
          role: 'user',
          text: openingText,
        });

        // Show initial screen
        setScreen(nextFlow === 'q3' ? 'q3-summary' : 'bi-docs');

        // AI reply ~800ms after user bubble lands (to match content fade-in)
        scheduleAIReply(nextFlow === 'q3' ? 'q3-summary' : 'bi-docs', CONTENT_FADE + 400);
      }, EXPAND_DURATION);
    }, EXPAND_DELAY);
  }, [addTimer, clearTimers, flow, pushMessages, scheduleAIReply]);

  /* ===== BI flow: advance docs → dashboard (via "Create BI" click or prompt) ===== */
  const advanceToDashboard = useCallback(() => {
    setScreen('bi-dashboard');
  }, []);

  /* ===== BI flow: advance dashboard → email (via "share" click or "forward" prompt) ===== */
  const advanceToEmail = useCallback(() => {
    pushMessages({
      id: 'user-bi-forward',
      role: 'user',
      text: 'Forward BI to relevant people',
    });
    addTimer(() => setScreen('bi-email'), 400);
    scheduleAIReply('bi-email', 400 + LEFT_CROSSFADE);
    scheduleEndSessionButton(400 + LEFT_CROSSFADE + END_SESSION_DELAY);
  }, [addTimer, pushMessages, scheduleAIReply, scheduleEndSessionButton]);

  /* ===== Q3 flow: advance q3-summary → calendar (via prompt) ===== */
  const advanceToCalendar = useCallback(() => {
    pushMessages({
      id: 'user-q3-schedule',
      role: 'user',
      text: 'Schedule a meeting for Q3 summary',
    });
    addTimer(() => setScreen('calendar'), 400);
    scheduleAIReply('calendar', 400 + LEFT_CROSSFADE);
    scheduleEndSessionButton(400 + LEFT_CROSSFADE + END_SESSION_DELAY);
  }, [addTimer, pushMessages, scheduleAIReply, scheduleEndSessionButton]);

  /* ===== Handle user typing prompts inside the expanded card ===== */
  const handleInCardSubmit = useCallback((text: string) => {
    if (flow === 'q3' && screen === 'q3-summary') {
      advanceToCalendar();
      return;
    }
    if (flow === 'bi' && screen === 'bi-docs') {
      // Typing anything in docs view advances like "Create BI" click
      advanceToDashboard();
      return;
    }
    if (flow === 'bi' && screen === 'bi-dashboard') {
      advanceToEmail();
      return;
    }
    void text;
  }, [flow, screen, advanceToCalendar, advanceToDashboard, advanceToEmail]);

  /* ===== Combined submit handler routed by phase ===== */
  const onSubmit = useCallback((text: string) => {
    if (phase === 'landing') {
      handleLandingSubmit(text);
    } else if (phase === 'content') {
      handleInCardSubmit(text);
    }
  }, [phase, handleLandingSubmit, handleInCardSubmit]);

  /* ===== End session: shrink + loop back to landing =====
   *
   * Sequence (timings from user spec):
   *   1. endSession click → phase='ending'
   *      - large content fades out (CONTENT_FADE=800ms)
   *      - pill stays large
   *   2. after CONTENT_FADE (800ms): content is blank, pill is large.
   *      Hold for SHRINK_DELAY (800ms) — the "bubble turns blank" moment.
   *   3. after CONTENT_FADE+SHRINK_DELAY (1600ms): phase='shrinking'
   *      - pill shrinks to small (SHRINK_DURATION=2000ms)
   *      - clear chat/screen, flip flow so next landing enters the other flow
   *   4. after SHRINK_DURATION (2000ms more): phase='landing'
   *      - landing content (|Ask Anything) fades in (CONTENT_FADE=800ms)
   */
  const handleEndSession = useCallback(() => {
    clearTimers();
    setEndSessionVisible(false);

    setPhase('ending');

    addTimer(() => {
      // Reset session data while pill is blank & still large — not visible yet
      setChatMessages([]);
      setFlow(prev => (prev === 'q3' ? 'bi' : 'q3'));
      // screen will be set on next expand, but give it a sane default
      setScreen(flow === 'q3' ? 'bi-docs' : 'q3-summary');

      setPhase('shrinking');

      addTimer(() => {
        setPhase('landing');
      }, SHRINK_DURATION);
    }, CONTENT_FADE + SHRINK_DELAY);
  }, [addTimer, clearTimers, flow]);

  /* ===== Build leftContents map for current flow ===== */
  const leftContents = flow === 'q3'
    ? {
        'q3-summary': <Q3SummaryLeft />,
        'calendar': <CalendarLeft />,
      }
    : {
        'bi-docs': <BIDocsLeft />,
        'bi-dashboard': <BIDashboardLeft />,
        'bi-email': <EmailLeft />,
      };

  /* ===== BI action buttons (left overlay) ===== */
  const leftOverlay = flow === 'bi' && phase === 'content'
    ? (
        screen === 'bi-docs' ? (
          <BIActionButtons variant="edit-createbi" onCreateBI={advanceToDashboard} />
        ) : screen === 'bi-dashboard' ? (
          <BIActionButtons variant="edit-share" onShare={advanceToEmail} />
        ) : null
      )
    : null;

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: '#F4F4F9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: '1920px',
          height: '1200px',
          position: 'relative',
          transformOrigin: 'center center',
          transform: `scale(${scale})`,
        }}
      >
        {/* Clickable overlays on top of the chrome-dots image (drawn by the
            left-content of each flow at bubble-local (50, 50), size 120.96 × 30.319).
            Three equal horizontal zones: close, minimize, fullscreen. */}
        <div
          style={{
            position: 'absolute',
            // canvas (101.5, 204) = (50% - 858.5px, 50% - 396px); size 120.96×30.319
            left: 'calc(50% - 858.5px)',
            top: 'calc(50% - 396px)',
            width: '120.96px', height: '30.319px',
            zIndex: 100,
            display: 'flex',
            opacity: phase === 'landing' ? 0 : 1,
            pointerEvents: phase === 'landing' ? 'none' : 'auto',
            transition: 'opacity 400ms ease',
          }}
        >
          <button
            onClick={handleClose}
            title="Close"
            style={{ flex: 1, background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
          />
          <button
            onClick={handleMinimize}
            title="Minimize"
            style={{ flex: 1, background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
          />
          <button
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
            style={{ flex: 1, background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
          />
        </div>

        {/* Main SessionShell — hidden when minimized */}
        <div style={{
          width: '100%', height: '100%',
          opacity: windowMode === 'minimized' ? 0 : 1,
          pointerEvents: windowMode === 'minimized' ? 'none' : 'auto',
          transition: 'opacity 300ms ease',
        }}>
          <SessionShell
            phase={phase}
            flow={flow}
            leftContentKey={screen}
            leftContents={leftContents}
            chatMessages={chatMessages}
            endSessionVisible={endSessionVisible}
            onSubmit={onSubmit}
            onEndSession={handleEndSession}
            leftOverlay={leftOverlay}
          />
        </div>

        {/* Minimized preview — small square with Q3 summary, lower-left, 20/20 gap */}
        {windowMode === 'minimized' && (
          <button
            onClick={handleRestore}
            title="Restore"
            style={{
              position: 'absolute', bottom: '20px', left: '20px',
              width: '180px', height: '180px',
              borderRadius: '18px',
              padding: 0, border: 'none',
              overflow: 'hidden', cursor: 'pointer',
              background: '#F4F4F9',
              boxShadow: '0 12px 32px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.08)',
              zIndex: 101,
            }}
          >
            {/* Scaled-down Q3 summary (cover-fit into square) */}
            <div style={{
              position: 'absolute',
              width: '1383.25px', height: '990px',
              transform: `translate(-50%, -50%) scale(${180 / 990})`,
              transformOrigin: 'center center',
              top: '50%', left: '50%',
              pointerEvents: 'none',
            }}>
              <Q3SummaryLeft />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
