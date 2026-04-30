/**
 * Left-panel content for the Q3 flow.
 * Renders at 1383.25×990 (left portion of the expanded pill).
 * Q3 Summary screen and Calendar screen are separate exports; the shell
 * handles crossfading between them via opacity layers.
 */

// Asset URLs from Figma (same as original Frame2055246625)
const imgRectangle3473784 = "https://www.figma.com/api/mcp/asset/df1ee347-b571-4056-88d5-48e05d6b6c1d";
const imgRectangle3473785 = "https://www.figma.com/api/mcp/asset/24fc519f-dd12-4ac9-b597-d0999b655b0a";

/**
 * Shared frame wrapper used by all left-content screens — same styling as
 * the Email card (inset 20, 50px corner radius, clipped).
 */
function LeftFrame({
  background,
  centered = true,
  children,
}: {
  background?: string;
  centered?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div style={{
      position: 'absolute',
      inset: '20px',
      borderRadius: '55px',
      overflow: 'hidden',
      background,
      display: centered ? 'flex' : 'block',
      alignItems: centered ? 'center' : undefined,
      justifyContent: centered ? 'center' : undefined,
    }}>
      {children}
    </div>
  );
}

/* ==========================================================================
   Q3 SUMMARY
   Shows sidebar with thumbnail strip + white doc area with "Q3 Summary" title.
   ========================================================================== */
export function Q3SummaryLeft() {
  // Doc preview on top, slide deck thumbnails as a horizontal strip below.
  const STRIP_W = 1300;
  const DOC_H = 720;
  const THUMB_CLIPS = [
    { w: '303.93%', h: '300.42%', l: '0', t: '0' },
    { w: '303.93%', h: '310.94%', l: '0', t: '-105.85%' },
    { w: '303.93%', h: '308.53%', l: '0', t: '-207.35%' },
    { w: '305.5%',  h: '305.95%', l: '-102.29%', t: '-1.5%' },
    { w: '302.45%', h: '301.42%', l: '-201.83%', t: '0' },
    { w: '304.61%', h: '311.29%', l: '-102.99%', t: '-208.35%' },
    { w: '302.53%', h: '311.29%', l: '-201.6%', t: '-208.35%' },
  ] as const;
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <LeftFrame>
        <div style={{ width: `${STRIP_W}px`, display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {/* White doc preview */}
          <div style={{
            width: '100%',
            height: `${DOC_H}px`,
            background: 'white',
            borderRadius: '20px',
            opacity: 0.8,
            position: 'relative',
          }}>
            <p style={{
              position: 'absolute',
              left: '50px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontFamily: "'Google_Sans', sans-serif",
              fontWeight: 700,
              fontSize: '52.054px',
              color: 'black',
              lineHeight: 1.5,
              margin: 0,
              whiteSpace: 'nowrap',
            }}>
              Q3 Summary
            </p>
          </div>

          {/* Slide deck — 8 thumbnails laid horizontally */}
          <div style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(8, 1fr)',
            gap: '13px',
          }}>
            <div style={{
              aspectRatio: '151.238 / 85.072',
              borderRadius: '20px',
              overflow: 'hidden',
            }}>
              <img alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={imgRectangle3473784} />
            </div>
            {THUMB_CLIPS.map((clip, i) => (
              <div key={i} style={{
                aspectRatio: '151.238 / 85.072',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
              }}>
                <img alt="" style={{ position: 'absolute', maxWidth: 'none', width: clip.w, height: clip.h, left: clip.l, top: clip.t }} src={imgRectangle3473785} />
              </div>
            ))}
          </div>
        </div>
      </LeftFrame>
    </div>
  );
}

/* ==========================================================================
   CALENDAR — code-built version matching Figma node 1-2366.
   Dark theme, top toolbar, left sidebar (mini month + My calendars),
   week grid May 24-30 2026 with Q3 Meeting event Friday 9:30-10:30.
   ========================================================================== */

const CAL_BG = '#1f1f1f';
const CAL_SIDEBAR_BG = '#1a1a1a';
const CAL_BORDER = '#2d2d2d';
const CAL_TEXT = '#e5e5e5';
const CAL_MUTED = 'rgba(229, 229, 229, 0.5)';
const CAL_ACCENT = '#4d63dc';
const CAL_FONT = "'Google_Sans', sans-serif";

