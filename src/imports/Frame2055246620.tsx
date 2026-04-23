import { useState, useRef, useEffect } from 'react';
import svgPaths from "./svg-zsx0ep86s0";
import svgPathsExpanded from "./svg-xjlncwwdvr";
import imgRectangle3473812 from "./image.png";
import imgRectangle3473815 from "./image-0.png";
import imgRectangle3473820 from "./image-1.png";
import imgRectangle3473813 from "./image-2.png";
import imgRectangle3473821 from "./image-3.png";
import imgRectangle3473814 from "./image-4.png";
import imgRectangle3473818 from "./image-5.png";
import imgRectangle3473817 from "./image.png";
import imgRectangle3473822 from "./image-0.png";
import imgRectangle3473819 from "./image-1.png";
import imgRectangle3473823 from "./image-2.png";

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

function Group() {
  const { date, time } = useLiveClock();
  return (
    <div className="absolute contents left-[1771px] not-italic text-black top-[50px] whitespace-nowrap">
      <p className="absolute font-['Google_Sans',sans-serif] leading-[normal] left-[1791px] opacity-50 text-[16px] top-[50px]">{date}</p>
      <p className="absolute font-['Google_Sans',sans-serif] leading-[0.91] left-[1771px] opacity-80 text-[36px] top-[72.48px] tracking-[-1.08px]">{time}</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[26.934px] relative shrink-0 w-[13.895px]">
      <div className="absolute inset-[0_-5.4%_-2.78%_-5.4%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.395 27.6821">
          <g id="Group 1010109848">
            <rect fill="var(--fill-0, black)" height="16.937" id="Rectangle 3473781" rx="4.36072" width="8.72144" x="3.33629" />
            <path d={svgPaths.p4420c00} id="Vector 776" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" />
            <path d="M7.69702 20.3245V26.9323" id="Vector 777" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
            <path d={svgPaths.p30531980} id="Vector 778" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ExpandedFrame6() {
  return (
    <div className="bg-[#515c72] content-stretch flex items-center justify-center pb-[6px] pt-[7.2px] px-[25.2px] relative rounded-[42.6px] shrink-0">
      <div className="flex flex-col font-['Google_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[21.6px] text-white whitespace-nowrap">
        <p className="leading-[1.5]">edit</p>
      </div>
    </div>
  );
}

function ExpandedFrame5() {
  return (
    <div className="bg-[#034bd8] content-stretch flex items-center justify-center pb-[6px] pt-[7.2px] px-[25.2px] relative rounded-[42.6px] shrink-0">
      <div className="flex flex-col font-['Google_Sans',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[21.6px] text-white whitespace-nowrap">
        <p className="leading-[1.5]">Create BI</p>
      </div>
    </div>
  );
}

function ExpandedFrame7() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[872.2px] top-[68.11px]">
      <ExpandedFrame6 />
      <ExpandedFrame5 />
    </div>
  );
}

function ExpandedFrame1() {
  return (
    <div className="absolute h-[815px] left-[70px] overflow-clip top-[176.24px] w-[1062px]">
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
      <div className="absolute h-[314.715px] left-[545.45px] opacity-60 rounded-[31px] top-[0.07px] w-[243.712px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[31px]">
          <img alt="" className="absolute h-full left-[-5.89%] max-w-none top-0 w-[274.65%]" src={imgRectangle3473814} />
        </div>
      </div>
      <div className="absolute h-[314.715px] left-[818.16px] opacity-60 rounded-[31px] top-[0.07px] w-[243.712px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[31px] size-full" src={imgRectangle3473818} />
      </div>
      <div className="absolute h-[314.715px] left-[545.45px] opacity-60 rounded-[31px] top-[342.79px] w-[243.712px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[31px] size-full" src={imgRectangle3473817} />
      </div>
      <div className="absolute h-[314.715px] left-[545.45px] opacity-60 rounded-[31px] top-[682.96px] w-[243.712px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[31px] size-full" src={imgRectangle3473822} />
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
  );
}

