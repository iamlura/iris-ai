import { useState, useRef, useEffect } from 'react';

// Fresh Figma asset URLs — node 1-1779 (Q3 Summary) + 1-2366 (Calendar)
const imgRectangle3473784 = "https://www.figma.com/api/mcp/asset/df1ee347-b571-4056-88d5-48e05d6b6c1d";
const imgRectangle3473785 = "https://www.figma.com/api/mcp/asset/24fc519f-dd12-4ac9-b597-d0999b655b0a";
const imgGroup1010109929  = "https://www.figma.com/api/mcp/asset/b9c706f4-344e-4844-8ef6-81af64258219";
const imgGroup1010109849  = "https://www.figma.com/api/mcp/asset/ed36f23a-2fe1-4e85-81fc-eeba612da2f0";
const imgGroup1010109853  = "https://www.figma.com/api/mcp/asset/a6fbd869-7bf8-41c7-811b-b8cc9ee97b3f";
const imgGroup1010109854  = "https://www.figma.com/api/mcp/asset/32f32414-f696-4d13-b2e9-975da05004fb";

// Calendar screenshot — node 1-2366
const imgCalendar = "https://www.figma.com/api/mcp/asset/d092aea3-2af3-4163-8546-4cc83f9fa40a";

// Document thumbnails
const imgImage1197 = "https://www.figma.com/api/mcp/asset/12fe8153-03f1-445f-a26d-bbabc4c81753";
const imgImage1198 = "https://www.figma.com/api/mcp/asset/f583a906-b630-47d6-b9df-fd4e4d020353";
const imgImage1199 = "https://www.figma.com/api/mcp/asset/16d54682-921d-4933-b5fe-6724101c8d16";
const imgImage1200 = "https://www.figma.com/api/mcp/asset/db04faac-725f-4c07-8b7b-a3a270679a68";
const imgImage1202 = "https://www.figma.com/api/mcp/asset/8414947e-e58d-4eb1-bc1d-e3867c0d504c";
const imgImage1203 = "https://www.figma.com/api/mcp/asset/71998dd7-184a-4282-929a-4dd094338724";
const imgImage1123 = "https://www.figma.com/api/mcp/asset/88c798fe-f0ad-46f7-99f0-eb8cd2962f4f";
const imgImage1124 = "https://www.figma.com/api/mcp/asset/48a222fa-0b9d-436b-aaee-eb344ba1314d";
const imgImage1201 = "https://www.figma.com/api/mcp/asset/896b7dce-dcf7-45e5-aa17-0c2722308b27";
const imgImage1204 = "https://www.figma.com/api/mcp/asset/64ababf1-9b20-4614-902c-5c131e473727";
const imgImage1205 = "https://www.figma.com/api/mcp/asset/0dfad47e-07c3-4b0c-99dc-c6ed3d089f6c";
const imgImage1206 = "https://www.figma.com/api/mcp/asset/16a0fe7f-6639-4e64-ac25-294a6705220e";
const imgImage1207 = "https://www.figma.com/api/mcp/asset/95591b84-3b4c-41fa-b98b-5a761214a72f";
const imgImage1208 = "https://www.figma.com/api/mcp/asset/77a90440-6027-4df8-b9a5-c9e1b4ceafc2";

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

type SubScreen = 'q3' | 'calendar';

// Absolute positions matching Figma 1920×1200 canvas
// Card: center=960,634.2 size=1816.5×823.61 → top=222.4 left=51.75
const CARD_LEFT = 51.75;
const CARD_TOP = 222.395;
const CARD_W = 1816.5;
const CARD_H = 823.61;
// Input bar inside right sidebar: card-relative center x=677.09, y=356.59 from card center
// Card center y = 634.2 → input abs top = 634.2 + 356.59 - 94.42/2 = ~943.5
// But Figma says top-of-card=222.4, card-center-y=634.2
// input bar top (abs) = CARD_TOP + CARD_H/2 + 356.59 - 11 (half bar height ~22) ≈ 222.4+411.8+356.59-11 = 979.8
// Let's use exact Figma: input bar top=896.16 within the scroll wrapper which starts at top=154
// So abs top = 154 + 897 - 111.2(scroll offset) = ~940 → let's just use 900px from top of screen
const INPUT_ABS_TOP = 154 + 897 - 111; // ≈ 940
const INPUT_ABS_LEFT = CARD_LEFT + CARD_W / 2 + 677.09 - 396 / 2; // right sidebar center - half width

