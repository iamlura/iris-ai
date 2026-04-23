import { useState, useRef, useEffect } from 'react';

// Fresh Figma MCP asset URLs
// BI dashboard screenshot (node 1-3693)
const imgBiDashboard = "https://www.figma.com/api/mcp/asset/79da4616-4eba-4a5d-a9d1-8e8dfd4ff21b";
// Outlook email screenshot (node 1-3746 / 41-20785)
const imgOutlookEmail = "https://www.figma.com/api/mcp/asset/371210d9-d4f7-4349-853b-45041a5f2c7b";
// Share icon
const imgShareIcon = "https://www.figma.com/api/mcp/asset/4e00ede5-5184-4677-af12-441b02fe42f8";
// Mic icon for input bar
const imgMicIcon = "https://www.figma.com/api/mcp/asset/4d5703e3-5184-4fe3-8a59-bb246b4a1bf7";

// Doc grid images (Collection of Documents screen)
const imgRectangle3473812 = "https://www.figma.com/api/mcp/asset/ff02b34c-df96-45c4-bde5-db24e38e0c2f";
const imgRectangle3473815 = "https://www.figma.com/api/mcp/asset/4686ad7d-a11a-4d6e-aff6-9af5568c4e64";
const imgRectangle3473820 = "https://www.figma.com/api/mcp/asset/56b41e23-2810-4962-8b30-1aa78d8a9c00";
const imgRectangle3473813 = "https://www.figma.com/api/mcp/asset/20061c14-4e75-4ade-a071-48b5e2e19b3e";
const imgRectangle3473821 = "https://www.figma.com/api/mcp/asset/968b4b3d-0160-4f58-9c04-a285fa2d78ba";
const imgRectangle3473814 = "https://www.figma.com/api/mcp/asset/9c76fb4b-d96b-4449-a219-d86b649c60ce";
const imgRectangle3473818 = "https://www.figma.com/api/mcp/asset/131d437c-0a5c-4e96-b5af-b6ac769191bd";
const imgRectangle3473817 = "https://www.figma.com/api/mcp/asset/0f39ee08-ec12-4116-a904-bd603a9f12fb";
const imgRectangle3473822 = "https://www.figma.com/api/mcp/asset/85128ad7-3b20-4870-ac9c-1756fb5d8827";
const imgRectangle3473819 = "https://www.figma.com/api/mcp/asset/62aae8b2-01d3-49b9-9914-f50421e36103";
const imgRectangle3473823 = "https://www.figma.com/api/mcp/asset/4b47c7e8-5d32-43fc-9824-106b5b25fe53";

type SubScreen = 'docs' | 'bi' | 'email';

