import { useState, useRef, useEffect } from 'react';

// Fresh Figma asset URLs
// BI dashboard — node 1-3693
const imgBiDashboard  = "https://www.figma.com/api/mcp/asset/79da4616-4eba-4a5d-a9d1-8e8dfd4ff21b";
// Outlook email — node 1-3746
const imgOutlookEmail = "https://www.figma.com/api/mcp/asset/371210d9-d4f7-4349-853b-45041a5f2c7b";
// Share icon
const imgShareIcon    = "https://www.figma.com/api/mcp/asset/4e00ede5-5184-4677-af12-441b02fe42f8";
// Mic icon
const imgMicIcon      = "https://www.figma.com/api/mcp/asset/4d5703e3-5184-4fe3-8a59-bb246b4a1bf7";

// Doc grid images (Collection of Documents)
const imgRect12 = "https://www.figma.com/api/mcp/asset/ff02b34c-df96-45c4-bde5-db24e38e0c2f";
const imgRect15 = "https://www.figma.com/api/mcp/asset/4686ad7d-a11a-4d6e-aff6-9af5568c4e64";
const imgRect20 = "https://www.figma.com/api/mcp/asset/56b41e23-2810-4962-8b30-1aa78d8a9c00";
const imgRect13 = "https://www.figma.com/api/mcp/asset/20061c14-4e75-4ade-a071-48b5e2e19b3e";
const imgRect21 = "https://www.figma.com/api/mcp/asset/968b4b3d-0160-4f58-9c04-a285fa2d78ba";
const imgRect14 = "https://www.figma.com/api/mcp/asset/9c76fb4b-d96b-4449-a219-d86b649c60ce";
const imgRect18 = "https://www.figma.com/api/mcp/asset/131d437c-0a5c-4e96-b5af-b6ac769191bd";
const imgRect17 = "https://www.figma.com/api/mcp/asset/0f39ee08-ec12-4116-a904-bd603a9f12fb";
const imgRect22 = "https://www.figma.com/api/mcp/asset/85128ad7-3b20-4870-ac9c-1756fb5d8827";
const imgRect19 = "https://www.figma.com/api/mcp/asset/62aae8b2-01d3-49b9-9914-f50421e36103";
const imgRect23 = "https://www.figma.com/api/mcp/asset/4b47c7e8-5d32-43fc-9824-106b5b25fe53";

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

type SubScreen = 'docs' | 'bi' | 'email';

