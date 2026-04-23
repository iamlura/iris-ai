import { useState, useEffect } from 'react';
import Frame2055246620 from '../imports/Frame2055246620';
import Frame2055246625 from '../imports/Frame2055246625';
import FrameBI from '../imports/FrameBI';

// Mic icon SVG inline (matches the landing screen Group1 mic)
function MicIcon() {
  return (
    <div style={{ height: '26.934px', width: '13.895px', position: 'relative', flexShrink: 0 }}>
      <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 15.395 27.6821">
        <g>
          <rect fill="black" height="16.937" rx="4.36072" width="8.72144" x="3.33629" />
          <path d="M1.5 13.5C1.5 13.5 1.5 20.5 7.697 20.5C13.894 20.5 13.894 13.5 13.894 13.5" stroke="black" strokeLinecap="round" strokeWidth="1.5" />
          <path d="M7.69702 20.3245V26.9323" stroke="black" strokeWidth="1.5" />
          <path d="M4.5 26.9323H10.894" stroke="black" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

export default function App() {
  const [showQ3, setShowQ3] = useState(false);
  const [showBI, setShowBI] = useState(false);
  const [scale, setScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [pillShrunk, setPillShrunk] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

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

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleReset = () => {
    // Step 1: show the pill overlay at full card size
    setResetting(true);
    setPillShrunk(false);
    setTextVisible(false);

    // Step 2: after 100ms, trigger the shrink (1000ms duration)
    setTimeout(() => setPillShrunk(true), 100);

    // Step 3: after shrink completes (100 + 1000ms), fade in text (800ms delay, 1000ms duration)
    setTimeout(() => setTextVisible(true), 1100);

    // Step 4: after text fully fades in (100 + 1000 + 800 + 1000 = ~2900ms), reset to landing
    setTimeout(() => {
      setShowQ3(false);
      setShowBI(false);
      setResetting(false);
      setPillShrunk(false);
      setTextVisible(false);
    }, 2900);
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: '#F4F4F9',
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
        {/* Fullscreen toggle — bottom-left corner, subtle */}
        <button
          onClick={toggleFullscreen}
          title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          style={{
            position: 'absolute', bottom: '20px', left: '20px',
            zIndex: 100, background: 'rgba(0,0,0,0.25)', border: 'none',
            color: 'white', borderRadius: '8px', padding: '6px 10px',
            cursor: 'pointer', fontSize: '18px', lineHeight: 1,
            opacity: 0.5, transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.5')}
        >
          {isFullscreen ? '✕' : '⤢'}
        </button>

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

        {/* End-session shrink animation overlay */}
        {resetting && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: '#F4F4F9',
              zIndex: 50,
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: '50%',
                // Start: card center top = 50% + 49px. Pill center top = 50%. Animate between them.
                top: pillShrunk ? '50%' : 'calc(50% + 49px)',
                transform: 'translate(-50%, -50%)',
                // Start: card size 1817×990. End: pill size 399.61×94.42
                width: pillShrunk ? '399.61px' : '1817px',
                height: pillShrunk ? '94.42px' : '990px',
                borderRadius: '60px',
                background: 'rgba(0,0,0,0)',
                boxShadow: '47px 70px 100px 0px rgba(0,0,0,0.05)',
                transition: pillShrunk
                  ? 'width 1000ms ease-in-out, height 1000ms ease-in-out, top 1000ms ease-in-out, border-radius 1000ms ease-in-out'
                  : 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '22px',
                overflow: 'hidden',
              }}
            >
              {/* |Ask Anything content — fades in after shrink */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '22px',
                  opacity: textVisible ? 1 : 0,
                  transition: textVisible ? 'opacity 1000ms ease-in 800ms' : 'none',
                }}
              >
                <MicIcon />
                <span style={{
                  fontFamily: "'Google_Sans', sans-serif",
                  fontSize: '24.951px',
                  color: 'black',
                  whiteSpace: 'nowrap',
                }}>|Ask Anything</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
