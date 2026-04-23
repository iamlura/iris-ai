import { useState, useRef, useEffect } from 'react';

// Fresh Figma MCP asset URLs
const imgRectangle3473784 = "https://www.figma.com/api/mcp/asset/1b239eff-54bd-4f7b-8be5-e0c666a370c8";
const imgRectangle3473785 = "https://www.figma.com/api/mcp/asset/25652627-0b80-4c64-9d43-723609ac6794";
const imgGroup1010109929 = "https://www.figma.com/api/mcp/asset/06e41070-dfc7-4893-8b2b-abe121aa18bf";
const imgGroup1010109849 = "https://www.figma.com/api/mcp/asset/db2537c9-923b-4374-9806-035cb4853ace";
const imgGroup1010109853 = "https://www.figma.com/api/mcp/asset/6db5761f-edac-4d3a-9af1-b3e9acca9389";
const imgGroup1010109854 = "https://www.figma.com/api/mcp/asset/d18545c5-4258-4afd-918c-82a08a6083ee";

// Calendar screenshot from Figma node 1-2366
const imgCalendar = "https://www.figma.com/api/mcp/asset/27600959-2351-40ab-ad4d-b79926354732";

// Doc images
const imgImage1197 = "https://www.figma.com/api/mcp/asset/95dec604-b24c-4477-bddd-95ef97f14e38";
const imgImage1198 = "https://www.figma.com/api/mcp/asset/8a1e1e21-b7d5-4b34-8c28-123c72fc0684";
const imgImage1199 = "https://www.figma.com/api/mcp/asset/23f313f6-934c-4816-a057-028596115f98";
const imgImage1200 = "https://www.figma.com/api/mcp/asset/e66eaa9c-2393-4e5b-8f25-a7f26edf32b7";
const imgImage1202 = "https://www.figma.com/api/mcp/asset/c17cbdd3-038e-451f-94d5-0d49fa1b17e1";
const imgImage1203 = "https://www.figma.com/api/mcp/asset/6a1fe9ff-6e71-4e43-8f17-8387875e4379";
const imgImage1123 = "https://www.figma.com/api/mcp/asset/fc707b03-979c-428c-823e-a6b1f71f810f";
const imgImage1124 = "https://www.figma.com/api/mcp/asset/35b09a7e-e1e7-45fc-b3ae-6dea33213b59";
const imgImage1201 = "https://www.figma.com/api/mcp/asset/045ca7b7-e414-41e6-9feb-1fff084b477e";
const imgImage1204 = "https://www.figma.com/api/mcp/asset/028aa850-1562-408f-9837-1647fdfb00ef";
const imgImage1205 = "https://www.figma.com/api/mcp/asset/434273fe-e6d5-4c31-a5ad-34d96dd6ceec";
const imgImage1206 = "https://www.figma.com/api/mcp/asset/ba441af7-da56-4f44-be91-f40ace965dec";
const imgImage1207 = "https://www.figma.com/api/mcp/asset/b64c340a-ae18-41ac-8478-01ae433c0240";
const imgImage1208 = "https://www.figma.com/api/mcp/asset/85c6bfba-e077-4228-9820-21a732b6ef95";

type SubScreen = 'q3' | 'calendar';

