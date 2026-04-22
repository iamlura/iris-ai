import svgPaths from "./svg-46z4i89czs";

function Group() {
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

function Frame1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[22px] items-center justify-center left-1/2 top-1/2">
      <Group />
      <div className="flex flex-col font-['Google_Sans',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black whitespace-nowrap">
        <p className="font-['Google_Sans',sans-serif] not-italic text-[24.951px]">
          <span className="leading-[1.5]">|</span>
          <span className="leading-[1.5] text-black">Ask Anything</span>
        </p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative rounded-[60px] size-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[60px]" style={{ backgroundImage: "linear-gradient(165.864deg, rgba(225, 225, 225, 0.5) 43.108%, rgba(255, 255, 255, 0.5) 102.39%)" }} />
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame1 />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-18px_-12px_7.8px_0px_rgba(255,255,255,0.25),inset_8px_4px_14.7px_0px_rgba(0,0,0,0)]" />
      <div aria-hidden="true" className="absolute border-[0.2px] border-black border-solid inset-0 pointer-events-none rounded-[60px] shadow-[47px_70px_100px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}