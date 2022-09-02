import { useEffect, useState } from "react";
import './mode.css' 

const Mode = (props)=>{
    return (
    <div className="gameMode">
        <h3>Mode</h3>
        <input type="radio" value="easy" name="mode" checked={props.currentMode===5} onChange={props.handleModeChange}/>
        <label htmlFor="easy">Easy</label>
        <input type="radio" value="medium" name="mode" checked={props.currentMode===8} onChange={props.handleModeChange}/>
        <label htmlFor="medium">Medium</label>
        <input type="radio" value="hard" name="mode" checked={props.currentMode===12} onChange={props.handleModeChange}/>
        <label htmlFor="hard">Hard</label>
    </div>
    )
}
export default Mode;