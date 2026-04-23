import { useState } from 'react';
import Frame2055246620 from '../imports/Frame2055246620';
import Frame2055246625 from '../imports/Frame2055246625';
import FrameBI from '../imports/FrameBI';

export default function App() {
  const [showQ3, setShowQ3] = useState(false);
  const [showBI, setShowBI] = useState(false);

  return (
    <div className="w-[1920px] h-[1200px] bg-[#F2F4F9] mx-auto relative overflow-hidden">
      {/* Landing — hidden once any sub-screen is active */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: showQ3 || showBI ? 0 : 1, pointerEvents: showQ3 || showBI ? 'none' : 'auto' }}
      >
        <Frame2055246620
          onNavigate={() => setShowQ3(true)}
          onNavigateBi={() => setShowBI(true)}
        />
      </div>

      {/* Q3 Summary screen */}
      <Frame2055246625 visible={showQ3} />

      {/* Collection of Documents / Create BI screen */}
      <FrameBI visible={showBI} />
    </div>
  );
}
