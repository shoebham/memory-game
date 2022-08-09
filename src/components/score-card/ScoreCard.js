import React from 'react';

const Scorecard=(props)=>{
    const {score,bestScore} = props;
    return(
        <div>
            <h1>Score:{score}</h1>
            <h1>Best Score:{bestScore}</h1>
        </div>
    )
}
export default Scorecard;