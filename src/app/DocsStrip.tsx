/**
 * "Documents included in the file" — 2 rows × 7 thumbnails, rendered below
 * the expanded pill for both Q3 and BI flows. Matches Figma node 1-1779 spec.
 *
 * Per Figma: thumbnail 217.102 × 241.169, strip starts at top 1143.74 (just
 * below the pill bottom edge in the 1200-tall reference frame).
 */

// Reuse the BI doc thumbnail asset URLs (the 14 source documents).
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

const THUMBS = [
  imgRect12, imgRect15, imgRect20, imgRect13, imgRect21, imgRect14, imgRect18,
  imgRect17, imgRect22, imgRect19, imgRect23, imgRect12, imgRect13, imgRect15,
];

const ITEM_W = 217.102;
const ITEM_H = 241.169;
const GAP = 28;
const COLS = 7;
const STRIP_W = COLS * ITEM_W + (COLS - 1) * GAP; // 7*217.102 + 6*28 = 1687.714

type Props = {
  /** Fade-in/out controlled by parent — typically tied to phase === 'content'. */
  visible: boolean;
};

export default function DocsStrip({ visible }: Props) {
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        // Pill is centered vertically in the 2080-tall inner, so its bottom
        // edge is at calc(50% + 495px). Strip starts immediately below.
        top: 'calc(50% + 495px)',
        transform: 'translateX(-50%)',
        width: `${STRIP_W}px`,
        opacity: visible ? 1 : 0,
        transition: 'opacity 800ms ease-in-out',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {/* Section label */}
      <p
        style={{
          fontFamily: "'Google_Sans', sans-serif",
          fontSize: '14px',
          color: 'black',
          opacity: 0.5,
          textAlign: 'center',
          margin: '0 0 14px',
          lineHeight: 1.5,
        }}
      >
        Documents included in the file
      </p>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${COLS}, ${ITEM_W}px)`,
          gridAutoRows: `${ITEM_H}px`,
          gap: `${GAP}px`,
        }}
      >
        {THUMBS.map((src, i) => (
          <div
            key={i}
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              opacity: 0.6,
              background: '#fff',
            }}
          >
            <img
              src={src}
              alt=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
