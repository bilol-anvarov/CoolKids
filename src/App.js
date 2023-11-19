import './App.css';
import './componets/main-section/main-section.css'
import './componets/section-two/section-two.css';
import './componets/section-three/section-three.css'
import MainSection from './componets/main-section/main-section';
import SectionTwo from './componets/section-two/section-two';
import SectionThree from './componets/section-three/section-three';
function App() {
  return (
    <div>
      <MainSection />
      <SectionTwo />
      <SectionThree/>
    </div>
  );
}


export default App;