function ExpandedGroup5() {
  return (
    <div className="absolute contents font-['Google_Sans',sans-serif] font-bold leading-[0] left-[70.03px] not-italic text-black top-[62.36px] whitespace-nowrap">
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[70.03px] opacity-80 text-[20px] top-[77.36px]">
        <p className="leading-[1.5]">Collection of Documents</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[70.03px] opacity-80 text-[48px] top-[116.36px]">
        <p className="leading-[1.5]">2025-2026</p>
      </div>
    </div>
  );
}

function ExpandedGroup4() {
  return (
    <div className="h-[15.148px] relative shrink-0 w-[7.816px]">
      <div className="absolute inset-[0_-5.4%_-2.78%_-5.4%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.6597 15.5698">
          <g id="Group 1010109848">
            <rect fill="var(--fill-0, black)" height="9.52704" id="Rectangle 3473781" rx="2.4529" width="4.90581" x="1.87646" />
            <path d={svgPathsExpanded.p15c82c80} id="Vector 776" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="0.84375" />
            <path d="M4.32935 11.4316V15.1485" id="Vector 777" stroke="var(--stroke-0, black)" strokeWidth="0.84375" />
            <path d={svgPathsExpanded.p1a6c3e40} id="Vector 778" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="0.84375" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ExpandedFrame2() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#d1d1d1] content-stretch flex gap-[13px] items-center left-[calc(50%+593.18px)] px-[27px] py-[11px] rounded-[36px] top-[896.16px] w-[509px]">
      <ExpandedGroup4 />
      <div className="flex flex-col font-['Google_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[291px]">
        <p className="leading-[1.5]">|Ask Anything</p>
      </div>
    </div>
  );
}

function ExpandedGroup() {
  return (
    <div className="absolute bg-[#f8f8f8] content-stretch flex items-center justify-end left-[1425.18px] overflow-clip pb-[5.5px] pt-[6.5px] px-[20px] rounded-[10px] top-[62.36px]">
      <div className="flex flex-col font-['Google_Sans',sans-serif] justify-center leading-[0] not-italic opacity-80 relative shrink-0 text-[18px] text-black text-center tracking-[-1.3997px] whitespace-nowrap">
        <p className="leading-[1.5]">Create Power BI of this year's earnings</p>
      </div>
    </div>
  );
}

function ExpandedGroup1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[1247.18px] overflow-clip pb-[15px] pt-[16px] px-[20px] rounded-[20px] top-[152.41px]">
      <div className="flex flex-col font-['Google_Sans',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[310.4px]">
        <p className="leading-[1.5]">{`Collected this year's earning data. Please confirm if these are the documents you wish to include. `}</p>
      </div>
    </div>
  );
}

function Frame1({ inputValue, isFocused }: { inputValue: string; isFocused: boolean }) {
  let placeholderOpacity = 'opacity-100';

  if (inputValue !== '') {
    placeholderOpacity = 'opacity-0';
  } else if (isFocused) {
    placeholderOpacity = 'opacity-20';
  }

  return (
    <div className={`absolute left-0 top-0 flex flex-col font-['Google_Sans',sans-serif] font-normal justify-center leading-[0] text-[0px] text-black whitespace-nowrap transition-opacity duration-300 pointer-events-none ${placeholderOpacity}`}>
      <p className="font-['Google_Sans',sans-serif] not-italic text-[24.951px]">
        <span className="leading-[1.5]">|</span>
        <span className="leading-[1.5] text-black">Ask Anything</span>
      </p>
    </div>
  );
}

