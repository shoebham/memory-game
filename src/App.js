import './App.css';
import Cards from './components/score-card/cards/cards';
import Scorecard from "./components/score-card/ScoreCard";
import {memo, useEffect, useState} from 'react';
function App() {
  const [memory,setMemory] = useState([]);
  const handleChange = (value)=>{
      // if value does not exists in array
      if(!memory.includes(value)){
          setMemory([...memory,value]);
      }
  }
    useEffect(()=>{
      console.log("memory size",memory.length);
      if(memory.length===5){
          alert("you won");
      }
  },[memory])

  return (
    <div>
      <Scorecard/>
      <Cards handleChange={handleChange} memory={memory}/>
    </div>
  );
}

export default App;