export default function FrameBI({
  visible,
  onReset,
}: {
  visible: boolean;
  onReset?: () => void;
}) {
  const [subScreen, setSubScreen] = useState<SubScreen>('docs');
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [forwardBubbleVisible, setForwardBubbleVisible] = useState(false);
  const [endSessionVisible, setEndSessionVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { date, time } = useLiveClock();

  useEffect(() => {
    if (visible) {
      setSubScreen('docs');
      setInputValue('');
      setForwardBubbleVisible(false);
      setEndSessionVisible(false);
    }
  }, [visible]);

  const handleCreateBI = () => {
    setTimeout(() => setSubScreen('bi'), 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      const val = inputValue.trim().toLowerCase();
      const isForward = val.includes('forward') || (val.includes('send') && val.includes('bi'));
      if (isForward) {
        setForwardBubbleVisible(true);
        setInputValue('');
        setTimeout(() => {
          setSubScreen('email');
          // 2s after email appears, show end session
          setTimeout(() => setEndSessionVisible(true), 2000);
        }, 1000);
      } else {
        setInputValue('');
      }
    }
  };

  const inputS = {
    background: 'transparent',
    border: 'none',
    outline: 'none',
    fontFamily: "'Google_Sans', sans-serif",
    fontSize: '16px',
    color: 'black',
    caretColor: 'black',
    width: '100%',
    position: 'relative' as const,
    zIndex: 10,
    pointerEvents: 'auto' as const,
  };

  return (
    <div
      className="absolute inset-0 transition-opacity duration-700"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none', background: '#F4F4F9' }}
    >
      {/* Live clock — matches landing screen exactly */}
      <div className="absolute not-italic text-black whitespace-nowrap" style={{ top: '50px', right: '41px', textAlign: 'right' }}>
        <p className="font-['Google_Sans',sans-serif] leading-[normal] opacity-50 text-[16px]" style={{ margin: 0 }}>{date}</p>
        <p className="font-['Google_Sans',sans-serif] leading-[0.91] opacity-80 text-[36px] tracking-[-1.08px]" style={{ fontWeight: 500, margin: 0 }}>{time}</p>
      </div>

      {/* End session button */}
      <button
        className="absolute rounded-[53.25px] cursor-pointer transition-opacity duration-500"
        style={{
          background: '#960000', top: '55px', right: '294px',
          padding: '9px 31.5px 7.5px',
          opacity: endSessionVisible ? 1 : 0,
          pointerEvents: endSessionVisible ? 'auto' : 'none',
          border: 'none', color: 'white',
          fontFamily: "'Google_Sans', sans-serif", fontWeight: 500, fontSize: '14px',
          zIndex: 20,
        }}
        onClick={onReset}
      >
        end session
      </button>

      {/* Main expanded card */}
      <div
        className="absolute overflow-clip rounded-[60px]"
        style={{
          width: '1817px', height: '990px',
          left: 'calc(50% + 0.5px)', top: 'calc(50% + 49px)',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(0,0,0,0)',
          boxShadow: '47px 70px 100px 0px rgba(0,0,0,0.05)',
        }}
      >

        {/* ── LAYER 1: Collection of Documents ── */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: subScreen === 'docs' ? 1 : 0, pointerEvents: subScreen === 'docs' ? 'auto' : 'none' }}
        >
          {/* Action buttons */}
          <div className="absolute flex gap-[16px] items-center" style={{ left: '872.2px', top: '68.11px' }}>
            <div className="flex items-center justify-center rounded-[42.6px]" style={{ background: '#515c72', padding: '7.2px 25.2px 6px' }}>
              <span style={{ fontFamily: "'Google_Sans', sans-serif", fontSize: '21.6px', color: 'white', lineHeight: 1.5 }}>edit</span>
            </div>
            <div
              className="flex items-center justify-center rounded-[42.6px] cursor-pointer"
              style={{ background: '#034bd8', padding: '7.2px 25.2px 6px' }}
              onClick={handleCreateBI}
            >
              <span style={{ fontFamily: "'Google_Sans', sans-serif", fontWeight: 500, fontSize: '21.6px', color: 'white', lineHeight: 1.5 }}>Create BI</span>
            </div>
          </div>

          {/* Title */}
          <p className="absolute opacity-80" style={{ fontFamily: "'Google_Sans', sans-serif", fontWeight: 400, fontSize: '20px', color: 'black', left: '70.03px', top: 'calc(50% - 432.64px)', transform: 'translateY(-50%)', lineHeight: 1.5 }}>Collection of Documents</p>
          <p className="absolute opacity-80" style={{ fontFamily: "'Google_Sans', sans-serif", fontWeight: 700, fontSize: '48px', color: 'black', left: '70.03px', top: 'calc(50% - 393.64px)', transform: 'translateY(-50%)', lineHeight: 1.5 }}>2025-2026</p>

          {/* Document grid */}
          <div className="absolute overflow-clip" style={{ height: '815px', left: '70px', top: '176.24px', width: '1062px' }}>
            {/* Col 0 */}
            <div className="absolute opacity-60 rounded-[31px]" style={{ height: '314.715px', left: 0, top: '0.07px', width: '243.712px' }}>
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[31px]"><img alt="" className="absolute max-w-none" style={{ height: '119.94%', left: '-6.6%', top: '-12.67%', width: '230.06%' }} src={imgRect12} /></div>
            </div>
            <div className="absolute opacity-60 rounded-[31px]" style={{ height: '314.715px', left: '0.03px', top: '342.79px', width: '243.712px' }}>
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[31px]"><img alt="" className="absolute max-w-none" style={{ height: '100%', left: 0, top: 0, width: '200.92%' }} src={imgRect15} /></div>
            </div>
            <div className="absolute opacity-60 rounded-[31px]" style={{ height: '314.715px', left: '0.03px', top: '682.96px', width: '243.712px' }}>
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[31px]"><img alt="" className="absolute max-w-none" style={{ height: '100%', left: 0, top: 0, width: '309.82%' }} src={imgRect20} /></div>
            </div>
            {/* Col 1 */}
            <div className="absolute opacity-60 rounded-[31px]" style={{ height: '314.715px', left: '272.74px', top: '0.07px', width: '243.712px' }}>
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[31px]"><img alt="" className="absolute max-w-none" style={{ height: '100%', left: '-3.31%', top: 0, width: '206.61%' }} src={imgRect13} /></div>
            </div>
            <div className="absolute opacity-60 rounded-[31px]" style={{ height: '314.715px', left: '272.74px', top: '342.79px', width: '243.712px' }}>
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[31px]"><img alt="" className="absolute max-w-none" style={{ height: '100%', left: '-100.92%', top: 0, width: '200.92%' }} src={imgRect15} /></div>
            </div>
            <div className="absolute opacity-60 rounded-[31px]" style={{ height: '314.715px', left: '272.74px', top: '682.96px', width: '243.712px' }}>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[31px] size-full" src={imgRect21} />
            </div>
            {/* Col 2 */}
            <div className="absolute opacity-60 rounded-[31px]" style={{ height: '314.715px', left: '545.45px', top: '0.07px', width: '243.712px' }}>
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[31px]"><img alt="" className="absolute max-w-none" style={{ height: '100%', left: '-5.89%', top: 0, width: '274.65%' }} src={imgRect14} /></div>
            </div>
            <div className="absolute opacity-60 rounded-[31px]" style={{ height: '314.715px', left: '545.45px', top: '342.79px', width: '243.712px' }}>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[31px] size-full" src={imgRect17} />
            </div>
            <div className="absolute opacity-60 rounded-[31px]" style={{ height: '314.715px', left: '545.45px', top: '682.96px', width: '243.712px' }}>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[31px] size-full" src={imgRect22} />
            </div>
            {/* Col 3 */}
            <div className="absolute opacity-60 rounded-[31px]" style={{ height: '314.715px', left: '818.16px', top: '0.07px', width: '243.712px' }}>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[31px] size-full" src={imgRect18} />
            </div>
            <div className="absolute opacity-60 rounded-[31px]" style={{ height: '314.715px', left: '818.16px', top: '342.79px', width: '243.712px' }}>
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[31px]"><img alt="" className="absolute max-w-none" style={{ height: '100%', left: '-8.01%', top: 0, width: '229.57%' }} src={imgRect19} /></div>
            </div>
            <div className="absolute opacity-60 rounded-[31px]" style={{ height: '314.715px', left: '818.16px', top: '682.96px', width: '243.712px' }}>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[31px] size-full" src={imgRect23} />
            </div>
          </div>

          {/* Right sidebar bg */}
          <div className="absolute rounded-bl-[20px] rounded-br-[50px] rounded-tl-[20px] rounded-tr-[50px]"
            style={{ background: '#797979', height: '947.762px', left: 'calc(50% + 596.18px)', top: 'calc(50% - 1.49px)', transform: 'translate(-50%, -50%)', opacity: 0.1, width: '588.641px' }} />

          {/* User prompt bubble — right-aligned within sidebar */}
          <div className="absolute flex items-center justify-end overflow-clip rounded-[10px]"
            style={{ background: '#f8f8f8', right: '20px', top: '62px', padding: '6.5px 20px 5.5px', maxWidth: '480px' }}>
            <p style={{ fontFamily: "'Google_Sans', sans-serif", fontSize: '16px', color: 'black', opacity: 0.8, whiteSpace: 'nowrap', lineHeight: 1.5, margin: 0 }}>
              Create Power BI of this year's earnings
            </p>
          </div>

          {/* AI response — left-aligned within sidebar, 28px below user bubble */}
          <div className="absolute flex items-start overflow-clip rounded-[10px]" style={{ left: '1247.18px', top: '152px', padding: '0px 20px 0px', maxWidth: '480px' }}>
            <p style={{ fontFamily: "'Google_Sans', sans-serif", fontSize: '16px', color: 'black', width: '310.4px', lineHeight: 1.5, margin: 0 }}>
              Collected this year's earning data. Please confirm if these are the documents you wish to include.
            </p>
          </div>
        </div>

        {/* ── LAYER 2: BI Dashboard + Email ── */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: subScreen === 'bi' || subScreen === 'email' ? 1 : 0,
            pointerEvents: subScreen === 'bi' || subScreen === 'email' ? 'auto' : 'none',
            zIndex: subScreen === 'bi' || subScreen === 'email' ? 1 : 0,
          }}
        >
          {/* Left panel bg */}
          <div className="absolute rounded-[50px]" style={{ background: '#f6f9fc', height: '947.762px', left: '21.47px', top: '19.63px', width: '1169.225px' }} />

          {/* BI dashboard image — fades out on email. Positioned to match Figma node 1-3693 exactly */}
          <div
            className="absolute overflow-hidden rounded-[50px] transition-opacity duration-700"
            style={{ height: '947.762px', left: '17.54px', top: '19.63px', width: '1176.791px', opacity: subScreen === 'email' ? 0 : 1 }}
          >
            <img alt="Fiscal Year BI Dashboard" className="w-full h-full object-cover object-left-top" src={imgBiDashboard} />
          </div>

          {/* Outlook email image — crossfades in */}
          <div
            className="absolute overflow-hidden rounded-[50px] transition-opacity duration-700"
            style={{ height: '947.762px', left: '17.54px', top: '19.63px', width: '1176.791px', opacity: subScreen === 'email' ? 1 : 0 }}
          >
            <img alt="Outlook Email" className="w-full h-full object-cover object-left-top" src={imgOutlookEmail} />
          </div>

          {/* Right sidebar bg */}
          <div className="absolute rounded-bl-[20px] rounded-br-[50px] rounded-tl-[20px] rounded-tr-[50px]"
            style={{ background: '#797979', height: '947.762px', left: 'calc(50% + 596.18px)', top: 'calc(50% - 1.49px)', transform: 'translate(-50%, -50%)', opacity: 0.1, width: '588.641px' }} />

          {/* Edit + Share buttons — hidden after email */}
          <div
            className="absolute flex gap-[16px] items-center transition-opacity duration-500"
            style={{ left: '908.5px', top: '52.91px', zIndex: 2, opacity: subScreen === 'email' ? 0 : 1, pointerEvents: subScreen === 'email' ? 'none' : 'auto' }}
          >
            <div className="flex items-center justify-center rounded-[42.6px]" style={{ background: '#515c72', height: '46px', padding: '7.2px 25.2px 6px' }}>
              <span style={{ fontFamily: "'Google_Sans', sans-serif", fontSize: '21.6px', color: 'white', lineHeight: 1.5 }}>edit</span>
            </div>
            <div className="flex items-center justify-center gap-[6.4px] rounded-[42.6px]" style={{ background: '#034bd8', height: '46px', padding: '7.2px 25.2px 6px' }}>
              <div className="shrink-0" style={{ height: '14.565px', width: '11.272px', position: 'relative' }}>
                <img alt="" className="block max-w-none size-full" src={imgShareIcon} />
              </div>
              <span style={{ fontFamily: "'Google_Sans', sans-serif", fontWeight: 500, fontSize: '21.6px', color: 'white', lineHeight: 1.5 }}>share</span>
            </div>
          </div>

          {/* Original prompt bubble — right-aligned within sidebar */}
          <div className="absolute flex items-center justify-end overflow-clip rounded-[10px]"
            style={{ background: '#f8f8f8', right: '20px', top: '62px', padding: '6.5px 20px 5.5px', maxWidth: '480px' }}>
            <p style={{ fontFamily: "'Google_Sans', sans-serif", fontSize: '16px', color: 'black', opacity: 0.8, whiteSpace: 'nowrap', lineHeight: 1.5, margin: 0 }}>
              Create Power BI of this year's earnings
            </p>
          </div>

          {/* AI response 1 — left-aligned, 28px below user bubble */}
          <div className="absolute flex items-start overflow-clip rounded-[10px]" style={{ left: '1247.18px', top: '152px', padding: '0px 20px 0px', maxWidth: '480px' }}>
            <p style={{ fontFamily: "'Google_Sans', sans-serif", fontSize: '16px', color: 'black', width: '310.4px', lineHeight: 1.5, margin: 0 }}>
              Collected this year's earning data. Please confirm if these are the documents you wish to include.
            </p>
          </div>

          {/* "Forward BI" user bubble — right-aligned, 28px below AI response 1 */}
          <div
            className="absolute flex items-center justify-end overflow-clip rounded-[10px] transition-opacity duration-300"
            style={{
              background: '#f8f8f8', right: '20px', top: '306px',
              padding: '6.5px 20px 5.5px',
              opacity: forwardBubbleVisible ? 1 : 0,
            }}
          >
            <p style={{ fontFamily: "'Google_Sans', sans-serif", fontSize: '16px', color: 'black', opacity: 0.8, whiteSpace: 'nowrap', lineHeight: 1.5, margin: 0 }}>
              Forward BI to relevant people
            </p>
          </div>

          {/* AI forwarding response — left-aligned, 28px below forward bubble */}
          <div
            className="absolute flex items-start overflow-clip rounded-[10px] transition-opacity duration-700"
            style={{ left: '1247.18px', top: '396px', padding: '0px 20px 0px', opacity: subScreen === 'email' ? 1 : 0, maxWidth: '480px' }}
          >
            <div style={{ fontFamily: "'Google_Sans', sans-serif", fontSize: '16px', color: 'black', width: '405px', lineHeight: 1.5 }}>
              <p style={{ margin: '0 0 4px' }}>Forwarding document to relevant people:</p>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                <li>Tom C (Finance Rep.) &lt;tom.c@hp.com&gt;</li>
                <li>Jesse M (Accounting Rep.) &lt;jesse.m@hp.com&gt;</li>
                <li>Chris H (Sales Rep.) &lt;chris.h@hp.com&gt;</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── INPUT BAR — always on top ── */}
        <div
          className="absolute flex gap-[13px] items-center rounded-[36px] cursor-text"
          style={{
            background: '#d1d1d1',
            left: 'calc(50% + 593.18px)', top: '896.16px',
            transform: 'translateX(-50%)',
            width: '509px', padding: '11px 27px',
            zIndex: 10, pointerEvents: 'auto',
          }}
          onClick={() => inputRef.current?.focus()}
        >
          <div className="shrink-0" style={{ height: '15.15px', width: '7.816px', position: 'relative' }}>
            <div className="absolute" style={{ inset: '0 -5.4% -2.77% -5.4%' }}>
              <img alt="" className="block max-w-none size-full" src={imgMicIcon} />
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
              style={inputS}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
