// Q3 Summary screen — matches Figma node 1:1779

const imgRectangle3473784 = "https://www.figma.com/api/mcp/asset/1ab12b79-29d8-434f-b07b-9cd54997a49b";
const imgRectangle3473785 = "https://www.figma.com/api/mcp/asset/a44ca468-c6a7-4eba-a4f3-e9e708a91a56";
const imgImage1197 = "https://www.figma.com/api/mcp/asset/e3ac447f-1674-4cd1-810f-427ea5216717";
const imgImage1198 = "https://www.figma.com/api/mcp/asset/be47c8ed-56d2-4994-8d58-160127396d11";
const imgImage1199 = "https://www.figma.com/api/mcp/asset/12e8d0ce-2547-4258-babe-3e514b2cc6dd";
const imgImage1200 = "https://www.figma.com/api/mcp/asset/f377308f-f8d9-4e92-9ee5-8492ae5b7ca6";
const imgImage1202 = "https://www.figma.com/api/mcp/asset/88b5271e-9df2-4c99-ba2a-831391f00687";
const imgImage1203 = "https://www.figma.com/api/mcp/asset/47708050-1718-4d10-a741-4161fc8d4946";
const imgImage1123 = "https://www.figma.com/api/mcp/asset/d6dd8643-6495-4b6a-b5b5-aeae045b1587";
const imgImage1201 = "https://www.figma.com/api/mcp/asset/a0edce09-2ca9-4da0-8da7-9c7c02f52147";
const imgImage1204 = "https://www.figma.com/api/mcp/asset/16206ca1-69fe-4534-b426-d4bff5fdfa10";
const imgImage1205 = "https://www.figma.com/api/mcp/asset/2546a1a0-425e-4686-b95e-e4e31342226d";
const imgImage1206 = "https://www.figma.com/api/mcp/asset/c3c47f98-1ae0-49a3-adbd-ac2a689a0e6b";
const imgImage1207 = "https://www.figma.com/api/mcp/asset/a1be2a7f-39ae-4971-9032-afd7e8b769a9";
const imgImage1208 = "https://www.figma.com/api/mcp/asset/5eaa3290-02b1-40c4-aaaa-acb9671c4930";
const imgMicIcon = "https://www.figma.com/api/mcp/asset/26676f5d-a7fa-42b5-a466-989233e8abc8";
const imgLogoTop = "https://www.figma.com/api/mcp/asset/1f5d10ca-928b-4c52-b15b-1de99af2fbe8";
const imgMicSmall = "https://www.figma.com/api/mcp/asset/e8e87f6c-94b4-4408-8795-8fdc34c7259a";
const imgCloseIcon = "https://www.figma.com/api/mcp/asset/79131e67-93a2-4b06-8cbd-cfcedb56ee0e";
const imgMaxIcon = "https://www.figma.com/api/mcp/asset/7e6ecfb8-0ffd-410e-bda3-6f15f979a46e";

const thumbnails = [
  imgRectangle3473784,
  imgRectangle3473785,
  imgRectangle3473785,
  imgRectangle3473785,
  imgRectangle3473785,
  imgRectangle3473785,
  imgRectangle3473785,
  imgRectangle3473785,
];

const docRow1 = [
  { img: imgRectangle3473785, close: imgCloseIcon },
  { img: imgImage1197, close: imgMaxIcon },
  { img: imgImage1198, close: imgCloseIcon },
  { img: imgImage1199, close: imgMaxIcon },
  { img: imgImage1200, close: imgMaxIcon },
  { img: imgImage1202, close: imgMaxIcon },
  { img: imgImage1203, close: imgMaxIcon },
];

const docRow2 = [
  { img: imgImage1123, close: imgCloseIcon },
  { img: imgImage1201, close: imgMaxIcon },
  { img: imgImage1204, close: imgCloseIcon },
  { img: imgImage1205, close: imgMaxIcon },
  { img: imgImage1206, close: imgMaxIcon },
  { img: imgImage1207, close: imgMaxIcon },
  { img: imgImage1208, close: imgMaxIcon },
];