function Frame({ onNavigate, onNavigateBi }: { onNavigate?: () => void; onNavigateBi?: () => void }) {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [inputWidth, setInputWidth] = useState(0);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const val = inputValue.trim().toLowerCase();
    const isBiPrompt = val.includes('create') && val.includes('bi');
    if (e.key === 'Enter' && (val === 'create q3 summary' || isBiPrompt)) {
      const isBi = isBiPrompt && val !== 'create q3 summary';
      setTimeout(() => {
        setIsFading(true);
        setTimeout(() => {
          setIsExpanded(true);
          setInputValue('');
          setIsFocused(false);
          setTimeout(() => {
            if (isBi) {
              onNavigateBi?.();
            } else {
              onNavigate?.();
            }
          }, isBi ? 1800 : 800);
        }, 450);
      }, 300);
    }
  };

  useEffect(() => {
    if (measureRef.current) {
      const width = measureRef.current.offsetWidth;
      setInputWidth(width);
    }
  }, [inputValue]);

  const baseWidth = 399.61;
  const iconAndGapWidth = 13.895 + 22;
  const horizontalPadding = 94 * 2;
  const contentWidth = inputValue === '' ? 0 : inputWidth + iconAndGapWidth;
  const requiredWidth = contentWidth + horizontalPadding;
  const frameWidth = isExpanded ? 1817 : Math.max(baseWidth, requiredWidth);
  const frameHeight = isExpanded ? 990 : 94.42;
  const contentOpacity = isFading ? 0 : 1;
  const leftPosition = isExpanded ? 'calc(50% + 0.75px)' : '50%';
  const topPosition = isExpanded ? 'calc(50% + 49px)' : '50%';

  return (
    <div
      className="-translate-x-1/2 -translate-y-1/2 absolute rounded-[60px] cursor-text transition-all duration-[1600ms] ease-in-out"
      style={{
        width: `${frameWidth}px`,
        height: `${frameHeight}px`,
        left: leftPosition,
        top: topPosition,
        pointerEvents: 'auto',
        zIndex: 10
      }}
      onClick={handleClick}
    >
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[60px]" style={{ backgroundImage: "linear-gradient(165.864deg, rgba(225, 225, 225, 0.5) 43.108%, rgba(255, 255, 255, 0.5) 102.39%)" }} />
      <div className="overflow-clip relative rounded-[inherit] size-full" style={{ backdropFilter: 'blur(40px) saturate(180%) contrast(120%)', WebkitBackdropFilter: 'blur(40px) saturate(180%) contrast(120%)', pointerEvents: 'none' }}>
      <div className="relative w-full h-full flex items-center px-[94px] py-[28px]" style={{ opacity: contentOpacity, transition: 'opacity 450ms ease-in-out', pointerEvents: 'auto' }}>
        <span
          ref={measureRef}
          className="absolute invisible whitespace-pre font-['Google_Sans',sans-serif] text-[24.951px] leading-[1.5]"
        >
          {inputValue}
        </span>

        <div className="flex gap-[22px] items-center w-full relative">
          <Group1 />
          <div className="relative flex-1 min-w-0">
            {inputValue === '' && <Frame1 inputValue={inputValue} isFocused={isFocused} />}
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              className="bg-transparent outline-none border-none font-['Google_Sans',sans-serif] text-[24.951px] leading-[1.5] text-black caret-black w-full relative z-10"
              style={{ caretColor: 'black', pointerEvents: 'auto' }}
            />
          </div>
        </div>
      </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-18px_-12px_7.8px_0px_rgba(255,255,255,0.25),inset_8px_4px_14.7px_0px_rgba(0,0,0,0)]" />
      <div aria-hidden="true" className="absolute border-[0.2px] border-solid inset-0 pointer-events-none rounded-[60px]" style={{ borderColor: 'rgba(255, 255, 255, 0.5)', background: 'linear-gradient(133deg, rgba(240, 240, 240, 0.01) -43.11%, rgba(255, 255, 255, 0.01) 102.39%)', boxShadow: '-24px -16px 12px 0 rgba(255, 255, 255, 0.3) inset, -8px -4px 6px 0 rgba(255, 255, 255, 0.4) inset, 12px 8px 20px 0 rgba(0, 0, 0, 0.075) inset, 4px 2px 8px 0 rgba(0, 0, 0, 0.05) inset, 47px 70px 100px 0 rgba(0, 0, 0, 0.08), 0 4px 24px 0 rgba(255, 255, 255, 0.15) inset, 0 -2px 12px 0 rgba(255, 255, 255, 0.25) inset' }} />
    </div>
  );
}

export default function Frame2({ onNavigate, onNavigateBi }: { onNavigate?: () => void; onNavigateBi?: () => void }) {
  return (
    <div className="bg-[#F2F4F9] relative size-full">
      <Group />
      <Frame onNavigate={onNavigate} onNavigateBi={onNavigateBi} />
    </div>
  );
}