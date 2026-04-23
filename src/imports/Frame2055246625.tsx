import { useState, useRef, useEffect } from 'react';

const imgRectangle3473784 = "https://www.figma.com/api/mcp/asset/1b239eff-54bd-4f7b-8be5-e0c666a370c8";
const imgRectangle3473785 = "https://www.figma.com/api/mcp/asset/25652627-0b80-4c64-9d43-723609ac6794";
const imgImage1197 = "https://www.figma.com/api/mcp/asset/a6e16b74-e5cd-4d56-bfea-e081acc94d7a";
const imgImage1198 = "https://www.figma.com/api/mcp/asset/2cea0451-8a10-4b58-b134-ce4dd4a09c27";
const imgImage1199 = "https://www.figma.com/api/mcp/asset/12ee3dfd-812d-4156-9bda-adcf53199ba6";
const imgImage1200 = "https://www.figma.com/api/mcp/asset/c0e25162-d869-458d-a672-a9162b0ed7bc";
const imgImage1202 = "https://www.figma.com/api/mcp/asset/9c2e1772-353e-483d-823f-bc34b40576fd";
const imgImage1203 = "https://www.figma.com/api/mcp/asset/539324c8-3453-42f9-afd6-ab9d84c2dc51";
const imgImage1123 = "https://www.figma.com/api/mcp/asset/047b3b0c-1dd6-4769-9aeb-8224a05da19d";
const imgImage1201 = "https://www.figma.com/api/mcp/asset/9253f251-44c3-42ab-b2e6-73928fe0da54";
const imgImage1204 = "https://www.figma.com/api/mcp/asset/ab4be3eb-e85c-4ed0-a92f-bb8ec8f47c1f";
const imgImage1205 = "https://www.figma.com/api/mcp/asset/b49b7cb5-998c-432d-a488-dd1ef7676e1a";
const imgImage1206 = "https://www.figma.com/api/mcp/asset/950843f7-09ac-4749-bfd4-4f7219dfaa32";
const imgImage1207 = "https://www.figma.com/api/mcp/asset/c55463c2-759c-4e6f-86b1-b46e4dca5ae2";
const imgImage1208 = "https://www.figma.com/api/mcp/asset/0ffd5019-77d0-49c0-a1eb-1bf010b79919";
const imgGroup1010109848 = "https://www.figma.com/api/mcp/asset/2a2a4b17-db7e-4127-9efa-de8920ccaa59";
const imgGroup1010109929 = "https://www.figma.com/api/mcp/asset/06e41070-dfc7-4893-8b2b-abe121aa18bf";
const imgGroup1010109849 = "https://www.figma.com/api/mcp/asset/6ff36d7c-fb5b-48d5-9d62-bc1a83191fab";
const imgGroup1010109853 = "https://www.figma.com/api/mcp/asset/1bd4c9c2-9e5a-4cc0-ba87-37f27110059a";
const imgGroup1010109854 = "https://www.figma.com/api/mcp/asset/49b10716-fbb9-4a2b-9aa5-bdeacf298036";

// Calendar asset for final screen
const imgCalendar = "https://www.figma.com/api/mcp/asset/45dc4de2-d7ea-43d1-8c03-833f0d909c0b";

type SubScreen = 'q3' | 'sent' | 'calendar';

