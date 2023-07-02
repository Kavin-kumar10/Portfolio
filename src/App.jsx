import React,{useState,useRef} from 'react';
import './App.scss';
import Landpage from './Components/Landpage';
import About from './Components/About';
import Skills from './Components/Skills';
import Project from "./Components/Project"
import Loader from './Components/Loader';
import TimeLine from "./Components/TimeLine"


function App() {
  const [loaded,setLoaded] = useState(false);
  setTimeout(()=>{
    setLoaded(true);
  },5000)
  return (
    <div className="App">
        {(loaded)?
        <>
            <Landpage/>
            <About/>
            <Skills/>
            <Project/>
            <TimeLine/>
        </>:
        <Loader/>}
      </div>

  );
}

export default App;
