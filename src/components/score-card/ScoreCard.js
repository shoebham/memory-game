import React, { useEffect, useState } from 'react';
import Cards from './cards/cards';

const Scorecard=()=>{
    const [score,setScore] = useState(0);
    const [bestScore,setBestScore] = useState(0);
    

    const handleScore = ()=>{
        setScore(score+1);
    }

    const handleBestScore = (score)=>{
        setBestScore(score);
    }
    useEffect(()=>{
        console.log(score);
    }
    ,[score]);
    return(
        <div>
            <h1>Score:{score}</h1>
            <h1>Best Score:{bestScore}</h1>
            <button onClick={handleScore}>+</button>
            <button onClick={()=>handleBestScore(score)}>Best Score</button>
        </div>
    )
}
export default Scorecard;