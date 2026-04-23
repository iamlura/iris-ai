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

// Document thumbnails — from node 48-15228 (freshest)
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

// Live clock hook — uses browser locale (no API needed)
function useLiveClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const date = now.toLocaleDateString('en-CA').replace(/-/g, '.'); // YYYY.MM.DD
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  return { date, time };
}

type SubScreen = 'q3' | 'calendar';

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const val = inputValue.trim().toLowerCase();
      if (val.includes('schedule') || val.includes('meeting')) {
        setScheduleBubbleVisible(true);
        setInputValue('');
        // 1s delay then show calendar
        setTimeout(() => {
          setSubScreen('calendar');
          // 2s after calendar appears, show end session
          setTimeout(() => setEndSessionVisible(true), 2000);
        }, 1000);
      }
    }
  };

  return (
    <div
      className="absolute inset-0 transition-opacity duration-700"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        background: '#f1f1f1',
      }}
    >
      {/* Live clock */}
      <p className="absolute font-['Google_Sans',sans-serif] leading-normal opacity-50 text-[16px] top-[50px] right-[129px]">{date}</p>
      <p className="absolute font-['Google_Sans',sans-serif] font-medium leading-[0.91] text-[36px] top-[72px] right-[53px] tracking-[-1.08px] opacity-80">{time}</p>

      {/* End session button — appears 2s after calendar */}
      <button
        className="absolute rounded-[53.25px] cursor-pointer transition-opacity duration-500"
        style={{
          background: '#960000',
          top: '55px',
          right: '294px',
          padding: '9px 31.5px 7.5px',
          opacity: endSessionVisible ? 1 : 0,
          pointerEvents: endSessionVisible ? 'auto' : 'none',
          border: 'none',
          color: 'white',
          fontFamily: "'Google_Sans', sans-serif",
          fontWeight: 500,
          fontSize: '14px',
          letterSpacing: 0,
          zIndex: 20,
        }}
        onClick={onReset}
      >
        end session
      </button>

      {/* Scrollable wrapper — matches Figma node structure */}
      <div className="absolute left-[53.25px] top-[154px] w-[1818px] overflow-x-clip overflow-y-auto rounded-tl-[60px] rounded-tr-[60px]" style={{ height: '1046px' }}>

        {/* Main card */}
        <div
          className="absolute rounded-[60px] overflow-clip"
          style={{
            width: '1816.5px',
            height: '823.61px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, calc(-50% - 111.2px))',
            background: 'rgba(0,0,0,0)',
            boxShadow: '47px 70px 100px 0px rgba(0,0,0,0.05)',
          }}
        >
          {/* Sidebar logo — hidden on calendar */}
          <div
            className="absolute transition-opacity duration-500"
            style={{
              width: '120.96px', height: '30.319px',
              left: 'calc(50% - 818.77px)', top: 'calc(50% - 364.48px)',
              transform: 'translate(-50%, -50%)',
              opacity: subScreen === 'calendar' ? 0 : 1,
            }}
          >
            <img alt="" className="absolute inset-0 max-w-none size-full block" src={imgGroup1010109929} />
          </div>

          {/* Sidebar thumbnails — hidden on calendar */}
          <div
            className="absolute overflow-clip rounded-bl-[50px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px] transition-opacity duration-500"
            style={{
              width: '151px', height: '723px',
              left: 'calc(50% - 818.75px)', top: 'calc(50% + 36.09px)',
              transform: 'translate(-50%, -50%)',
              opacity: subScreen === 'calendar' ? 0 : 1,
            }}
          >
            <div className="absolute" style={{ width: '151.238px', height: '85.072px', left: '50%', top: 'calc(50% - 318.96px)', transform: 'translate(-50%, -50%)', borderRadius: '20px' }}>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle3473784} />
            </div>
            {[
              { top: 'calc(50% - 225.89px)', clip: { w: '303.93%', h: '300.42%', l: '0', t: '0' } },
              { top: 'calc(50% - 132.82px)', clip: { w: '303.93%', h: '310.94%', l: '0', t: '-105.85%' } },
              { top: 'calc(50% - 39.75px)',  clip: { w: '303.93%', h: '308.53%', l: '0', t: '-207.35%' } },
              { top: 'calc(50% + 53.32px)',  clip: { w: '305.5%',  h: '305.95%', l: '-102.29%', t: '-1.5%' } },
              { top: 'calc(50% + 146.39px)', clip: { w: '302.45%', h: '301.42%', l: '-201.83%', t: '0' } },
              { top: 'calc(50% + 239.46px)', clip: { w: '304.61%', h: '311.29%', l: '-102.99%', t: '-208.35%' } },
              { top: 'calc(50% + 332.53px)', clip: { w: '302.53%', h: '311.29%', l: '-201.6%', t: '-208.35%' } },
            ].map(({ top, clip }, i) => (
              <div key={i} className="absolute" style={{ width: '151.238px', height: '85.072px', left: '50%', top, transform: 'translate(-50%, -50%)', borderRadius: '20px' }}>
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                  <img alt="" className="absolute max-w-none" style={{ width: clip.w, height: clip.h, left: clip.l, top: clip.t }} src={imgRectangle3473785} />
                </div>
              </div>
            ))}
          </div>

          {/* White doc area — hidden on calendar */}
          <div
            className="absolute rounded-[20px] transition-opacity duration-500"
            style={{
              width: '1175.145px', height: '795.397px',
              left: 'calc(50% - 145.58px)', top: 'calc(50% - 0.11px)',
              transform: 'translate(-50%, -50%)',
              background: 'white',
              opacity: subScreen === 'calendar' ? 0 : 0.8,
            }}
          />

          {/* Q3 Summary title — hidden on calendar */}
          <div
            className="absolute transition-opacity duration-500"
            style={{
              left: 'calc(50% - 607.21px)',
              top: 'calc(50% - 0.11px)',
              transform: 'translateY(-50%)',
              opacity: subScreen === 'calendar' ? 0 : 1,
              fontFamily: "'Google_Sans', sans-serif",
              fontWeight: 700,
              fontSize: '52.054px',
              color: 'black',
              opacity80: 0.8,
              whiteSpace: 'nowrap',
            }}
          >
            <p style={{ opacity: 0.8, margin: 0, lineHeight: 1.5 }}>Q3 Summary</p>
          </div>

          {/* Calendar — crossfades in */}
          <div
            className="absolute overflow-hidden transition-opacity duration-700"
            style={{
              width: '1335.191px', height: '795.396px',
              right: '466.56px', top: '14.14px',
              borderRadius: '50px 20px 20px 50px',
              opacity: subScreen === 'calendar' ? 1 : 0,
            }}
          >
            <img alt="Outlook Calendar" className="w-full h-full object-cover object-left-top" src={imgCalendar} />
            <p className="absolute font-bold text-white text-[14.037px] leading-normal" style={{ left: '589.19px', top: '294.63px', width: '83.814px' }}>Q3 Meeting</p>
            <p className="absolute text-white text-[7.42px] leading-normal opacity-80" style={{ left: '589.19px', top: '315.4px', width: '40.392px' }}>9:30-10:30</p>
          </div>

          {/* Right sidebar bg */}
          <div className="absolute rounded-bl-[20px] rounded-br-[50px] rounded-tl-[20px] rounded-tr-[50px]"
            style={{ width: '433.75px', height: '795.396px', left: 'calc(50% + 677.09px)', top: 'calc(50% - 0.11px)', transform: 'translate(-50%, -50%)', background: '#797979', opacity: 0.1 }}
          />

          {/* Right: user prompt bubble */}
          <div className="absolute flex items-center justify-end rounded-[10px]"
            style={{ background: '#f8f8f8', left: 'calc(50% + 708px)', top: 'calc(50% - 326.8px)', transform: 'translate(-50%, -50%)', padding: '6.5px 20px 5.5px' }}
          >
            <p style={{ fontFamily: "'Google_Sans', sans-serif", fontSize: '16px', color: 'black', width: '281px', lineHeight: 1.5, margin: 0 }}>"I need to create Q3 performance summary"</p>
          </div>

          {/* Right: AI response 1 */}
          <div className="absolute flex items-center justify-center rounded-[20px]"
            style={{ left: 'calc(50% + 655.03px)', top: 'calc(50% - 224.8px)', transform: 'translate(-50%, -50%)', height: '88px', padding: '16px 20px 15px' }}
          >
            <p style={{ fontFamily: "'Google_Sans', sans-serif", fontSize: '16px', color: 'black', width: '310.404px', lineHeight: 1.5, margin: 0 }}>
              A document containing all the projects worked on this quarter was made. Please confirm if you are fine with it or delete documents you wish to remove
            </p>
          </div>

          {/* Right: schedule bubble — appears after trigger */}
          <div
            className="absolute flex items-center justify-end rounded-[10px] transition-opacity duration-300"
            style={{
              background: '#f8f8f8',
              left: 'calc(50% + 708px)', top: 'calc(50% - 122.8px)',
              transform: 'translate(-50%, -50%)',
              padding: '6.5px 20px 5.5px',
              opacity: scheduleBubbleVisible ? 1 : 0,
            }}
          >
            <p style={{ fontFamily: "'Google_Sans', sans-serif", fontSize: '16px', color: 'black', width: '281px', lineHeight: 1.5, margin: 0 }}>Schedule a meeting for Q3 summary</p>
          </div>

          {/* Right: AI response 2 — "meeting scheduled" — appears with calendar */}
          <div
            className="absolute flex flex-col justify-center rounded-[20px] transition-opacity duration-700 gap-[5px]"
            style={{
              left: 'calc(50% + 655.03px)', top: 'calc(50% + 76.2px)',
              transform: 'translate(-50%, -50%)',
              padding: '16px 20px 15px',
              opacity: subScreen === 'calendar' ? 1 : 0,
            }}
          >
            <p style={{ fontFamily: "'Google_Sans', sans-serif", fontSize: '16px', color: 'black', width: '310.404px', lineHeight: 1.5, margin: 0 }}>
              Meeting was scheduled for Q3 summary with 85 invitees
            </p>
            <p style={{ fontFamily: "'Google_Sans', sans-serif", fontSize: '11px', color: 'black', width: '310.404px', lineHeight: 1.5, margin: 0, opacity: 0.5, textDecoration: 'underline' }}>
              see invitees
            </p>
          </div>

          {/* Right: input bar */}
          <div
            className="absolute flex gap-[13px] items-center rounded-[36px] cursor-text"
            style={{
              background: '#d1d1d1',
              left: 'calc(50% + 677.09px)', top: 'calc(50% + 356.59px)',
              transform: 'translate(-50%, -50%)',
              width: '396px', padding: '11px 27px',
              zIndex: 10,
            }}
            onClick={() => inputRef.current?.focus()}
          >
            <div className="shrink-0" style={{ height: '15.149px', width: '7.816px', position: 'relative' }}>
              <div className="absolute" style={{ inset: '0 -5.4% -2.78% -5.4%' }}>
                <img alt="" className="block max-w-none size-full" src={imgGroup1010109849} />
              </div>
            </div>
            <div className="relative flex-1">
              {inputValue === '' && (
                <span
                  className="absolute top-0 left-0 pointer-events-none transition-opacity duration-200"
                  style={{ fontFamily: "'Google_Sans', sans-serif", fontSize: '16px', color: 'black', lineHeight: 1.5, opacity: isFocused ? 0.3 : 1 }}
                >
                  |Ask Anything
                </span>
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
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  fontFamily: "'Google_Sans', sans-serif",
                  fontSize: '16px',
                  color: 'black',
                  caretColor: 'black',
                  width: '100%',
                  position: 'relative',
                  zIndex: 10,
                  pointerEvents: 'auto',
                }}
              />
            </div>
          </div>
        </div>

        {/* Documents included section — 70px below card bottom (top: 1047.61px from Figma) */}
        <div className="absolute rounded-[60px]" style={{ background: '#f7f7f7', height: '641px', left: '54.25px', opacity: 0.3, top: '1047.61px', width: '1817px' }} />
        <p className="absolute opacity-50 whitespace-nowrap"
          style={{ fontFamily: "'Google_Sans', sans-serif", fontWeight: 500, fontSize: '24px', color: 'black', left: '788.75px', top: '1088.62px', letterSpacing: '-0.72px', lineHeight: 0.91 }}>
          Documents included in the file
        </p>

        {/* Doc row 1 — top: 1143.74px */}
        {[
          { l: 'calc(50% - 758.3px)', t: '1143.74px', img: imgRectangle3473785, clip: { w: '200.61%', h: '125.34%', l: '0', t: '0' }, del: imgGroup1010109853, delL: '275.04px' },
          { l: 'calc(50% - 505.2px)', t: '1143.74px', img: imgImage1197, cover: true, del: imgGroup1010109853, delL: '528.04px' },
          { l: 'calc(50% - 252.1px)', t: '1143.74px', img: imgImage1198, clip: { w: '209.6%', h: '137.19%', l: '-93.81%', t: '-18.6%' }, del: imgGroup1010109853, delL: '781.04px' },
          { l: 'calc(50% + 1px)',     t: '1143.74px', img: imgImage1199, cover: true, del: imgGroup1010109853, delL: '1034.04px' },
          { l: 'calc(50% + 254.1px)', t: '1143.74px', img: imgImage1200, clip: { w: '113.18%', h: '144.2%', l: '-6.59%', t: '-4.78%' }, del: imgGroup1010109853, delL: '1287.04px' },
          { l: 'calc(50% + 507.2px)', t: '1143.74px', img: imgImage1202, clip: { w: '161.44%', h: '172.26%', l: '-30.72%', t: '-28.24%' }, r: '10px', del: imgGroup1010109853, delL: '1541.04px' },
          { l: 'calc(50% + 760.3px)', t: '1143.74px', img: imgImage1203, cover: true, r: '10px', del: imgGroup1010109853, delL: '1794.04px' },
        ].map(({ l, t, img, clip, cover, r, del, delL }, i) => (
          <div key={i}>
            <div className="absolute opacity-80" style={{ height: '241.169px', left: l, top: t, transform: 'translateX(-50%)', width: '217.102px', borderRadius: r || '20px' }}>
              {cover ? (
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" style={{ borderRadius: r || '20px' }} src={img} />
              ) : (
                <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ borderRadius: r || '20px' }}>
                  <img alt="" className="absolute max-w-none" style={{ width: clip!.w, height: clip!.h, left: clip!.l, top: clip!.t }} src={img} />
                </div>
              )}
            </div>
            <img alt="" className="absolute opacity-80" style={{ width: '30.319px', height: '30.319px', left: delL, top: '1150.18px' }} src={del} />
          </div>
        ))}

        {/* Doc row 2 — top: 1418.03px */}
        {[
          { l: 'calc(50% - 758.3px)', img: imgImage1123, del: imgGroup1010109853, delL: '275.04px' },
          { l: 'calc(50% - 505.2px)', img: imgImage1201, del: imgGroup1010109853, delL: '528.04px' },
          { l: 'calc(50% - 252.1px)', img: imgImage1204, del: imgGroup1010109853, delL: '781.04px' },
          { l: 'calc(50% + 1px)',     img: imgImage1205, del: imgGroup1010109853, delL: '1034.04px' },
          { l: 'calc(50% + 254.1px)', img: imgImage1206, del: imgGroup1010109853, delL: '1287.04px' },
          { l: 'calc(50% + 507.2px)', img: imgImage1207, del: imgGroup1010109853, delL: '1541.04px' },
          { l: 'calc(50% + 760.3px)', img: imgImage1208, del: imgGroup1010109853, delL: '1794.04px' },
        ].map(({ l, img, del, delL }, i) => (
          <div key={i}>
            <div className="absolute opacity-80 rounded-[20px]" style={{ height: '241.169px', left: l, top: '1418.03px', transform: 'translateX(-50%)', width: '217.102px' }}>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={img} />
            </div>
            <img alt="" className="absolute opacity-80" style={{ width: '30.319px', height: '30.319px', left: delL, top: '1424.47px' }} src={del} />
          </div>
        ))}
      </div>
    </div>
  );
}
