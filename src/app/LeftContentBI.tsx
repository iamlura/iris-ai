/**
 * Left-panel content for the BI flow.
 * Renders at 1383.25×990 (left portion of expanded pill).
 * Three screens: Docs, BI dashboard, Email — shell crossfades between them.
 *
 * Action buttons (edit/Create BI, edit/share) are rendered as `leftOverlay` on
 * the SessionShell so they can sit above the crossfade and swap independently.
 */

// Asset URLs from Figma (same as original FrameBI)
const imgBiDashboard  = "https://www.figma.com/api/mcp/asset/79da4616-4eba-4a5d-a9d1-8e8dfd4ff21b";
const imgOutlookEmail = "https://www.figma.com/api/mcp/asset/371210d9-d4f7-4349-853b-45041a5f2c7b";
const imgShareIcon    = "https://www.figma.com/api/mcp/asset/4e00ede5-5184-4677-af12-441b02fe42f8";
const imgChromeDots   = "https://www.figma.com/api/mcp/asset/b9c706f4-344e-4844-8ef6-81af64258219";

// Shared top-left window chrome decoration (three dots), matches Q3 flow
function ChromeDots() {
  return (
    <div style={{
      position: 'absolute',
      width: '120.96px',
      height: '30.319px',
      left: '50px',
      top: '50px',
    }}>
      <img alt="" style={{ width: '100%', height: '100%', display: 'block' }} src={imgChromeDots} />
    </div>
  );
}

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

/* ==========================================================================
   COLLECTION OF DOCUMENTS
   ========================================================================== */
export function BIDocsLeft() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <ChromeDots />
      {/* Title */}
      <p style={{
        position: 'absolute',
        fontFamily: "'Google_Sans', sans-serif",
        fontWeight: 400,
        fontSize: '20px',
        color: 'black',
        opacity: 0.8,
        left: '70px',
        top: '78px',
        lineHeight: 1.5,
        margin: 0,
      }}>
        Collection of Documents
      </p>
      <p style={{
        position: 'absolute',
        fontFamily: "'Google_Sans', sans-serif",
        fontWeight: 700,
        fontSize: '48px',
        color: 'black',
        opacity: 0.8,
        left: '70px',
        top: '116px',
        lineHeight: 1.5,
        margin: 0,
      }}>
        2025-2026
      </p>

      {/* Document grid */}
      <div style={{ position: 'absolute', height: '815px', left: '70px', top: '176px', width: '1062px', overflow: 'hidden' }}>
        {/* Col 0 */}
        <div style={{ position: 'absolute', height: '314.715px', left: 0, top: '0.07px', width: '243.712px', opacity: 0.6, borderRadius: '31px' }}>
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: '31px' }}>
            <img alt="" style={{ position: 'absolute', maxWidth: 'none', height: '119.94%', left: '-6.6%', top: '-12.67%', width: '230.06%' }} src={imgRect12} />
          </div>
        </div>
        <div style={{ position: 'absolute', height: '314.715px', left: '0.03px', top: '342.79px', width: '243.712px', opacity: 0.6, borderRadius: '31px' }}>
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: '31px' }}>
            <img alt="" style={{ position: 'absolute', maxWidth: 'none', height: '100%', left: 0, top: 0, width: '200.92%' }} src={imgRect15} />
          </div>
        </div>
        <div style={{ position: 'absolute', height: '314.715px', left: '0.03px', top: '682.96px', width: '243.712px', opacity: 0.6, borderRadius: '31px' }}>
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: '31px' }}>
            <img alt="" style={{ position: 'absolute', maxWidth: 'none', height: '100%', left: 0, top: 0, width: '309.82%' }} src={imgRect20} />
          </div>
        </div>
        {/* Col 1 */}
        <div style={{ position: 'absolute', height: '314.715px', left: '272.74px', top: '0.07px', width: '243.712px', opacity: 0.6, borderRadius: '31px' }}>
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: '31px' }}>
            <img alt="" style={{ position: 'absolute', maxWidth: 'none', height: '100%', left: '-3.31%', top: 0, width: '206.61%' }} src={imgRect13} />
          </div>
        </div>
        <div style={{ position: 'absolute', height: '314.715px', left: '272.74px', top: '342.79px', width: '243.712px', opacity: 0.6, borderRadius: '31px' }}>
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: '31px' }}>
            <img alt="" style={{ position: 'absolute', maxWidth: 'none', height: '100%', left: '-100.92%', top: 0, width: '200.92%' }} src={imgRect15} />
          </div>
        </div>
        <div style={{ position: 'absolute', height: '314.715px', left: '272.74px', top: '682.96px', width: '243.712px', opacity: 0.6, borderRadius: '31px' }}>
          <img alt="" style={{ position: 'absolute', inset: 0, maxWidth: 'none', objectFit: 'cover', borderRadius: '31px', width: '100%', height: '100%' }} src={imgRect21} />
        </div>
        {/* Col 2 */}
        <div style={{ position: 'absolute', height: '314.715px', left: '545.45px', top: '0.07px', width: '243.712px', opacity: 0.6, borderRadius: '31px' }}>
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: '31px' }}>
            <img alt="" style={{ position: 'absolute', maxWidth: 'none', height: '100%', left: '-5.89%', top: 0, width: '274.65%' }} src={imgRect14} />
          </div>
        </div>
        <div style={{ position: 'absolute', height: '314.715px', left: '545.45px', top: '342.79px', width: '243.712px', opacity: 0.6, borderRadius: '31px' }}>
          <img alt="" style={{ position: 'absolute', inset: 0, maxWidth: 'none', objectFit: 'cover', borderRadius: '31px', width: '100%', height: '100%' }} src={imgRect17} />
        </div>
        <div style={{ position: 'absolute', height: '314.715px', left: '545.45px', top: '682.96px', width: '243.712px', opacity: 0.6, borderRadius: '31px' }}>
          <img alt="" style={{ position: 'absolute', inset: 0, maxWidth: 'none', objectFit: 'cover', borderRadius: '31px', width: '100%', height: '100%' }} src={imgRect22} />
        </div>
        {/* Col 3 */}
        <div style={{ position: 'absolute', height: '314.715px', left: '818.16px', top: '0.07px', width: '243.712px', opacity: 0.6, borderRadius: '31px' }}>
          <img alt="" style={{ position: 'absolute', inset: 0, maxWidth: 'none', objectFit: 'cover', borderRadius: '31px', width: '100%', height: '100%' }} src={imgRect18} />
        </div>
        <div style={{ position: 'absolute', height: '314.715px', left: '818.16px', top: '342.79px', width: '243.712px', opacity: 0.6, borderRadius: '31px' }}>
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: '31px' }}>
            <img alt="" style={{ position: 'absolute', maxWidth: 'none', height: '100%', left: '-8.01%', top: 0, width: '229.57%' }} src={imgRect19} />
          </div>
        </div>
        <div style={{ position: 'absolute', height: '314.715px', left: '818.16px', top: '682.96px', width: '243.712px', opacity: 0.6, borderRadius: '31px' }}>
          <img alt="" style={{ position: 'absolute', inset: 0, maxWidth: 'none', objectFit: 'cover', borderRadius: '31px', width: '100%', height: '100%' }} src={imgRect23} />
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   BI DASHBOARD — full-bleed image
   ========================================================================== */
