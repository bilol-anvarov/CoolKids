import './App.css';

import './componets/section-two/section-two.css';


import MainSection from './componets/main-section/main-section';
import SectionTwo from './componets/section-two/section-two';
import SectionThree from './componets/section-three/section-three';
import SectionFour from './componets/section-four/section-four';
import SectionFooter from './componets/footer/footer';
function App() {
  return (
    <div>
      <MainSection />
      <SectionTwo />
      <SectionThree/>
      <SectionFour/>
      <SectionFooter />
    </div>
  );
}


export default App;