function CalToolbar() {
  const cell: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    padding: '6px 10px',
    fontSize: 13,
    color: CAL_TEXT,
  };
  return (
    <div style={{
      height: 50,
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      borderBottom: `1px solid ${CAL_BORDER}`,
      fontFamily: CAL_FONT,
      gap: 4,
      flexShrink: 0,
    }}>
      <div style={{ ...cell, opacity: 0.7 }}>
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none"><rect x="1" y="1" width="14" height="12" rx="1" stroke={CAL_TEXT} strokeOpacity="0.7" /><path d="M4 5h8M4 8h5" stroke={CAL_TEXT} strokeOpacity="0.7" /></svg>
      </div>
      <button style={{ ...cell, background: 'transparent', border: 'none', cursor: 'pointer' }}>Today</button>
      <button style={{ ...cell, background: 'transparent', border: 'none', cursor: 'pointer', opacity: 0.7, fontSize: 14 }}>{'‹'}</button>
      <button style={{ ...cell, background: 'transparent', border: 'none', cursor: 'pointer', opacity: 0.7, fontSize: 14 }}>{'›'}</button>
      <div style={{ ...cell }}>May 24–30, 2026 <span style={{ opacity: 0.6, fontSize: 9 }}>▾</span></div>
      <div style={{ flex: 1 }} />
      <div style={{ ...cell }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="2" width="12" height="11" rx="1" stroke={CAL_TEXT} strokeOpacity="0.7" /><path d="M1 5h12M4 1v3M10 1v3" stroke={CAL_TEXT} strokeOpacity="0.7" /></svg>
        Week <span style={{ opacity: 0.6, fontSize: 9 }}>▾</span>
      </div>
      <div style={{ ...cell, opacity: 0.7, letterSpacing: 1 }}>···</div>
      <div style={{ ...cell }}>
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><rect x="1" y="1" width="9" height="8" rx="1" stroke={CAL_TEXT} strokeOpacity="0.7" /><path d="M10 4l3-2v6l-3-2z" stroke={CAL_TEXT} strokeOpacity="0.7" /></svg>
        Meet now <span style={{ opacity: 0.6, fontSize: 9 }}>▾</span>
      </div>
      <button style={{
        display: 'flex', alignItems: 'center', gap: 6,
        background: CAL_ACCENT, color: 'white', border: 'none',
        padding: '7px 14px', borderRadius: 4, fontSize: 13, cursor: 'pointer',
        fontFamily: CAL_FONT, fontWeight: 500,
      }}>
        + New <span style={{ opacity: 0.8, fontSize: 9 }}>▾</span>
      </button>
    </div>
  );
}

function CalSidebar() {
  const weeks = [
    [26, 27, 28, 29, 30, 1, 2],
    [3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29, 30],
    [31, 1, 2, 3, 4, 5, 6],
  ];
  // Outside-month dates: April leading days in row 0, June trailing days in row 5 (except 31).
  const outside = (wi: number, di: number, d: number) =>
    (wi === 0 && d >= 26) || (wi === 5 && d !== 31);

  return (
    <div style={{
      width: 230,
      background: CAL_SIDEBAR_BG,
      borderRight: `1px solid ${CAL_BORDER}`,
      padding: '20px 18px',
      color: CAL_TEXT,
      fontFamily: CAL_FONT,
      fontSize: 13,
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      flexShrink: 0,
    }}>
      <div style={{ fontSize: 16, fontWeight: 500 }}>Calendar</div>

      {/* Month picker */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 9, opacity: 0.7 }}>▾</span>
            <span style={{ fontSize: 13 }}>May 2026</span>
          </div>
          <div style={{ display: 'flex', gap: 10, opacity: 0.7, fontSize: 12 }}>
            <span style={{ cursor: 'pointer' }}>↑</span>
            <span style={{ cursor: 'pointer' }}>↓</span>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', fontSize: 11, color: CAL_MUTED, marginBottom: 4 }}>
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <div key={i} style={{ padding: '4px 0' }}>{d}</div>)}
        </div>
        {weeks.map((week, wi) => (
          <div key={wi} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            textAlign: 'center',
            fontSize: 11,
            background: wi === 4 ? 'rgba(77, 99, 220, 0.25)' : 'transparent',
            borderRadius: 12,
            padding: '3px 0',
          }}>
            {week.map((d, di) => (
              <div key={di} style={{
                padding: '3px 0',
                opacity: outside(wi, di, d) ? 0.35 : 1,
                color: CAL_TEXT,
              }}>
                {d}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* My calendars */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 9, opacity: 0.7 }}>▾</span>
          <span>My calendars</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingLeft: 18 }}>
          <span style={{
            width: 12, height: 12, borderRadius: '50%',
            background: CAL_ACCENT, display: 'inline-block',
            boxShadow: `inset 0 0 0 2px ${CAL_ACCENT}`,
          }} />
          <span>Calendar</span>
        </div>
        <div style={{ paddingLeft: 30, color: CAL_MUTED, fontSize: 12 }}>Show all</div>
      </div>
    </div>
  );
}

