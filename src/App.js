import './App.css';
import Cards from './components/score-card/cards/cards';
import Scorecard from "./components/score-card/ScoreCard";
import {useState} from 'react';
function App() {
  const [memory,setMemory] = useState([]);
  return (
    <div>
      <Scorecard/>
      <Cards/>
    </div>
  );
}

export default App;