export default function FrameBI({ visible }: { visible: boolean }) {
  const [subScreen, setSubScreen] = useState<SubScreen>('docs');
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [forwardBubbleVisible, setForwardBubbleVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (visible) {
      setSubScreen('docs');
      setInputValue('');
      setForwardBubbleVisible(false);
    }
  }, [visible]);

  const handleCreateBI = () => {
    setTimeout(() => {
      setSubScreen('bi');
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      const val = inputValue.trim().toLowerCase();
      // Trigger on: "forward" OR ("send" + "bi") OR ("forward" + "bi")
      const isForwardTrigger =
        val.includes('forward') ||
        (val.includes('send') && val.includes('bi'));
      if (isForwardTrigger) {
        setForwardBubbleVisible(true);
        setInputValue('');
        setTimeout(() => {
          setSubScreen('email');
        }, 1000);
      } else {
        setInputValue('');
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

        {/* Main expanded card */}
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0)] h-[990px] left-[calc(50%+0.5px)] overflow-clip rounded-[60px] shadow-[47px_70px_100px_0px_rgba(0,0,0,0.05)] top-[calc(50%+49px)] w-[1817px]">

          {/* ── LAYER 1: Collection of Documents ── */}
          <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: subScreen === 'docs' ? 1 : 0, pointerEvents: subScreen === 'docs' ? 'auto' : 'none' }}
          >
            {/* Action buttons */}
            <div className="absolute content-stretch flex gap-[16px] items-center left-[872.2px] top-[68.11px]">
              <div className="bg-[#515c72] content-stretch flex items-center justify-center pb-[6px] pt-[7.2px] px-[25.2px] relative rounded-[42.6px] shrink-0">
                <div className="flex flex-col font-['Google_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[21.6px] text-white whitespace-nowrap">
                  <p className="leading-[1.5]">edit</p>
                </div>
              </div>
              <div
                className="bg-[#034bd8] content-stretch flex items-center justify-center pb-[6px] pt-[7.2px] px-[25.2px] relative rounded-[42.6px] shrink-0 cursor-pointer"
                onClick={handleCreateBI}
              >
                <div className="flex flex-col font-['Google_Sans',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[21.6px] text-white whitespace-nowrap">
                  <p className="leading-[1.5]">Create BI</p>
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="absolute contents font-['Google_Sans',sans-serif] font-bold leading-[0] left-[70.03px] not-italic text-black top-[62.36px] whitespace-nowrap">
              <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[70.03px] opacity-80 text-[20px] top-[77.36px]">
                <p className="leading-[1.5]">Collection of Documents</p>
              </div>
              <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[70.03px] opacity-80 text-[48px] top-[116.36px]">
                <p className="leading-[1.5]">2025-2026</p>
              </div>
            </div>

            {/* Document grid */}
            <div className="absolute h-[815px] left-[70px] overflow-clip top-[176.24px] w-[1062px]">
              {/* Col 0 */}
              <div className="absolute h-[314.715px] left-0 opacity-60 rounded-[31px] top-[0.07px] w-[243.712px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[31px]">
                  <img alt="" className="absolute h-[119.94%] left-[-6.6%] max-w-none top-[-12.67%] w-[230.06%]" src={imgRectangle3473812} />
                </div>
              </div>
              <div className="absolute h-[314.715px] left-[0.03px] opacity-60 rounded-[31px] top-[342.79px] w-[243.712px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[31px]">
                  <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[200.92%]" src={imgRectangle3473815} />
                </div>
              </div>
              <div className="absolute h-[314.715px] left-[0.03px] opacity-60 rounded-[31px] top-[682.96px] w-[243.712px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[31px]">
                  <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[309.82%]" src={imgRectangle3473820} />
                </div>
              </div>
              {/* Col 1 */}
              <div className="absolute h-[314.715px] left-[272.74px] opacity-60 rounded-[31px] top-[0.07px] w-[243.712px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[31px]">
                  <img alt="" className="absolute h-full left-[-3.31%] max-w-none top-0 w-[206.61%]" src={imgRectangle3473813} />
                </div>
              </div>
              <div className="absolute h-[314.715px] left-[272.74px] opacity-60 rounded-[31px] top-[342.79px] w-[243.712px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[31px]">
                  <img alt="" className="absolute h-full left-[-100.92%] max-w-none top-0 w-[200.92%]" src={imgRectangle3473815} />
                </div>
              </div>
              <div className="absolute h-[314.715px] left-[272.74px] opacity-60 rounded-[31px] top-[682.96px] w-[243.712px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[31px] size-full" src={imgRectangle3473821} />
              </div>
              {/* Col 2 */}
              <div className="absolute h-[314.715px] left-[545.45px] opacity-60 rounded-[31px] top-[0.07px] w-[243.712px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[31px]">
                  <img alt="" className="absolute h-full left-[-5.89%] max-w-none top-0 w-[274.65%]" src={imgRectangle3473814} />
                </div>
              </div>
              <div className="absolute h-[314.715px] left-[545.45px] opacity-60 rounded-[31px] top-[342.79px] w-[243.712px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[31px] size-full" src={imgRectangle3473817} />
              </div>
              <div className="absolute h-[314.715px] left-[545.45px] opacity-60 rounded-[31px] top-[682.96px] w-[243.712px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[31px] size-full" src={imgRectangle3473822} />
              </div>
              {/* Col 3 */}
              <div className="absolute h-[314.715px] left-[818.16px] opacity-60 rounded-[31px] top-[0.07px] w-[243.712px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[31px] size-full" src={imgRectangle3473818} />
              </div>
              <div className="absolute h-[314.715px] left-[818.16px] opacity-60 rounded-[31px] top-[342.79px] w-[243.712px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[31px]">
                  <img alt="" className="absolute h-full left-[-8.01%] max-w-none top-0 w-[229.57%]" src={imgRectangle3473819} />
                </div>
              </div>
              <div className="absolute h-[314.715px] left-[818.16px] opacity-60 rounded-[31px] top-[682.96px] w-[243.712px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[31px] size-full" src={imgRectangle3473823} />
              </div>
            </div>

            {/* Right sidebar bg */}
            <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#797979] h-[947.762px] left-[calc(50%+596.18px)] opacity-10 rounded-bl-[20px] rounded-br-[50px] rounded-tl-[20px] rounded-tr-[50px] top-[calc(50%-1.49px)] w-[588.641px]" />

            {/* Right: user prompt bubble */}
            <div className="absolute bg-[#f8f8f8] content-stretch flex items-center justify-end left-[1425.18px] overflow-clip pb-[5.5px] pt-[6.5px] px-[20px] rounded-[10px] top-[62.36px]">
              <div className="flex flex-col font-['Google_Sans',sans-serif] justify-center leading-[0] not-italic opacity-80 relative shrink-0 text-[18px] text-black text-center tracking-[-1.3997px] whitespace-nowrap">
                <p className="leading-[1.5]">Create Power BI of this year's earnings</p>
              </div>
            </div>

            {/* Right: AI response */}
            <div className="absolute content-stretch flex items-center justify-center left-[1247.18px] overflow-clip pb-[15px] pt-[16px] px-[20px] rounded-[20px] top-[152.41px]">
              <div className="flex flex-col font-['Google_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[310.4px]">
                <p className="leading-[1.5]">{`Collected this year's earning data. Please confirm if these are the documents you wish to include.`}</p>
              </div>
            </div>
          </div>

          {/* ── LAYER 2: BI Dashboard ── */}
          <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: subScreen === 'bi' || subScreen === 'email' ? 1 : 0, pointerEvents: subScreen === 'bi' || subScreen === 'email' ? 'auto' : 'none', zIndex: subScreen === 'bi' || subScreen === 'email' ? 1 : 0 }}
          >
            {/* Left panel background */}
            <div className="absolute bg-[#f6f9fc] h-[947.762px] left-[21.47px] rounded-[50px] top-[19.63px] w-[1169.225px]" />

            {/* BI dashboard image — fades out when email shown */}
            <div
              className="absolute h-[947.762px] left-[17.54px] rounded-[50px] top-[19.63px] w-[1176.791px] transition-opacity duration-700 overflow-hidden"
              style={{ opacity: subScreen === 'email' ? 0 : 1 }}
            >
              <img alt="Fiscal Year BI Dashboard" className="absolute inset-0 w-full h-full object-cover object-left-top rounded-[50px]" src={imgBiDashboard} />
            </div>

            {/* Outlook email image — crossfades in */}
            <div
              className="absolute h-[947.762px] left-[17.54px] rounded-[50px] top-[19.63px] w-[1176.791px] transition-opacity duration-700 overflow-hidden"
              style={{ opacity: subScreen === 'email' ? 1 : 0 }}
            >
              <img alt="Outlook Email" className="absolute inset-0 w-full h-full object-cover object-left-top rounded-[50px]" src={imgOutlookEmail} />
            </div>

            {/* Right sidebar bg */}
            <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#797979] h-[947.762px] left-[calc(50%+596.18px)] opacity-10 rounded-bl-[20px] rounded-br-[50px] rounded-tl-[20px] rounded-tr-[50px] top-[calc(50%-1.49px)] w-[588.641px]" />

            {/* Top action buttons — edit + share */}
            <div className="absolute content-stretch flex gap-[16px] items-center left-[908.5px] top-[52.91px]" style={{ zIndex: 2 }}>
              <div className="bg-[#515c72] content-stretch flex h-[46px] items-center justify-center pb-[6px] pt-[7.2px] px-[25.2px] relative rounded-[42.6px] shrink-0">
                <div className="flex flex-col font-['Google_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[21.6px] text-white whitespace-nowrap">
                  <p className="leading-[1.5]">edit</p>
                </div>
              </div>
              <div className="bg-[#034bd8] content-stretch flex h-[46px] items-center justify-center gap-[6.4px] pb-[6px] pt-[7.2px] px-[25.2px] relative rounded-[42.6px] shrink-0">
                <div className="h-[14.565px] relative shrink-0 w-[11.272px]">
                  <img alt="" className="block max-w-none size-full" src={imgShareIcon} />
                </div>
                <div className="flex flex-col font-['Google_Sans',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[21.6px] text-white whitespace-nowrap">
                  <p className="leading-[1.5]">share</p>
                </div>
              </div>
            </div>

            {/* Right: original prompt bubble */}
            <div className="absolute bg-[#f8f8f8] content-stretch flex items-center justify-end left-[1425.18px] overflow-clip pb-[5.5px] pt-[6.5px] px-[20px] rounded-[10px] top-[62.36px]">
              <div className="flex flex-col font-['Google_Sans',sans-serif] justify-center leading-[0] not-italic opacity-80 relative shrink-0 text-[18px] text-black text-center tracking-[-1.3997px] whitespace-nowrap">
                <p className="leading-[1.5]">Create Power BI of this year's earnings</p>
              </div>
            </div>

            {/* Right: AI response */}
            <div className="absolute content-stretch flex items-center justify-center left-[1247.18px] overflow-clip pb-[15px] pt-[16px] px-[20px] rounded-[20px] top-[152.41px]">
              <div className="flex flex-col font-['Google_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[310.4px]">
                <p className="leading-[1.5]">{`Collected this year's earning data. Please confirm if these are the documents you wish to include.`}</p>
              </div>
            </div>

            {/* Right: "Forward BI to relevant people" user bubble — appears after trigger */}
            <div
              className="absolute bg-[#f8f8f8] content-stretch flex items-center justify-end left-[1488.18px] overflow-clip pb-[5.5px] pt-[6.5px] px-[20px] rounded-[10px] top-[306.46px] transition-opacity duration-300"
              style={{ opacity: forwardBubbleVisible ? 1 : 0 }}
            >
              <div className="flex flex-col font-['Google_Sans',sans-serif] justify-center leading-[0] not-italic opacity-80 relative shrink-0 text-[18px] text-black text-center tracking-[-1.3997px] whitespace-nowrap">
                <p className="leading-[1.5]">Forward BI to relevant people</p>
              </div>
            </div>

            {/* Right: AI forwarding response — appears with email screen */}
            <div
              className="absolute content-stretch flex items-center justify-center left-[1247.18px] overflow-clip pb-[15px] pt-[16px] px-[20px] rounded-[20px] top-[396.52px] transition-opacity duration-700"
              style={{ opacity: subScreen === 'email' ? 1 : 0 }}
            >
              <div className="flex flex-col font-['Google_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[405px]">
                <p className="leading-[1.5] mb-0 whitespace-pre-wrap">Forwarding document to relevant people: </p>
                <ul className="list-disc">
                  <li className="mb-0 ms-[24px]"><span className="leading-[1.5]">Tom C (Finance Rep.) &lt;tom.c@hp.com&gt;</span></li>
                  <li className="mb-0 ms-[24px]"><span className="leading-[1.5]">Jesse M (Accounting Rep.) &lt;jesse.m@hp.com&gt;</span></li>
                  <li className="ms-[24px]"><span className="leading-[1.5]">Chris H (Sales Rep.) &lt;chris.h@hp.com&gt;</span></li>
                </ul>
              </div>
            </div>

          </div>

          {/* ── INPUT BAR — always on top ── */}
          <div
            className="-translate-x-1/2 absolute bg-[#d1d1d1] content-stretch flex gap-[13px] items-center left-[calc(50%+593.18px)] px-[27px] py-[11px] rounded-[36px] top-[896.16px] w-[509px] cursor-text"
            style={{ zIndex: 10, pointerEvents: 'auto' }}
            onClick={() => inputRef.current?.focus()}
          >
            <div className="h-[15.15px] relative shrink-0 w-[7.816px]">
              <div className="absolute inset-[0_-5.4%_-2.77%_-5.4%]">
                <img alt="" className="block max-w-none size-full" src={imgMicIcon} />
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
      </div>
    </div>
  );
}
