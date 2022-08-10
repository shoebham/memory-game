import { useEffect, useState } from "react";


const Mode = (props)=>{
    return (
    <div>
        <h1>Mode</h1>
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