function CalWeekView() {
  const days = [
    { date: 24, name: 'Sun' },
    { date: 25, name: 'Mon' },
    { date: 26, name: 'Tue' },
    { date: 27, name: 'Wed' },
    { date: 28, name: 'Thu' },
    { date: 29, name: 'Fri' },
    { date: 30, name: 'Sat' },
  ];
  const hours = ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM'];
  const ROW_H = 105;
  const TIME_COL_W = 56;
  const FRIDAY_INDEX = 5;
  // Q3 meeting: 9:30-10:30 → 1.5 row from start, 1 row tall
  const meetingTop = 1.5 * ROW_H;
  const meetingHeight = ROW_H;

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      color: CAL_TEXT,
      fontFamily: CAL_FONT,
      fontSize: 12,
      background: CAL_BG,
    }}>
      {/* Day header */}
      <div style={{ display: 'flex', borderBottom: `1px solid ${CAL_BORDER}`, flexShrink: 0 }}>
        <div style={{ width: TIME_COL_W, textAlign: 'center', padding: '14px 0', fontSize: 10, color: CAL_MUTED }}>UTC+9</div>
        {days.map(d => (
          <div key={d.date} style={{
            flex: 1,
            padding: '8px 0 6px 14px',
            borderLeft: `1px solid ${CAL_BORDER}`,
          }}>
            <div style={{ fontSize: 10, color: CAL_MUTED, marginBottom: 2 }}>{d.name}</div>
            <div style={{ fontSize: 22, fontWeight: 400 }}>{d.date}</div>
          </div>
        ))}
      </div>

      {/* Time grid */}
      <div style={{ position: 'relative', flex: 1, overflow: 'hidden' }}>
        {hours.map(h => (
          <div key={h} style={{ display: 'flex', height: ROW_H, borderBottom: `1px solid ${CAL_BORDER}` }}>
            <div style={{
              width: TIME_COL_W,
              fontSize: 10,
              color: CAL_MUTED,
              padding: '4px 8px 0',
              textAlign: 'right',
            }}>
              {h}
            </div>
            {days.map((_, di) => (
              <div key={di} style={{ flex: 1, borderLeft: `1px solid ${CAL_BORDER}` }} />
            ))}
          </div>
        ))}
        {/* Q3 Meeting block, absolutely positioned over Friday at 9:30-10:30 */}
        <div style={{
          position: 'absolute',
          top: meetingTop,
          left: `calc(${TIME_COL_W}px + (100% - ${TIME_COL_W}px) * ${FRIDAY_INDEX} / 7 + 2px)`,
          width: `calc((100% - ${TIME_COL_W}px) / 7 - 4px)`,
          height: meetingHeight - 4,
          background: CAL_ACCENT,
          borderRadius: 4,
          padding: '8px 10px',
          color: 'white',
          fontFamily: CAL_FONT,
          boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
        }}>
          <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.2 }}>Q3 Meeting</div>
          <div style={{ fontSize: 10, opacity: 0.85, marginTop: 2 }}>9:30–10:30</div>
        </div>
      </div>
    </div>
  );
}

export function CalendarLeft() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <LeftFrame background={CAL_BG} centered={false}>
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <CalToolbar />
          <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
            <CalSidebar />
            <CalWeekView />
          </div>
        </div>
      </LeftFrame>
    </div>
  );
}
