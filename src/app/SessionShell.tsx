import { useState, useRef, useEffect, useLayoutEffect, useCallback, ReactNode } from 'react';
import svgPaths from '../imports/svg-xjlncwwdvr';

/* ===== Timing constants (per spec) ===== */
const EXPAND_DELAY = 800;
const EXPAND_DURATION = 2000;
const CONTENT_FADE = 800;
const LEFT_CROSSFADE = 800;
const USER_BUBBLE_SLIDE = 400;
const AI_BUBBLE_FADE = 800;
const END_SESSION_DELAY = 2000;
const SHRINK_DELAY = 800;
const SHRINK_DURATION = 2000;

/* ===== Pill dimensions ===== */
const PILL_SMALL_W = 399.61;
const PILL_SMALL_H = 94.42;
const PILL_LARGE_W = 1817;
const PILL_LARGE_H = 990;

/* Position: landing pill is centered; expanded card is calc(50% + 49px) down */
const PILL_SMALL_TOP = '50%';
const PILL_LARGE_TOP = 'calc(50% + 49px)';

/* ===== Types ===== */
export type Phase =
  | 'landing'      // pill small, |Ask Anything visible, input interactive
  | 'expanding'    // pill growing to large (2s), blank middle state
  | 'content'      // pill large, left+chat content visible, input interactive
  | 'ending'       // pill large, content fading out (800ms), about to shrink
  | 'shrinking'    // pill shrinking to small (2s), blank middle state
  ;

export type ChatMessage = {
  id: string;
  role: 'user' | 'ai';
  text: ReactNode; // allows JSX (for bulleted forwarding list)
};

export type LeftContentState = {
  key: string;        // which screen to render
  // Caller provides the component; we handle crossfade
};

type Props = {
  phase: Phase;
  flow: 'q3' | 'bi';
  /** The key controlling which left-content to render — crossfade happens when this changes */
  leftContentKey: string;
  /** Map from leftContentKey to the left-content render */
  leftContents: Record<string, ReactNode>;
  /** Chat messages to show (in order) */
  chatMessages: ChatMessage[];
  /** Whether end-session button is visible */
  endSessionVisible: boolean;
  /** Fired when user presses Enter (text passed). Caller decides what to do. */
  onSubmit: (text: string) => void;
  /** Fired when end-session clicked */
  onEndSession: () => void;
  /** Child-provided action buttons for left panel (e.g., edit/Create BI, edit/share) */
  leftOverlay?: ReactNode;
};

/* ===== Live clock ===== */
function useLiveClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const date = now.toLocaleDateString('en-CA').replace(/-/g, '.');
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  return { date, time };
}

/* ===== Mic icon (matches landing) ===== */
function MicIcon({ size = 'sm' }: { size?: 'sm' | 'lg' }) {
  const s = size === 'lg' ? { w: 13.895, h: 26.934, vb: '0 0 15.395 27.6821', stroke: 1.5, rect: { w: 8.72144, h: 16.937, rx: 4.36072, x: 3.33629 }, v1: 'p4420c00', v2: 'M7.69702 20.3245V26.9323', v3: 'p30531980' } : { w: 7.816, h: 15.149, vb: '0 0 8.6597 15.5698', stroke: 0.84375, rect: { w: 4.90581, h: 9.52704, rx: 2.4529, x: 1.87646 }, v1: 'p15c82c80', v2: 'M4.32935 11.4316V15.1485', v3: 'p1a6c3e40' };
  return (
    <div style={{ height: `${s.h}px`, width: `${s.w}px`, position: 'relative', flexShrink: 0 }}>
      <div style={{ position: 'absolute', inset: '0 -5.4% -2.78% -5.4%' }}>
        <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox={s.vb}>
          <rect fill="black" height={s.rect.h} rx={s.rect.rx} width={s.rect.w} x={s.rect.x} />
          <path d={(svgPaths as any)[s.v1]} stroke="black" strokeLinecap="round" strokeWidth={s.stroke} />
          <path d={s.v2} stroke="black" strokeWidth={s.stroke} />
          <path d={(svgPaths as any)[s.v3]} stroke="black" strokeLinecap="round" strokeWidth={s.stroke} />
        </svg>
      </div>
    </div>
  );
}

