import React,{useRef} from 'react';
import './App.scss';
import Landpage from './Components/Landpage';
import About from './Components/About';
import Skills from './Components/Skills';
import Project from "./Components/Project"
// import TimeLine from "./Components/TimeLine"


function App() {
  return (
    <div className="App">
        <Landpage/>
        <About/>
        <Skills/>
        {/* <Project/> */}
        {/* <TimeLine/> */}
    </div>
  );
}

export default App;