export default function Frame2055246625({ visible }: { visible: boolean }) {
  const [subScreen, setSubScreen] = useState<SubScreen>('q3');
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [scheduleBubbleVisible, setScheduleBubbleVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (visible) {
      setSubScreen('q3');
      setInputValue('');
      setScheduleBubbleVisible(false);
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
        }, 1000);
      }
    }
  };

  return (
    <div
      className="bg-[#f1f1f1] absolute inset-0 transition-opacity duration-700"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none' }}
    >
      <div className="relative size-full">

        {/* Clock */}
        <p className="absolute font-['Google_Sans',sans-serif] leading-normal left-[1791px] opacity-50 text-[16px] top-[50px]">2026.5.20</p>
        <p className="absolute font-['Google_Sans',sans-serif] font-medium leading-[0.91] left-[1771px] opacity-80 text-[36px] top-[72.48px] tracking-[-1.08px]">08:58</p>

        {/* Main card */}
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0)] h-[823.61px] left-[calc(50%+1px)] overflow-clip rounded-[60px] shadow-[47px_70px_100px_0px_rgba(0,0,0,0.05)] top-[calc(50%-34.2px)] w-[1816.5px]">

          {/* Left: thumbnail sidebar — hidden when calendar shown */}
          <div
            className="-translate-x-1/2 -translate-y-1/2 absolute h-[723px] left-[calc(50%-818.75px)] overflow-clip rounded-bl-[50px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px] top-[calc(50%+36.09px)] w-[151px] transition-opacity duration-500"
            style={{ opacity: subScreen === 'calendar' ? 0 : 1 }}
          >
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[85.072px] left-1/2 rounded-[20px] top-[calc(50%-318.96px)] w-[151.238px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle3473784} />
            </div>
            {[−225.89, −132.82, −39.75, 53.32, 146.39, 239.46, 332.53].map((offset, i) => (
              <div key={i} className="-translate-x-1/2 -translate-y-1/2 absolute h-[85.072px] left-1/2 rounded-[20px] w-[151.238px]" style={{ top: `calc(50%+${offset}px)` }}>
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                  <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[200.92%]" src={imgRectangle3473785} />
                </div>
              </div>
            ))}
          </div>

          {/* Logo above sidebar — hidden when calendar shown */}
          <div
            className="-translate-x-1/2 -translate-y-1/2 absolute h-[30.319px] left-[calc(50%-818.77px)] top-[calc(50%-364.48px)] w-[120.96px] transition-opacity duration-500"
            style={{ opacity: subScreen === 'calendar' ? 0 : 1 }}
          >
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1010109929} />
          </div>

          {/* Center: white doc area — hidden when calendar shown */}
          <div
            className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[795.397px] left-[calc(50%-145.58px)] rounded-[20px] top-[calc(50%-0.11px)] w-[1175.145px] transition-opacity duration-500"
            style={{ opacity: subScreen === 'calendar' ? 0 : 0.8 }}
          />

          {/* Center: Q3 Summary title */}
          <div
            className="-translate-y-1/2 absolute flex flex-col font-['Google_Sans',sans-serif] font-bold justify-center leading-[0] left-[calc(50%-607.21px)] not-italic opacity-80 text-[52.054px] text-black top-[calc(50%-0.11px)] whitespace-nowrap transition-opacity duration-500"
            style={{ opacity: subScreen === 'calendar' ? 0 : 1 }}
          >
            <p className="leading-[1.5]">Q3 Summary</p>
          </div>

          {/* Calendar — crossfades in after schedule trigger */}
          <div
            className="-translate-x-1/2 -translate-y-1/2 absolute top-[calc(50%-0.11px)] left-[calc(50%-291px)] w-[1350px] h-[823.61px] rounded-tl-[50px] rounded-bl-[50px] rounded-tr-[20px] rounded-br-[20px] overflow-hidden transition-opacity duration-700"
            style={{ opacity: subScreen === 'calendar' ? 1 : 0 }}
          >
            <img alt="Outlook Calendar" className="w-full h-full object-cover object-left-top" src={imgCalendar} />
          </div>

          {/* Right: chat sidebar bg */}
          <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#797979] h-[795.396px] left-[calc(50%+677.09px)] opacity-10 rounded-bl-[20px] rounded-br-[50px] rounded-tl-[20px] rounded-tr-[50px] top-[calc(50%-0.11px)] w-[433.75px]" />

          {/* Right: user prompt bubble */}
          <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f8f8f8] content-stretch flex items-center justify-end left-[calc(50%+707.72px)] pb-[5.5px] pt-[6.5px] px-[20px] rounded-[10px] top-[calc(50%-326.8px)]">
            <div className="flex flex-col font-['Google_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[281px]">
              <p className="leading-[1.5]">"I need to create Q3 performance summary"</p>
            </div>
          </div>

          {/* Right: AI response */}
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex h-[88px] items-center justify-center left-[calc(50%+655.03px)] pb-[15px] pt-[16px] px-[20px] rounded-[20px] top-[calc(50%-224.8px)]">
            <div className="flex flex-col font-['Google_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[310.404px]">
              <p className="leading-[1.5]">A document containing all the projects worked on this quarter was made. Please confirm if you are fine with it or delete documents you wish to remove</p>
            </div>
          </div>

          {/* Right: "Schedule a meeting" bubble — appears after trigger */}
          <div
            className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f8f8f8] content-stretch flex items-center justify-end left-[calc(50%+707.72px)] pb-[5.5px] pt-[6.5px] px-[20px] rounded-[10px] top-[calc(50%-122.8px)] transition-opacity duration-300"
            style={{ opacity: scheduleBubbleVisible ? 1 : 0 }}
          >
            <div className="flex flex-col font-['Google_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[281px]">
              <p className="leading-[1.5]">Schedule a meeting for Q3 summary</p>
            </div>
          </div>

          {/* Right: input bar */}
          <div
            className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#d1d1d1] content-stretch flex gap-[13px] items-center left-[calc(50%+677.09px)] px-[27px] py-[11px] rounded-[36px] top-[calc(50%+356.59px)] w-[396px] cursor-text"
            style={{ zIndex: 10 }}
            onClick={() => inputRef.current?.focus()}
          >
            <div className="h-[15.149px] relative shrink-0 w-[7.816px]">
              <div className="absolute inset-[0_-5.4%_-2.78%_-5.4%]">
                <img alt="" className="block max-w-none size-full" src={imgGroup1010109849} />
              </div>
            </div>
            <div className="relative flex-1">
              {inputValue === '' && (
                <span
                  className="absolute top-0 left-0 font-['Google_Sans',sans-serif] text-[16px] text-black leading-[1.5] pointer-events-none transition-opacity duration-200"
                  style={{ opacity: isFocused ? 0.3 : 1 }}
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
                className="bg-transparent outline-none border-none font-['Google_Sans',sans-serif] text-[16px] text-black w-full relative z-10 caret-black"
                style={{ caretColor: 'black', pointerEvents: 'auto' }}
              />
            </div>
          </div>
        </div>

        {/* Documents included section */}
        <div className="absolute bg-[#f7f7f7] h-[641px] left-[54.25px] opacity-30 rounded-[60px] top-[1121px] w-[1817px]" />
        <p className="absolute font-['Google_Sans',sans-serif] font-medium leading-[0.91] left-[788.75px] not-italic opacity-50 text-[24px] text-black top-[1162.01px] tracking-[-0.72px] whitespace-nowrap">
          Documents included in the file
        </p>

        {/* Doc row 1 */}
        <div className="-translate-x-1/2 absolute left-[calc(50%-0.75px)] top-[993.13px]" style={{ position: 'absolute', width: '1818px', left: 'calc(50% - 0.75px)', transform: 'translateX(-50%)' }}>
          {[
            { l: 'calc(50%-760.05px)', img: imgImage1123, clip: true, iw: '200.61%', ih: '125.34%' },
            { l: 'calc(50%-506.95px)', img: imgImage1197, clip: false },
            { l: 'calc(50%-253.85px)', img: imgImage1198, clip: true, iw: '209.6%', ih: '137.19%', il: '-93.81%', it: '-18.6%' },
            { l: 'calc(50%-0.75px)',   img: imgImage1199, clip: false },
            { l: 'calc(50%+252.35px)', img: imgImage1200, clip: true, iw: '113.18%', ih: '144.2%', il: '-6.59%', it: '-4.78%' },
            { l: 'calc(50%+505.45px)', img: imgImage1202, clip: true, iw: '161.44%', ih: '172.26%', il: '-30.72%', it: '-28.24%', r: '10px' },
            { l: 'calc(50%+758.55px)', img: imgImage1203, clip: false, r: '10px' },
          ].map(({ l, img, clip, iw, ih, il, it, r }, i) => (
            <div key={i} className="absolute h-[241.169px] opacity-80 w-[217.102px]" style={{ left: l, top: '993.13px', transform: 'translateX(-50%)', borderRadius: r || '20px' }}>
              {clip ? (
                <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ borderRadius: r || '20px' }}>
                  <img alt="" className="absolute max-w-none" style={{ width: iw, height: ih, left: il || '0', top: it || '0' }} src={img} />
                </div>
              ) : (
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" style={{ borderRadius: r || '20px' }} src={img} />
              )}
            </div>
          ))}
        </div>

        {/* Doc row 2 */}
        <div style={{ position: 'absolute', width: '1818px', left: 'calc(50% - 0.75px)', transform: 'translateX(-50%)' }}>
          {[
            { l: 'calc(50%-760.05px)', img: imgImage1124, clip: false },
            { l: 'calc(50%-506.95px)', img: imgImage1201, clip: false },
            { l: 'calc(50%-253.85px)', img: imgImage1204, clip: false },
            { l: 'calc(50%-0.75px)',   img: imgImage1205, clip: false },
            { l: 'calc(50%+252.35px)', img: imgImage1206, clip: false },
            { l: 'calc(50%+505.45px)', img: imgImage1207, clip: false },
            { l: 'calc(50%+758.55px)', img: imgImage1208, clip: false },
          ].map(({ l, img }, i) => (
            <div key={i} className="absolute h-[241.169px] opacity-80 rounded-[20px] w-[217.102px]" style={{ left: l, top: '1267.42px', transform: 'translateX(-50%)' }}>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={img} />
            </div>
          ))}
        </div>

        {/* Delete icons row 1 */}
        {[221.79, 474.79, 727.79, 980.79, 1233.79, 1487.79, 1740.79].map((left, i) => (
          <img key={i} alt="" className="absolute opacity-80 size-[30.319px]" style={{ left: `${left}px`, top: '999.57px' }} src={i % 2 === 0 ? imgGroup1010109853 : imgGroup1010109854} />
        ))}
        {/* Delete icons row 2 */}
        {[221.79, 474.79, 727.79, 980.79, 1233.79, 1487.79, 1740.79].map((left, i) => (
          <img key={i} alt="" className="absolute opacity-80 size-[30.319px]" style={{ left: `${left}px`, top: '1273.86px' }} src={i % 2 === 0 ? imgGroup1010109853 : imgGroup1010109854} />
        ))}
      </div>
    </div>
  );
}
