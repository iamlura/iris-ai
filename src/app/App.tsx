import { useState, useEffect } from 'react';
import Frame2055246620 from '../imports/Frame2055246620';
import Frame2055246625 from '../imports/Frame2055246625';
import FrameBI from '../imports/FrameBI';

export default function App() {
  const [showQ3, setShowQ3] = useState(false);
  const [showBI, setShowBI] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      const sx = window.innerWidth / 1920;
      const sy = window.innerHeight / 1200;
      setScale(Math.min(sx, sy));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const handleReset = () => {
    setShowQ3(false);
    setShowBI(false);
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: '#f1f1f1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: '1920px',
          height: '1200px',
          position: 'relative',
          transformOrigin: 'center center',
          transform: `scale(${scale})`,
        }}
      >
        {/* Landing */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: showQ3 || showBI ? 0 : 1, pointerEvents: showQ3 || showBI ? 'none' : 'auto' }}
        >
          <Frame2055246620
            onNavigate={() => setShowQ3(true)}
            onNavigateBi={() => setShowBI(true)}
          />
        </div>

        {/* Q3 Summary / Calendar screen */}
        <Frame2055246625 visible={showQ3} onReset={handleReset} />

        {/* Collection of Documents / BI / Email screen */}
        <FrameBI visible={showBI} onReset={handleReset} />
      </div>
    </div>
  );
}
