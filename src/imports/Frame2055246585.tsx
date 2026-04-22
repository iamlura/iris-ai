import svgPaths from "./svg-fsar9wk6p6";

function Group() {
  return (
    <div className="absolute contents left-[1771px] not-italic text-black top-[50px] whitespace-nowrap">
      <p className="absolute font-['Google_Sans',sans-serif] leading-[normal] left-[1791px] opacity-50 text-[16px] top-[50px]">2026.5.20</p>
      <p className="absolute font-['Google_Sans',sans-serif] leading-[0.91] left-[1771px] opacity-80 text-[36px] top-[72.48px] tracking-[-1.08px]">08:58</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[26.936px] relative shrink-0 w-[13.895px]">
      <div className="absolute inset-[0_-5.4%_-2.77%_-5.4%]">
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

function Frame1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[22px] items-center justify-center left-[calc(50%-0.7px)] opacity-0 top-[calc(50%-86.79px)]">
      <Group1 />
      <div className="flex flex-col font-['Google_Sans',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black whitespace-nowrap">
        <p className="font-['Google_Sans',sans-serif] not-italic text-[24.951px]">
          <span className="leading-[1.5]">|</span>
          <span className="leading-[1.5] text-black">Ask Anything</span>
        </p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0)] h-[990px] left-[calc(50%+0.75px)] overflow-clip rounded-[60px] shadow-[47px_70px_100px_0px_rgba(0,0,0,0.05)] top-[calc(50%+49px)] w-[1817px]">
      <Frame1 />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-[#f1f1f1] relative size-full">
      <Group />
      <Frame />
    </div>
  );
}