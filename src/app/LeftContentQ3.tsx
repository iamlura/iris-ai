/**
 * Left-panel content for the Q3 flow.
 * Renders at 1383.25×990 (left portion of the expanded pill).
 * Q3 Summary screen and Calendar screen are separate exports; the shell
 * handles crossfading between them via opacity layers.
 */

// Local user-provided calendar screenshot (replaces Figma export).
import imgCalendar from '../assets/outlook-schedule.png';

// Asset URLs from Figma (same as original Frame2055246625)
const imgRectangle3473784 = "https://www.figma.com/api/mcp/asset/df1ee347-b571-4056-88d5-48e05d6b6c1d";
const imgRectangle3473785 = "https://www.figma.com/api/mcp/asset/24fc519f-dd12-4ac9-b597-d0999b655b0a";
const imgGroup1010109929  = "https://www.figma.com/api/mcp/asset/b9c706f4-344e-4844-8ef6-81af64258219";

/* ==========================================================================
   Q3 SUMMARY
   Shows sidebar with thumbnail strip + white doc area with "Q3 Summary" title.
   ========================================================================== */
export function Q3SummaryLeft() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Sidebar logo (window chrome dots) */}
      <div style={{
        position: 'absolute',
        width: '120.96px',
        height: '30.319px',
        left: '50px',
        top: '50px',
      }}>
        <img alt="" style={{ width: '100%', height: '100%', display: 'block' }} src={imgGroup1010109929} />
      </div>

      {/* Sidebar thumbnails strip — bottom-aligned to white doc area
          (white doc: top=85, height=820, bottom=905; sidebar bottom=905) */}
      <div style={{
        position: 'absolute',
        width: '151px',
        height: '723px',
        left: '50px',
        top: '182px',
        borderRadius: '20px 20px 20px 50px',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', width: '151.238px', height: '85.072px', left: 0, top: 0, borderRadius: '20px' }}>
          <img alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} src={imgRectangle3473784} />
        </div>
        {([
          { top: 93, clip: { w: '303.93%', h: '300.42%', l: '0', t: '0' } },
          { top: 186, clip: { w: '303.93%', h: '310.94%', l: '0', t: '-105.85%' } },
          { top: 279, clip: { w: '303.93%', h: '308.53%', l: '0', t: '-207.35%' } },
          { top: 372, clip: { w: '305.5%', h: '305.95%', l: '-102.29%', t: '-1.5%' } },
          { top: 465, clip: { w: '302.45%', h: '301.42%', l: '-201.83%', t: '0' } },
          { top: 558, clip: { w: '304.61%', h: '311.29%', l: '-102.99%', t: '-208.35%' } },
          { top: 651, clip: { w: '302.53%', h: '311.29%', l: '-201.6%', t: '-208.35%' } },
        ] as const).map(({ top, clip }, i) => (
          <div key={i} style={{ position: 'absolute', width: '151.238px', height: '85.072px', left: 0, top: `${top}px`, borderRadius: '20px', overflow: 'hidden' }}>
            <img alt="" style={{ position: 'absolute', maxWidth: 'none', width: clip.w, height: clip.h, left: clip.l, top: clip.t }} src={imgRectangle3473785} />
          </div>
        ))}
      </div>

      {/* White doc area */}
      <div style={{
        position: 'absolute',
        width: '1100px',
        height: '820px',
        left: '230px',
        top: '85px',
        background: 'white',
        borderRadius: '20px',
        opacity: 0.8,
      }} />

      {/* Q3 Summary title */}
      <p style={{
        position: 'absolute',
        left: '280px',
        top: '460px',
        transform: 'translateY(-50%)',
        fontFamily: "'Google_Sans', sans-serif",
        fontWeight: 700,
        fontSize: '52.054px',
        color: 'black',
        opacity: 0.8,
        lineHeight: 1.5,
        margin: 0,
        whiteSpace: 'nowrap',
      }}>
        Q3 Summary
      </p>
    </div>
  );
}

/* ==========================================================================
   CALENDAR
   Full-bleed image of Outlook Calendar (node 1-2366).
   ========================================================================== */
export function CalendarLeft() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div style={{
        position: 'absolute',
        inset: '20px',
        borderRadius: '50px',
        overflow: 'hidden',
      }}>
        <img
          alt="Outlook Calendar"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'left top' }}
          src={imgCalendar}
        />
      </div>
      {/* Sidebar logo (window chrome dots) — overlay on top of calendar */}
      <div style={{
        position: 'absolute',
        width: '120.96px',
        height: '30.319px',
        left: '50px',
        top: '50px',
      }}>
        <img alt="" style={{ width: '100%', height: '100%', display: 'block' }} src={imgGroup1010109929} />
      </div>
    </div>
  );
}
