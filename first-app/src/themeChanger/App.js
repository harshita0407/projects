import { useState } from 'react';
import './App.css';
// import About from './Component/About';
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
function App() {

const[mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#979797';
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
   <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <TextForm heading="Enter the text to analyze" mode={mode}/>
    {/* <About/> */}
   </>
  );
}

export default App;