/* ===== Chat bubble (handles slide-up / fade-in animations) ===== */
function ChatBubble({ msg, justAdded }: { msg: ChatMessage; justAdded: boolean }) {
  const isUser = msg.role === 'user';
  const [mounted, setMounted] = useState(!justAdded);

  useEffect(() => {
    if (justAdded) {
      const id = requestAnimationFrame(() => setMounted(true));
      return () => cancelAnimationFrame(id);
    }
  }, [justAdded]);

  const userStyle: React.CSSProperties = {
    alignSelf: 'flex-end',
    background: '#f8f8f8',
    borderRadius: '10px',
    padding: '6.5px 20px 5.5px',
    fontFamily: "'Google_Sans', sans-serif",
    fontSize: '16px',
    color: 'black',
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity ${USER_BUBBLE_SLIDE}ms ease-out, transform ${USER_BUBBLE_SLIDE}ms ease-out`,
    maxWidth: '340px',
    lineHeight: 1.5,
    whiteSpace: 'normal',
  };

  const aiStyle: React.CSSProperties = {
    alignSelf: 'flex-start',
    padding: '0 20px',
    fontFamily: "'Google_Sans', sans-serif",
    fontSize: '16px',
    color: 'black',
    opacity: mounted ? 1 : 0,
    transition: `opacity ${AI_BUBBLE_FADE}ms ease-in-out`,
    maxWidth: '340px',
    lineHeight: 1.5,
  };

  return <div style={isUser ? userStyle : aiStyle}>{msg.text}</div>;
}

/* ===== Input pill (inside chat column) ===== */
function ChatInput({
  enabled,
  value,
  onChange,
  onSubmit,
  placeholder = '|Ask Anything',
}: {
  enabled: boolean;
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
  placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (enabled) {
      const t = setTimeout(() => ref.current?.focus(), 100);
      return () => clearTimeout(t);
    }
  }, [enabled]);

  return (
    <div
      onClick={() => ref.current?.focus()}
      style={{
        background: '#d1d1d1',
        borderRadius: '36px',
        padding: '11px 27px',
        display: 'flex',
        gap: '13px',
        alignItems: 'center',
        cursor: 'text',
        width: '100%',
      }}
    >
      <MicIcon size="sm" />
      <div style={{ position: 'relative', flex: 1 }}>
        {value === '' && (
          <span
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              pointerEvents: 'none',
              fontFamily: "'Google_Sans', sans-serif",
              fontSize: '16px',
              color: 'black',
              lineHeight: 1.5,
              opacity: focused ? 0.3 : 1,
              transition: 'opacity 0.2s',
            }}
          >
            {placeholder}
          </span>
        )}
        <input
          ref={ref}
          type="text"
          value={value}
          disabled={!enabled}
          onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={e => {
            if (e.key === 'Enter' && value.trim() !== '') onSubmit();
          }}
          style={{
            background: 'transparent',
            border: 'none',
            outline: 'none',
            fontFamily: "'Google_Sans', sans-serif",
            fontSize: '16px',
            color: 'black',
            caretColor: 'black',
            width: '100%',
          }}
        />
      </div>
    </div>
  );
}

/* ===== Pill (the one element that expands/shrinks) ===== */
function Pill({
  expanded,
  smallWidth,
  isTransitioning,
  children,
}: {
  expanded: boolean;
  /** Width to use when not expanded — grows with landing input text. */
  smallWidth: number;
  /** True when expanding/shrinking — use slow 2s width transition; otherwise fast. */
  isTransitioning: boolean;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: expanded ? PILL_LARGE_TOP : PILL_SMALL_TOP,
        transform: 'translate(-50%, -50%)',
        width: expanded ? `${PILL_LARGE_W}px` : `${smallWidth}px`,
        height: expanded ? `${PILL_LARGE_H}px` : `${PILL_SMALL_H}px`,
        borderRadius: '60px',
        transition: isTransitioning
          ? `width ${EXPAND_DURATION}ms ease-in-out, height ${EXPAND_DURATION}ms ease-in-out, top ${EXPAND_DURATION}ms ease-in-out`
          : `width 160ms ease-out, height ${EXPAND_DURATION}ms ease-in-out, top ${EXPAND_DURATION}ms ease-in-out`,
        overflow: 'visible',
        zIndex: 5,
      }}
    >
      {/* Glass gradient + border + shadow — matches landing pill chrome */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          borderRadius: '60px',
          backgroundImage: 'linear-gradient(165.864deg, rgba(225, 225, 225, 0.5) 43.108%, rgba(255, 255, 255, 0.5) 102.39%)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          borderRadius: '60px',
          border: '0.2px solid rgba(255, 255, 255, 0.5)',
          background: 'linear-gradient(133deg, rgba(240, 240, 240, 0.01) -43.11%, rgba(255, 255, 255, 0.01) 102.39%)',
          boxShadow:
            '-24px -16px 12px 0 rgba(255, 255, 255, 0.3) inset, -8px -4px 6px 0 rgba(255, 255, 255, 0.4) inset, 12px 8px 20px 0 rgba(0, 0, 0, 0.075) inset, 4px 2px 8px 0 rgba(0, 0, 0, 0.05) inset, 47px 70px 100px 0 rgba(0, 0, 0, 0.08), 0 4px 24px 0 rgba(255, 255, 255, 0.15) inset, 0 -2px 12px 0 rgba(255, 255, 255, 0.25) inset',
        }}
      />
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>{children}</div>
    </div>
  );
}

/* ===== SessionShell (main) ===== */
export default function SessionShell({
  phase,
  flow: _flow,
  leftContentKey,
  leftContents,
  chatMessages,
  endSessionVisible,
  onSubmit,
  onEndSession,
  leftOverlay,
}: Props) {
  const { date, time } = useLiveClock();
  const [inputValue, setInputValue] = useState('');

  // Measured pixel width of landing input text (or placeholder when empty).
  // Used to grow the small pill while typing, maintaining 94px L/R padding.
  const measureRef = useRef<HTMLSpanElement>(null);
  const [textWidth, setTextWidth] = useState(0);
  useLayoutEffect(() => {
    if (measureRef.current) setTextWidth(measureRef.current.offsetWidth);
  }, [inputValue]);

  // Clear input whenever phase changes back to landing
  useEffect(() => {
    if (phase === 'landing') setInputValue('');
  }, [phase]);

  // Clear input after successful submit (driven by chat message count change)
  const prevMsgCount = useRef(chatMessages.length);
  useEffect(() => {
    if (chatMessages.length > prevMsgCount.current) {
      setInputValue('');
    }
    prevMsgCount.current = chatMessages.length;
  }, [chatMessages.length]);

  const handleSubmit = useCallback(() => {
    const v = inputValue.trim();
    if (v) onSubmit(v);
  }, [inputValue, onSubmit]);

  // Pill is large for: expanding (growing), content (idle), ending (fading out).
  // Pill is small for: landing (idle), shrinking (shrinking).
  const expanded = phase === 'expanding' || phase === 'content' || phase === 'ending';
  const contentVisible = phase === 'content';
  const landingTextVisible = phase === 'landing';
  // Slow 2s pill transition only during expanding/shrinking (not while typing).
  const isExpandShrinking = phase === 'expanding' || phase === 'shrinking';

  // Compute small-pill width: PILL_SMALL_W default; grow to fit text plus 94px
  // padding on each side, mic icon (13.895), and 22px gap. Add a small buffer
  // for the caret so the cursor doesn't cling to the edge.
  const MIC_W = 13.895;
  const GAP = 22;
  const PAD = 94;
  const CARET_BUF = 6;
  const smallPillWidth = Math.max(
    PILL_SMALL_W,
    PAD * 2 + MIC_W + GAP + textWidth + CARET_BUF,
  );

  // Track which messages were just added (for slide-up animation on the newest one)
  const prevIdsRef = useRef<Set<string>>(new Set());
  const justAddedIds = new Set<string>();
  for (const m of chatMessages) {
    if (!prevIdsRef.current.has(m.id)) justAddedIds.add(m.id);
  }
  useEffect(() => {
    prevIdsRef.current = new Set(chatMessages.map(m => m.id));
  });

  // Keep newest messages in view if the chat overflows the available height.
  const chatColRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = chatColRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [chatMessages.length]);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: '#F4F4F9',
      }}
    >
      {/* Clock — always visible */}
      <div
        style={{
          position: 'absolute',
          top: '50px',
          right: '41px',
          textAlign: 'right',
          color: 'black',
          fontStyle: 'normal',
          whiteSpace: 'nowrap',
        }}
      >
        <p style={{ fontFamily: "'Google_Sans', sans-serif", lineHeight: 'normal', opacity: 0.5, fontSize: '16px', margin: 0 }}>{date}</p>
        <p style={{ fontFamily: "'Google_Sans', sans-serif", lineHeight: 0.91, opacity: 0.8, fontSize: '36px', letterSpacing: '-1.08px', fontWeight: 500, margin: 0 }}>{time}</p>
      </div>

      {/* Hidden span — measures text width so the small pill can grow with input. */}
      <span
        ref={measureRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          visibility: 'hidden',
          whiteSpace: 'pre',
          pointerEvents: 'none',
          fontFamily: "'Google_Sans', sans-serif",
          fontSize: '24.951px',
          lineHeight: 1.5,
          left: '-9999px',
          top: 0,
        }}
      >
        {inputValue === '' ? '|Ask Anything' : inputValue}
      </span>

      {/* The pill — single element, animates */}
      <Pill expanded={expanded} smallWidth={smallPillWidth} isTransitioning={isExpandShrinking}>
        {/* ===== Small (landing) content ===== */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            padding: '0 94px',
            opacity: landingTextVisible ? 1 : 0,
            transition: `opacity ${CONTENT_FADE}ms ease-in-out`,
            pointerEvents: landingTextVisible ? 'auto' : 'none',
            gap: '22px',
          }}
        >
          <MicIcon size="lg" />
          <div style={{ position: 'relative', flex: 1 }}>
            {inputValue === '' && (
              <span
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: 0,
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                  fontFamily: "'Google_Sans', sans-serif",
                  fontSize: '24.951px',
                  color: 'black',
                  lineHeight: 1.5,
                }}
              >
                |Ask Anything
              </span>
            )}
            <input
              type="text"
              value={phase === 'landing' ? inputValue : ''}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && inputValue.trim() !== '') handleSubmit();
              }}
              disabled={phase !== 'landing'}
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                fontFamily: "'Google_Sans', sans-serif",
                fontSize: '24.951px',
                color: 'black',
                caretColor: 'black',
                width: '100%',
              }}
            />
          </div>
        </div>

        {/* ===== Large (expanded) content ===== */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: contentVisible ? 1 : 0,
            // Use visibility to forcibly remove this subtree from
            // hit-testing when hidden — opacity + pointer-events alone
            // doesn't stop descendants that explicitly set pointer-events.
            visibility: contentVisible ? 'visible' : 'hidden',
            transition: contentVisible
              ? `opacity ${CONTENT_FADE}ms ease-in-out, visibility 0s 0s`
              : `opacity ${CONTENT_FADE}ms ease-in-out, visibility 0s ${CONTENT_FADE}ms`,
            pointerEvents: contentVisible ? 'auto' : 'none',
          }}
        >
          {/* Left panel — crossfade via keyed layers */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: `${PILL_LARGE_W - 433.75}px`, // 1383.25px
              height: '100%',
              overflow: 'hidden',
              borderRadius: '60px 0 0 60px',
            }}
          >
            {Object.entries(leftContents).map(([k, node]) => (
              <div
                key={k}
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: k === leftContentKey ? 1 : 0,
                  transition: `opacity ${LEFT_CROSSFADE}ms ease-in-out`,
                  // Must be 'none' when the expanded layer isn't visible,
                  // otherwise this invisible layer sits on top of the
                  // landing input and eats clicks.
                  pointerEvents: contentVisible && k === leftContentKey ? 'auto' : 'none',
                }}
              >
                {node}
              </div>
            ))}
          </div>

          {/* Left overlay (action buttons that belong to left but are positioned specially) */}
          {leftOverlay}

          {/* Right chat column background */}
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              width: '433.75px',
              height: '100%',
              background: 'rgba(121, 121, 121, 0.1)',
              borderRadius: '0 60px 60px 0',
            }}
          />

          {/* End session button — top-right of chat column */}
          <button
            onClick={onEndSession}
            style={{
              position: 'absolute',
              top: '60px',
              right: '52px',
              background: '#960000',
              border: 'none',
              color: 'white',
              fontFamily: "'Google_Sans', sans-serif",
              fontWeight: 500,
              fontSize: '14px',
              padding: '9px 31.5px 7.5px',
              borderRadius: '53.25px',
              cursor: 'pointer',
              opacity: endSessionVisible ? 1 : 0,
              pointerEvents: endSessionVisible ? 'auto' : 'none',
              transition: `opacity ${AI_BUBBLE_FADE}ms ease-in-out`,
              zIndex: 3,
            }}
          >
            end session
          </button>

          {/* Chat messages column — anchor newest to the bottom so the
              latest user/AI exchange is always visible above the input.
              Older messages are pushed up; the scroll area shows everything
              that fits the available height. */}
          <div
            style={{
              position: 'absolute',
              right: '20px',
              top: '110px',
              width: '394px',
              height: 'calc(100% - 190px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              gap: '20px',
              overflowY: 'auto',
              overflowX: 'hidden',
              scrollbarWidth: 'none',
            }}
            ref={chatColRef}
          >
            {chatMessages.map(m => (
              <ChatBubble key={m.id} msg={m} justAdded={justAddedIds.has(m.id)} />
            ))}
          </div>

          {/* Chat input — bottom of chat column */}
          <div
            style={{
              position: 'absolute',
              right: '20px',
              bottom: '20px',
              width: '394px',
            }}
          >
            <ChatInput
              enabled={phase === 'content'}
              value={inputValue}
              onChange={setInputValue}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </Pill>
    </div>
  );
}