export default function Frame2055246625({ visible }: { visible: boolean }) {
  return (
    <div
      className="bg-[#f1f1f1] absolute inset-0 transition-opacity duration-700"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none' }}
    >
      {/* Clock */}
      <div className="absolute right-[50px] top-[50px] not-italic text-black whitespace-nowrap text-right">
        <p className="font-['Google_Sans',sans-serif] leading-normal opacity-50 text-[16px]">2026.5.20</p>
        <p className="font-['Google_Sans',sans-serif] font-medium leading-[0.91] opacity-80 text-[36px] tracking-[-1.08px]">08:58</p>
      </div>

      {/* Main card */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(50%+34px)] w-[1816px] h-[824px] rounded-[60px] overflow-hidden shadow-[47px_70px_100px_0px_rgba(0,0,0,0.05)] flex">

        {/* Left thumbnail sidebar */}
        <div className="relative flex flex-col items-center pt-[10px] pb-[10px] w-[175px] shrink-0">
          {/* Logo */}
          <div className="w-[121px] h-[30px] mb-[12px] shrink-0">
            <img alt="" className="w-full h-full object-contain" src={imgLogoTop} />
          </div>
          {/* Thumbnails */}
          <div className="flex flex-col gap-[8px] overflow-y-auto w-full px-[12px]">
            {thumbnails.map((src, i) => (
              <div key={i} className={`rounded-[20px] overflow-hidden shrink-0 h-[85px] w-full ${i === 0 ? 'ring-2 ring-blue-400' : ''}`}>
                <img alt="" className="w-full h-full object-cover" src={src} />
              </div>
            ))}
          </div>
        </div>

        {/* Center document viewer */}
        <div className="bg-white opacity-80 rounded-[20px] flex-1 flex items-center justify-start px-[60px] m-[14px]">
          <h1 className="font-['Google_Sans',sans-serif] font-bold text-[52px] text-black opacity-80">Q3 Summary</h1>
        </div>

        {/* Right AI chat sidebar */}
        <div className="relative w-[434px] shrink-0 flex flex-col justify-between py-[30px] px-[24px]">
          {/* Gray bg */}
          <div className="absolute inset-0 bg-[#797979] opacity-10 rounded-bl-[20px] rounded-br-[50px] rounded-tl-[20px] rounded-tr-[50px]" />

          <div className="relative flex flex-col gap-[16px]">
            {/* User prompt bubble */}
            <div className="bg-[#f8f8f8] rounded-[10px] px-[20px] py-[12px] self-end max-w-[320px]">
              <p className="font-['Google_Sans',sans-serif] text-[16px] text-black opacity-80 leading-[1.5]">"I need to create Q3 performance summary"</p>
            </div>
            {/* AI response */}
            <div className="px-[20px] py-[15px] max-w-[340px]">
              <p className="font-['Google_Sans',sans-serif] text-[16px] text-black leading-[1.5]">A document containing all the projects worked on this quarter was made. Please confirm if you are fine with it or delete documents you wish to remove</p>
            </div>
          </div>

          {/* Ask Anything input */}
          <div className="relative bg-[#d1d1d1] rounded-[36px] flex items-center gap-[13px] px-[27px] py-[11px] w-full">
            <div className="h-[15px] w-[8px] shrink-0">
              <img alt="" className="w-full h-full object-contain" src={imgMicSmall} />
            </div>
            <p className="font-['Google_Sans',sans-serif] text-[16px] text-black leading-[1.5]">|Ask Anything</p>
          </div>
        </div>
      </div>

      {/* Documents included section */}
      <div className="absolute left-[54px] bottom-0 w-[1817px] h-[641px] bg-[#f7f7f7] opacity-30 rounded-[60px]" />
      <p className="absolute font-['Google_Sans',sans-serif] font-medium text-[24px] text-black opacity-50 tracking-[-0.72px] whitespace-nowrap"
         style={{ left: '50%', transform: 'translateX(-50%)', bottom: '590px' }}>
        Documents included in the file
      </p>

      {/* Doc thumbnails row 1 */}
      <div className="absolute flex gap-[36px]" style={{ left: '54px', bottom: '340px' }}>
        {docRow1.map((d, i) => (
          <div key={i} className="relative rounded-[20px] overflow-hidden opacity-80 w-[217px] h-[241px] shrink-0">
            <img alt="" className="w-full h-full object-cover" src={d.img} />
            <div className="absolute top-[6px] right-[6px] w-[30px] h-[30px]">
              <img alt="" className="w-full h-full" src={d.close} />
            </div>
          </div>
        ))}
      </div>

      {/* Doc thumbnails row 2 */}
      <div className="absolute flex gap-[36px]" style={{ left: '54px', bottom: '66px' }}>
        {docRow2.map((d, i) => (
          <div key={i} className="relative rounded-[20px] overflow-hidden opacity-80 w-[217px] h-[241px] shrink-0">
            <img alt="" className="w-full h-full object-cover" src={d.img} />
            <div className="absolute top-[6px] right-[6px] w-[30px] h-[30px]">
              <img alt="" className="w-full h-full" src={d.close} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
