import { useState } from 'react';
import Frame2055246620 from '../imports/Frame2055246620';
import Frame2055246625 from '../imports/Frame2055246625';

export default function App() {
  const [showQ3, setShowQ3] = useState(false);

  return (
    <div className="w-[1920px] h-[1200px] bg-[#F2F4F9] mx-auto relative overflow-hidden">
      <Frame2055246620 onNavigate={() => setShowQ3(true)} />
      <Frame2055246625 visible={showQ3} />
    </div>
  );
}
