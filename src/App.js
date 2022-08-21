import './App.css';
import Cards from './components/cards/cards';
import Scorecard from "./components/score-card/ScoreCard";
import Mode from "./components/mode"
import { useEffect, useState} from 'react';
function App() {
  const [memory,setMemory] = useState([]);
  const [score,setScore] = useState(0);
  const [bestScore,setBestScore] = useState(0);
  const [currentMode,setCurrentMode] = useState(5);
    
    const handleScore = ()=>{
        setScore((score)=>score+1);
    }
    const handleBestScore = ()=>{
        setBestScore(score);
    }
  
  const handleChange = (value)=>{
      setMemory((memory)=>[...memory,value]);
  }
  useEffect(()=>{
    // check for duplicates in memory
    let duplicates = Array.from(new Set(memory));
    if(duplicates.length !== memory.length){
        setMemory([]);
        handleBestScore();
        setScore(0);
    }else if(memory.length>0){
        handleScore();
    }
    if(memory.length===currentMode){
      alert("You Won");
      setBestScore(currentMode);
      setScore(0);
  }
  },[memory])

  const handleModeChange  = (e)=>{
      if(e.target.value==="easy")setCurrentMode(5);
      else if(e.target.value==="medium")setCurrentMode(8);
      else if(e.target.value==="hard")setCurrentMode(12);
  }

  return (
    <div>
      <Scorecard score={score}  bestScore={bestScore}/>
      <Mode handleModeChange={handleModeChange} currentMode={currentMode}/>
      <Cards mode={currentMode} handleChange={handleChange} memory={memory} score={score} handleBestScore={handleBestScore} handleScore={handleScore}/>
    </div>
  );
}

export default App;