export default function Frame2055246625({ visible }: { visible: boolean }) {
  const [subScreen, setSubScreen] = useState<SubScreen>('q3');
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [scheduleSentVisible, setScheduleSentVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (visible) {
      setSubScreen('q3');
      setInputValue('');
      setScheduleSentVisible(false);
    }
  }, [visible]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim().toLowerCase().includes('schedule')) {
      setScheduleSentVisible(true);
      setSubScreen('sent');
      setInputValue('');
      setTimeout(() => {
        setSubScreen('calendar');
      }, 1000);
    }
  };

  return (
    <div
      className="bg-[#f1f1f1] absolute inset-0 transition-opacity duration-700"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none' }}
    >
      {/* Exact Figma layout — 1920x1200 canvas */}
      <div className="relative size-full">

        {/* Clock */}
        <div className="absolute contents left-[1771px] not-italic text-black top-[50px] whitespace-nowrap">
          <p className="absolute font-['Google_Sans',sans-serif] leading-normal left-[1791px] opacity-50 text-[16px] top-[50px]">2026.5.20</p>
          <p className="absolute font-['Google_Sans',sans-serif] font-medium leading-[0.91] left-[1771px] opacity-80 text-[36px] top-[72.48px] tracking-[-1.08px]">08:58</p>
        </div>

        {/* Main card + documents section wrapper */}
        <div className="absolute contents left-[53.25px] top-[154px]">

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
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[85.072px] left-1/2 rounded-[20px] top-[calc(50%-225.89px)] w-[151.238px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                  <img alt="" className="absolute h-[300.42%] left-0 max-w-none top-0 w-[303.93%]" src={imgRectangle3473785} />
                </div>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[85.072px] left-1/2 rounded-[20px] top-[calc(50%-132.82px)] w-[151.238px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                  <img alt="" className="absolute h-[310.94%] left-0 max-w-none top-[-105.85%] w-[303.93%]" src={imgRectangle3473785} />
                </div>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[85.072px] left-1/2 rounded-[20px] top-[calc(50%-39.75px)] w-[151.238px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                  <img alt="" className="absolute h-[308.53%] left-0 max-w-none top-[-207.35%] w-[303.93%]" src={imgRectangle3473785} />
                </div>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[85.072px] left-1/2 rounded-[20px] top-[calc(50%+53.32px)] w-[151.238px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                  <img alt="" className="absolute h-[305.95%] left-[-102.29%] max-w-none top-[-1.5%] w-[305.5%]" src={imgRectangle3473785} />
                </div>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[85.072px] left-1/2 rounded-[20px] top-[calc(50%+146.39px)] w-[151.238px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                  <img alt="" className="absolute h-[301.42%] left-[-201.83%] max-w-none top-0 w-[302.45%]" src={imgRectangle3473785} />
                </div>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[85.072px] left-1/2 rounded-[20px] top-[calc(50%+239.46px)] w-[151.238px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                  <img alt="" className="absolute h-[311.29%] left-[-102.99%] max-w-none top-[-208.35%] w-[304.61%]" src={imgRectangle3473785} />
                </div>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[85.072px] left-1/2 rounded-[20px] top-[calc(50%+332.53px)] w-[151.238px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                  <img alt="" className="absolute h-[311.29%] left-[-201.6%] max-w-none top-[-208.35%] w-[302.53%]" src={imgRectangle3473785} />
                </div>
              </div>
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
              className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[795.397px] left-[calc(50%-145.58px)] opacity-80 rounded-[20px] top-[calc(50%-0.11px)] w-[1175.145px] transition-opacity duration-500"
              style={{ opacity: subScreen === 'calendar' ? 0 : 0.8 }}
            />

            {/* Center: Q3 Summary title — hidden when calendar shown */}
            <div
              className="-translate-y-1/2 absolute flex flex-col font-['Google_Sans',sans-serif] font-bold justify-center leading-[0] left-[calc(50%-607.21px)] not-italic opacity-80 text-[52.054px] text-black top-[calc(50%-0.11px)] whitespace-nowrap transition-opacity duration-500"
              style={{ opacity: subScreen === 'calendar' ? 0 : 1 }}
            >
              <p className="leading-[1.5]">Q3 Summary</p>
            </div>

            {/* Calendar — replaces entire left+center area after schedule message */}
            <div
              className="-translate-x-1/2 -translate-y-1/2 absolute top-[calc(50%-0.11px)] left-[calc(50%-291px)] w-[1350px] h-[823.61px] rounded-tl-[50px] rounded-bl-[50px] rounded-tr-[20px] rounded-br-[20px] overflow-hidden transition-opacity duration-500"
              style={{ opacity: subScreen === 'calendar' ? 1 : 0 }}
            >
              <img alt="Calendar" className="w-full h-full object-cover object-left-top" src={imgCalendar} />
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

            {/* Right: "Schedule a meeting" sent bubble — appears after sending */}
            <div
              className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f8f8f8] content-stretch flex items-center justify-end left-[calc(50%+707.72px)] pb-[5.5px] pt-[6.5px] px-[20px] rounded-[10px] top-[calc(50%-122.8px)] transition-opacity duration-300"
              style={{ opacity: scheduleSentVisible ? 1 : 0 }}
            >
              <div className="flex flex-col font-['Google_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[281px]">
                <p className="leading-[1.5]">Schedule a meeting for Q3 summary</p>
              </div>
            </div>

            {/* Right: input bar */}
            <div
              className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#d1d1d1] content-stretch flex gap-[13px] items-center left-[calc(50%+677.09px)] px-[27px] py-[11px] rounded-[36px] top-[calc(50%+356.59px)] w-[396px] cursor-text"
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
                  style={{ caretColor: 'black' }}
                />
              </div>
            </div>
          </div>

          {/* Documents included section — shifted 70px lower per design */}
          <div className="absolute bg-[#f7f7f7] h-[641px] left-[54.25px] opacity-30 rounded-[60px] top-[1121px] w-[1817px]" />
          <p className="absolute font-['Google_Sans',sans-serif] font-medium leading-[0.91] left-[788.75px] not-italic opacity-50 text-[24px] text-black top-[1162.01px] tracking-[-0.72px] whitespace-nowrap">
            Documents included in the file
          </p>

          {/* Doc row 1 */}
          <div className="-translate-x-1/2 absolute contents left-[calc(50%+1px)] top-[1217.13px]">
            <div className="absolute contents left-[93.64px] top-[1217.13px]">
              <div className="-translate-x-1/2 absolute h-[241.169px] left-[calc(50%-758.3px)] opacity-80 rounded-[20px] top-[1217.13px] w-[217.102px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                  <img alt="" className="absolute h-[125.34%] left-0 max-w-none top-0 w-[200.61%]" src={imgRectangle3473785} />
                </div>
              </div>
              <div className="absolute left-[275.04px] opacity-80 size-[30.319px] top-[1223.57px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1010109853} />
              </div>
            </div>
            <div className="absolute contents left-[346.75px] top-[1217.13px]">
              <div className="-translate-x-1/2 absolute h-[241.169px] left-[calc(50%-505.2px)] opacity-80 rounded-[20px] top-[1217.13px] w-[217.102px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgImage1197} />
              </div>
              <div className="absolute left-[528.04px] opacity-80 size-[30.319px] top-[1223.57px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1010109854} />
              </div>
            </div>
            <div className="absolute contents left-[599.85px] top-[1217.13px]">
              <div className="-translate-x-1/2 absolute h-[241.169px] left-[calc(50%-252.1px)] opacity-80 rounded-[20px] top-[1217.13px] w-[217.102px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                  <img alt="" className="absolute h-[137.19%] left-[-93.81%] max-w-none top-[-18.6%] w-[209.6%]" src={imgImage1198} />
                </div>
              </div>
              <div className="absolute left-[781.04px] opacity-80 size-[30.319px] top-[1223.57px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1010109853} />
              </div>
            </div>
            <div className="absolute contents left-[852.95px] top-[1217.13px]">
              <div className="-translate-x-1/2 absolute h-[241.169px] left-[calc(50%+1px)] opacity-80 rounded-[20px] top-[1217.13px] w-[217.102px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgImage1199} />
              </div>
              <div className="absolute left-[1034.04px] opacity-80 size-[30.319px] top-[1223.57px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1010109854} />
              </div>
            </div>
            <div className="absolute contents left-[1106.05px] top-[1217.13px]">
              <div className="-translate-x-1/2 absolute h-[241.169px] left-[calc(50%+254.1px)] opacity-80 rounded-[20px] top-[1217.13px] w-[217.102px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                  <img alt="" className="absolute h-[144.2%] left-[-6.59%] max-w-none top-[-4.78%] w-[113.18%]" src={imgImage1200} />
                </div>
              </div>
              <div className="absolute left-[1287.04px] opacity-80 size-[30.319px] top-[1223.57px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1010109854} />
              </div>
            </div>
            <div className="absolute contents left-[1359.15px] top-[1217.13px]">
              <div className="-translate-x-1/2 absolute h-[241.169px] left-[calc(50%+507.2px)] opacity-80 rounded-[10px] top-[1217.13px] w-[217.102px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
                  <img alt="" className="absolute h-[172.26%] left-[-30.72%] max-w-none top-[-28.24%] w-[161.44%]" src={imgImage1202} />
                </div>
              </div>
              <div className="absolute left-[1541.04px] opacity-80 size-[30.319px] top-[1223.57px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1010109854} />
              </div>
            </div>
            <div className="absolute contents left-[1612.25px] top-[1217.13px]">
              <div className="-translate-x-1/2 absolute h-[241.169px] left-[calc(50%+760.3px)] opacity-80 rounded-[10px] top-[1217.13px] w-[217.102px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImage1203} />
              </div>
              <div className="absolute left-[1794.04px] opacity-80 size-[30.319px] top-[1223.57px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1010109854} />
              </div>
            </div>
          </div>

          {/* Doc row 2 */}
          <div className="-translate-x-1/2 absolute contents left-[calc(50%+1px)] top-[1491.42px]">
            <div className="absolute contents left-[93.64px] top-[1491.42px]">
              <div className="-translate-x-1/2 absolute h-[241.169px] left-[calc(50%-758.3px)] opacity-80 rounded-[20px] top-[1491.42px] w-[217.102px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgImage1123} />
              </div>
              <div className="absolute left-[275.04px] opacity-80 size-[30.319px] top-[1497.86px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1010109853} />
              </div>
            </div>
            <div className="absolute contents left-[346.75px] top-[1491.42px]">
              <div className="-translate-x-1/2 absolute h-[241.169px] left-[calc(50%-505.2px)] opacity-80 rounded-[20px] top-[1491.42px] w-[217.102px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgImage1201} />
              </div>
              <div className="absolute left-[528.04px] opacity-80 size-[30.319px] top-[1497.86px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1010109854} />
              </div>
            </div>
            <div className="absolute contents left-[599.85px] top-[1491.42px]">
              <div className="-translate-x-1/2 absolute h-[241.169px] left-[calc(50%-252.1px)] opacity-80 rounded-[20px] top-[1491.42px] w-[217.102px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgImage1204} />
              </div>
              <div className="absolute left-[781.04px] opacity-80 size-[30.319px] top-[1497.86px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1010109853} />
              </div>
            </div>
            <div className="absolute contents left-[852.95px] top-[1491.42px]">
              <div className="-translate-x-1/2 absolute h-[241.169px] left-[calc(50%+1px)] opacity-80 rounded-[20px] top-[1491.42px] w-[217.102px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgImage1205} />
              </div>
              <div className="absolute left-[1034.04px] opacity-80 size-[30.319px] top-[1497.86px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1010109854} />
              </div>
            </div>
            <div className="absolute contents left-[1106.05px] top-[1491.42px]">
              <div className="-translate-x-1/2 absolute h-[241.169px] left-[calc(50%+254.1px)] opacity-80 rounded-[20px] top-[1491.42px] w-[217.102px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgImage1206} />
              </div>
              <div className="absolute left-[1287.04px] opacity-80 size-[30.319px] top-[1497.86px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1010109854} />
              </div>
            </div>
            <div className="absolute contents left-[1359.15px] top-[1491.42px]">
              <div className="-translate-x-1/2 absolute h-[241.169px] left-[calc(50%+507.2px)] opacity-80 rounded-[20px] top-[1491.42px] w-[217.102px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgImage1207} />
              </div>
              <div className="absolute left-[1541.04px] opacity-80 size-[30.319px] top-[1497.86px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1010109854} />
              </div>
            </div>
            <div className="absolute contents left-[1612.25px] top-[1491.42px]">
              <div className="-translate-x-1/2 absolute h-[241.169px] left-[calc(50%+760.3px)] opacity-80 rounded-[20px] top-[1491.42px] w-[217.102px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgImage1208} />
              </div>
              <div className="absolute left-[1794.04px] opacity-80 size-[30.319px] top-[1497.86px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1010109854} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
