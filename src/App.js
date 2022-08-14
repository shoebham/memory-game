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
      // if value does not exists in array
      if(!memory.includes(value)){
          console.log("Memory",memory);
          setMemory((memory)=>[...memory,value]);
          handleScore();
      }else if(memory.includes(value)){
          // if value exists in array
          setMemory([]);
          handleBestScore(score);
          setScore(0);
      }
  }
    useEffect(()=>{
      if(memory.length===currentMode){
          alert("You Won");
          handleBestScore();
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
