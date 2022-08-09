import './App.css';
import Cards from './components/score-card/cards/cards';
import Scorecard from "./components/score-card/ScoreCard";
import { useEffect, useState} from 'react';
function App() {
  const [memory,setMemory] = useState([]);
  const [score,setScore] = useState(0);
    const [bestScore,setBestScore] = useState(0);
    
    const handleScore = ()=>{
        setScore(score+1);
    }

    const handleBestScore = ()=>{
        setBestScore(score);
    }
  
  const handleChange = (value)=>{
      // if value does not exists in array
      if(!memory.includes(value)){
          setMemory([...memory,value]);
          handleScore();
      }else if(memory.includes(value)){
          // if value exists in array
          setMemory([]);
          handleBestScore(score);
          setScore(0);
      }
  }
    useEffect(()=>{
      if(memory.length===5){
          alert("You Won");
          handleBestScore();
          setScore(0);
      }
  },[memory])

  return (
    <div>
      <Scorecard score={score}  bestScore={bestScore}/>
      <Cards handleChange={handleChange} memory={memory} score={score} handleBestScore={handleBestScore} handleScore={handleScore}/>
    </div>
  );
}

export default App;
