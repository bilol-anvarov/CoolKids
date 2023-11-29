import './App.css';

import './componets/section-two/section-two.css';


import MainSection from './componets/main-section/main-section';
import SectionTwo from './componets/section-two/section-two';
import SectionThree from './componets/section-three/section-three';
import SectionFour from './componets/section-four/section-four';
function App() {
  return (
    <div>
      <MainSection />
      <SectionTwo />
      <SectionThree/>
      <SectionFour/>
    </div>
  );
}


export default App;