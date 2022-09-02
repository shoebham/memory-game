import React from 'react';
import './ScoreCard.css';

const Scorecard=(props)=>{
    const {score,bestScore} = props;
    return(
        <div className='scorecard'>
            <h1 className='score'>Score: {score}</h1>
            <h1 className='bestScore'>Best Score: {bestScore}</h1>
        </div>
    )
}
export default Scorecard;