export default function Frame2055246625({
  visible,
  onReset,
}: {
  visible: boolean;
  onReset?: () => void;
}) {
  const [subScreen, setSubScreen] = useState<SubScreen>('q3');
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [scheduleBubbleVisible, setScheduleBubbleVisible] = useState(false);
  const [endSessionVisible, setEndSessionVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { date, time } = useLiveClock();

  useEffect(() => {
    if (visible) {
      setSubScreen('q3');
      setInputValue('');
      setScheduleBubbleVisible(false);
      setEndSessionVisible(false);
    }
  }, [visible]);

  // Auto-focus input when screen becomes visible
  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => inputRef.current?.focus(), 800);
      return () => clearTimeout(t);
    }
  }, [visible]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const val = inputValue.trim().toLowerCase();
      if (val.includes('schedule') || val.includes('meeting')) {
        setScheduleBubbleVisible(true);
        setInputValue('');
        setTimeout(() => {
          setSubScreen('calendar');
          setTimeout(() => setEndSessionVisible(true), 2000);
        }, 1000);
      }
    }
  };

  return (
    <div
      className="absolute inset-0 transition-opacity duration-700"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none', background: '#f1f1f1' }}
    >
      {/* Live clock — right-aligned, date above time */}
      <div className="absolute" style={{ top: '50px', right: '53px', textAlign: 'right' }}>
        <p style={{ fontFamily: "'Google_Sans', sans-serif", fontSize: '16px', opacity: 0.5, lineHeight: 'normal', margin: 0 }}>{date}</p>
        <p style={{ fontFamily: "'Google_Sans', sans-serif", fontWeight: 500, fontSize: '36px', opacity: 0.8, lineHeight: 0.91, letterSpacing: '-1.08px', margin: 0 }}>{time}</p>
      </div>

      {/* End session button */}
      <button
        onClick={onReset}
        style={{
          position: 'absolute', top: '55px', right: '294px',
          background: '#960000', border: 'none', color: 'white',
          fontFamily: "'Google_Sans', sans-serif", fontWeight: 500, fontSize: '14px',
          padding: '9px 31.5px 7.5px', borderRadius: '53.25px', cursor: 'pointer',
          opacity: endSessionVisible ? 1 : 0,
          pointerEvents: endSessionVisible ? 'auto' : 'none',
          transition: 'opacity 0.5s',
          zIndex: 20,
        }}
      >
        end session
      </button>

      {/* Main card — NO overflow:clip so nothing gets cut */}
      <div
        style={{
          position: 'absolute',
          width: `${CARD_W}px`, height: `${CARD_H}px`,
          left: `${CARD_LEFT}px`, top: `${CARD_TOP}px`,
          background: 'rgba(0,0,0,0)',
          boxShadow: '47px 70px 100px 0px rgba(0,0,0,0.05)',
          borderRadius: '60px',
        }}
      >
        {/* Sidebar logo */}
        <div style={{
          position: 'absolute', width: '120.96px', height: '30.319px',
          left: 'calc(50% - 818.77px)', top: 'calc(50% - 364.48px)',
          transform: 'translate(-50%, -50%)',
          opacity: subScreen === 'calendar' ? 0 : 1, transition: 'opacity 0.5s',
        }}>
          <img alt="" style={{ position: 'absolute', inset: 0, maxWidth: 'none', width: '100%', height: '100%', display: 'block' }} src={imgGroup1010109929} />
        </div>

        {/* Sidebar thumbnails */}
        <div style={{
          position: 'absolute', width: '151px', height: '723px',
          left: 'calc(50% - 818.75px)', top: 'calc(50% + 36.09px)',
          transform: 'translate(-50%, -50%)',
          borderRadius: '20px 20px 50px 20px',
          overflow: 'clip',
          opacity: subScreen === 'calendar' ? 0 : 1, transition: 'opacity 0.5s',
        }}>
          <div style={{ position: 'absolute', width: '151.238px', height: '85.072px', left: '50%', top: 'calc(50% - 318.96px)', transform: 'translate(-50%, -50%)', borderRadius: '20px' }}>
            <img alt="" style={{ position: 'absolute', inset: 0, maxWidth: 'none', objectFit: 'cover', borderRadius: '20px', width: '100%', height: '100%', pointerEvents: 'none' }} src={imgRectangle3473784} />
          </div>
          {([
            { top: 'calc(50% - 225.89px)', clip: { w: '303.93%', h: '300.42%', l: '0', t: '0' } },
            { top: 'calc(50% - 132.82px)', clip: { w: '303.93%', h: '310.94%', l: '0', t: '-105.85%' } },
            { top: 'calc(50% - 39.75px)',  clip: { w: '303.93%', h: '308.53%', l: '0', t: '-207.35%' } },
            { top: 'calc(50% + 53.32px)',  clip: { w: '305.5%',  h: '305.95%', l: '-102.29%', t: '-1.5%' } },
            { top: 'calc(50% + 146.39px)', clip: { w: '302.45%', h: '301.42%', l: '-201.83%', t: '0' } },
            { top: 'calc(50% + 239.46px)', clip: { w: '304.61%', h: '311.29%', l: '-102.99%', t: '-208.35%' } },
            { top: 'calc(50% + 332.53px)', clip: { w: '302.53%', h: '311.29%', l: '-201.6%', t: '-208.35%' } },
          ] as const).map(({ top, clip }, i) => (
            <div key={i} style={{ position: 'absolute', width: '151.238px', height: '85.072px', left: '50%', top, transform: 'translate(-50%, -50%)', borderRadius: '20px', overflow: 'hidden' }}>
              <img alt="" style={{ position: 'absolute', maxWidth: 'none', width: clip.w, height: clip.h, left: clip.l, top: clip.t, pointerEvents: 'none' }} src={imgRectangle3473785} />
            </div>
          ))}
        </div>

        {/* White doc area */}
        <div style={{
          position: 'absolute', width: '1175.145px', height: '795.397px',
          left: 'calc(50% - 145.58px)', top: 'calc(50% - 0.11px)',
          transform: 'translate(-50%, -50%)',
          background: 'white', borderRadius: '20px',
          opacity: subScreen === 'calendar' ? 0 : 0.8, transition: 'opacity 0.5s',
        }} />

        {/* Q3 Summary title */}
        <div style={{
          position: 'absolute',
          left: 'calc(50% - 607.21px)', top: 'calc(50% - 0.11px)',
          transform: 'translateY(-50%)',
          opacity: subScreen === 'calendar' ? 0 : 0.8, transition: 'opacity 0.5s',
          whiteSpace: 'nowrap',
        }}>
          <p style={{ fontFamily: "'Google_Sans', sans-serif", fontWeight: 700, fontSize: '52.054px', color: 'black', lineHeight: 1.5, margin: 0 }}>Q3 Summary</p>
        </div>

        {/* Calendar image */}
        <div style={{
          position: 'absolute', width: '1335.191px', height: '795.396px',
          right: '466.56px', top: '14.14px',
          borderRadius: '50px 20px 20px 50px', overflow: 'hidden',
          opacity: subScreen === 'calendar' ? 1 : 0, transition: 'opacity 0.7s',
        }}>
          <img alt="Outlook Calendar" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'left top' }} src={imgCalendar} />
        </div>

        {/* Right sidebar bg */}
        <div style={{
          position: 'absolute', width: '433.75px', height: '795.396px',
          left: 'calc(50% + 677.09px)', top: 'calc(50% - 0.11px)',
          transform: 'translate(-50%, -50%)',
          background: '#797979', opacity: 0.1,
          borderRadius: '20px 50px 50px 20px',
        }} />

        {/* User prompt bubble */}
        <div style={{
          position: 'absolute', background: '#f8f8f8', borderRadius: '10px',
          left: 'calc(50% + 708px)', top: 'calc(50% - 326.8px)',
          transform: 'translate(-50%, -50%)', padding: '6.5px 20px 5.5px',
        }}>
          <p style={{ fontFamily: "'Google_Sans', sans-serif", fontSize: '16px', color: 'black', width: '281px', lineHeight: 1.5, margin: 0 }}>"I need to create Q3 performance summary"</p>
        </div>

        {/* AI response 1 */}
        <div style={{
          position: 'absolute', borderRadius: '20px',
          left: 'calc(50% + 655.03px)', top: 'calc(50% - 224.8px)',
          transform: 'translate(-50%, -50%)', height: '88px', padding: '16px 20px 15px',
          display: 'flex', alignItems: 'center',
        }}>
          <p style={{ fontFamily: "'Google_Sans', sans-serif", fontSize: '16px', color: 'black', width: '310.404px', lineHeight: 1.5, margin: 0 }}>
            A document containing all the projects worked on this quarter was made. Please confirm if you are fine with it or delete documents you wish to remove
          </p>
        </div>

        {/* Schedule bubble */}
        <div style={{
          position: 'absolute', background: '#f8f8f8', borderRadius: '10px',
          left: 'calc(50% + 708px)', top: 'calc(50% - 122.8px)',
          transform: 'translate(-50%, -50%)', padding: '6.5px 20px 5.5px',
          opacity: scheduleBubbleVisible ? 1 : 0, transition: 'opacity 0.3s',
        }}>
          <p style={{ fontFamily: "'Google_Sans', sans-serif", fontSize: '16px', color: 'black', width: '281px', lineHeight: 1.5, margin: 0 }}>Schedule a meeting for Q3 summary</p>
        </div>

        {/* AI response 2 — meeting scheduled */}
        <div style={{
          position: 'absolute', borderRadius: '20px',
          left: 'calc(50% + 655.03px)', top: 'calc(50% + 76.2px)',
          transform: 'translate(-50%, -50%)', padding: '16px 20px 15px',
          opacity: subScreen === 'calendar' ? 1 : 0, transition: 'opacity 0.7s',
          display: 'flex', flexDirection: 'column', gap: '5px',
        }}>
          <p style={{ fontFamily: "'Google_Sans', sans-serif", fontSize: '16px', color: 'black', width: '310.404px', lineHeight: 1.5, margin: 0 }}>
            Meeting was scheduled for Q3 summary with 85 invitees
          </p>
          <p style={{ fontFamily: "'Google_Sans', sans-serif", fontSize: '11px', color: 'black', width: '310.404px', lineHeight: 1.5, margin: 0, opacity: 0.5, textDecoration: 'underline' }}>
            see invitees
          </p>
        </div>
      </div>

      {/* INPUT BAR — outside the card, no overflow clipping possible */}
      <div
        onClick={() => inputRef.current?.focus()}
        style={{
          position: 'absolute',
          left: `${INPUT_ABS_LEFT}px`,
          top: `${INPUT_ABS_TOP}px`,
          width: '396px',
          background: '#d1d1d1',
          borderRadius: '36px',
          padding: '11px 27px',
          display: 'flex', gap: '13px', alignItems: 'center',
          cursor: 'text',
          zIndex: 15,
        }}
      >
        <div style={{ height: '15.149px', width: '7.816px', position: 'relative', flexShrink: 0 }}>
          <div style={{ position: 'absolute', inset: '0 -5.4% -2.78% -5.4%' }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgGroup1010109849} />
          </div>
        </div>
        <div style={{ position: 'relative', flex: 1 }}>
          {inputValue === '' && (
            <span style={{
              position: 'absolute', top: 0, left: 0, pointerEvents: 'none',
              fontFamily: "'Google_Sans', sans-serif", fontSize: '16px', color: 'black',
              lineHeight: 1.5, opacity: isFocused ? 0.3 : 1, transition: 'opacity 0.2s',
            }}>|Ask Anything</span>
          )}
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
            style={{
              background: 'transparent', border: 'none', outline: 'none',
              fontFamily: "'Google_Sans', sans-serif", fontSize: '16px',
              color: 'black', caretColor: 'black', width: '100%',
              position: 'relative', zIndex: 1,
            }}
          />
        </div>
      </div>

      {/* Documents section — top: 1047.61px from screen top (70px below card bottom) */}
      <div style={{ position: 'absolute', background: '#f7f7f7', height: '641px', left: '54.25px', opacity: 0.3, top: '1047.61px', width: '1817px', borderRadius: '60px' }} />
      <p style={{ position: 'absolute', fontFamily: "'Google_Sans', sans-serif", fontWeight: 500, fontSize: '24px', color: 'black', left: '788.75px', top: '1088.62px', letterSpacing: '-0.72px', lineHeight: 0.91, opacity: 0.5, whiteSpace: 'nowrap', margin: 0 }}>
        Documents included in the file
      </p>

      {/* Doc row 1 — top: 1143.74px */}
      {([
        { l: 'calc(50% - 758.3px)', img: imgRectangle3473785, clip: { w: '200.61%', h: '125.34%', l: '0%', t: '0%' }, delL: '275.04px', delIcon: imgGroup1010109853 },
        { l: 'calc(50% - 505.2px)', img: imgImage1197, cover: true, delL: '528.04px', delIcon: imgGroup1010109853 },
        { l: 'calc(50% - 252.1px)', img: imgImage1198, clip: { w: '209.6%', h: '137.19%', l: '-93.81%', t: '-18.6%' }, delL: '781.04px', delIcon: imgGroup1010109853 },
        { l: 'calc(50% + 1px)',     img: imgImage1199, cover: true, delL: '1034.04px', delIcon: imgGroup1010109853 },
        { l: 'calc(50% + 254.1px)', img: imgImage1200, clip: { w: '113.18%', h: '144.2%', l: '-6.59%', t: '-4.78%' }, delL: '1287.04px', delIcon: imgGroup1010109853 },
        { l: 'calc(50% + 507.2px)', img: imgImage1202, clip: { w: '161.44%', h: '172.26%', l: '-30.72%', t: '-28.24%' }, r: '10px', delL: '1541.04px', delIcon: imgGroup1010109853 },
        { l: 'calc(50% + 760.3px)', img: imgImage1203, cover: true, r: '10px', delL: '1794.04px', delIcon: imgGroup1010109853 },
      ] as const).map(({ l, img, clip, cover, r, delL, delIcon }, i) => (
        <div key={`r1-${i}`}>
          <div style={{ position: 'absolute', height: '241.169px', left: l, top: '1143.74px', transform: 'translateX(-50%)', width: '217.102px', borderRadius: r || '20px', opacity: 0.8 }}>
            {cover ? (
              <img alt="" style={{ position: 'absolute', inset: 0, maxWidth: 'none', objectFit: 'cover', borderRadius: r || '20px', width: '100%', height: '100%', pointerEvents: 'none' }} src={img} />
            ) : (
              <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: r || '20px', pointerEvents: 'none' }}>
                <img alt="" style={{ position: 'absolute', maxWidth: 'none', width: (clip as any).w, height: (clip as any).h, left: (clip as any).l, top: (clip as any).t }} src={img} />
              </div>
            )}
          </div>
          <img alt="" style={{ position: 'absolute', width: '30.319px', height: '30.319px', left: delL, top: '1150.18px', opacity: 0.8 }} src={delIcon} />
        </div>
      ))}

      {/* Doc row 2 — top: 1418.03px */}
      {([
        { l: 'calc(50% - 758.3px)', img: imgImage1123, delL: '275.04px' },
        { l: 'calc(50% - 505.2px)', img: imgImage1201, delL: '528.04px' },
        { l: 'calc(50% - 252.1px)', img: imgImage1204, delL: '781.04px' },
        { l: 'calc(50% + 1px)',     img: imgImage1205, delL: '1034.04px' },
        { l: 'calc(50% + 254.1px)', img: imgImage1206, delL: '1287.04px' },
        { l: 'calc(50% + 507.2px)', img: imgImage1207, delL: '1541.04px' },
        { l: 'calc(50% + 760.3px)', img: imgImage1208, delL: '1794.04px' },
      ] as const).map(({ l, img, delL }, i) => (
        <div key={`r2-${i}`}>
          <div style={{ position: 'absolute', height: '241.169px', left: l, top: '1418.03px', transform: 'translateX(-50%)', width: '217.102px', borderRadius: '20px', opacity: 0.8 }}>
            <img alt="" style={{ position: 'absolute', inset: 0, maxWidth: 'none', objectFit: 'cover', borderRadius: '20px', width: '100%', height: '100%', pointerEvents: 'none' }} src={img} />
          </div>
          <img alt="" style={{ position: 'absolute', width: '30.319px', height: '30.319px', left: delL, top: '1424.47px', opacity: 0.8 }} src={imgGroup1010109854} />
        </div>
      ))}
    </div>
  );
}
