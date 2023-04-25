import React, {useState} from "react";
import "./EightBall.css"

const EightBall = ({answers}) => {
    const [color, setColor] = useState("black");
    const [msg, setMsg] = useState("Think of a Question");
    const changeBallInfo = (data)=>{
        let idx = Math.floor(Math.random()*data.length) 
        setMsg(data[idx].msg)
        setColor(data[idx].color)
    }
    return (
        <div className='EightBall' onClick={()=>changeBallInfo(answers)} style={{backgroundColor: color}}>
           <p>{msg}</p> 
        </div>
    );
};

export default EightBall;