export function BIDashboardLeft() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div style={{ position: 'absolute', inset: '20px', borderRadius: '50px', background: '#f6f9fc', overflow: 'hidden' }}>
        <img
          alt="Fiscal Year BI Dashboard"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'left top' }}
          src={imgBiDashboard}
        />
      </div>
      <ChromeDots />
    </div>
  );
}

/* ==========================================================================
   OUTLOOK EMAIL — full-bleed image
   ========================================================================== */
export function EmailLeft() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div style={{ position: 'absolute', inset: '20px', borderRadius: '50px', overflow: 'hidden' }}>
        <img
          alt="Outlook Email"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'left top' }}
          src={imgOutlookEmail}
        />
      </div>
      <ChromeDots />
    </div>
  );
}

/* ==========================================================================
   Action buttons — rendered as leftOverlay above crossfade
   ========================================================================== */
export function BIActionButtons({ variant, onCreateBI, onShare }: { variant: 'edit-createbi' | 'edit-share'; onCreateBI?: () => void; onShare?: () => void }) {
  return (
    <div
      style={{
        position: 'absolute',
        right: '500px',
        top: '68px',
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
        zIndex: 2,
      }}
    >
      <div style={{ background: '#515c72', padding: '7.2px 25.2px 6px', borderRadius: '42.6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: "'Google_Sans', sans-serif", fontSize: '21.6px', color: 'white', lineHeight: 1.5 }}>edit</span>
      </div>
      {variant === 'edit-createbi' ? (
        <div
          onClick={onCreateBI}
          style={{ background: '#034bd8', padding: '7.2px 25.2px 6px', borderRadius: '42.6px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
        >
          <span style={{ fontFamily: "'Google_Sans', sans-serif", fontWeight: 500, fontSize: '21.6px', color: 'white', lineHeight: 1.5 }}>Create BI</span>
        </div>
      ) : (
        <div
          onClick={onShare}
          style={{ background: '#034bd8', padding: '7.2px 25.2px 6px', borderRadius: '42.6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6.4px', cursor: 'pointer' }}
        >
          <div style={{ height: '14.565px', width: '11.272px', position: 'relative' }}>
            <img alt="" style={{ display: 'block', width: '100%', height: '100%' }} src={imgShareIcon} />
          </div>
          <span style={{ fontFamily: "'Google_Sans', sans-serif", fontWeight: 500, fontSize: '21.6px', color: 'white', lineHeight: 1.5 }}>share</span>
        </div>
      )}
    </div>
  );
}
