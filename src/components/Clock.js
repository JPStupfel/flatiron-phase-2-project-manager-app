import React, {useEffect, useState} from "react";

export default function Clock(){

    const [time, setTime] = useState(0)
    const [showClock, setShowClock] = useState(false)
    const [isRunning, setIsRunning] = useState(false)

    const pauseButton = <button onClick={()=>{setIsRunning(false)}}>Pause</button>

    function count(){
       setTime((prev)=>prev+1)
    }



    useEffect(
        ()=>{ 
            if (isRunning)
            {setTimeout(count,1000);
            return clearTimeout()}
            else if (!showClock){setTime(0)}

    
    }

        ,[time, isRunning]
    )



    return(
        <div>
            <div>{showClock ? time : <></>}</div>
            <button onClick={()=>{setShowClock(true); setIsRunning(true)}}>Start</button>

            <button onClick={()=>{setIsRunning(false); setShowClock(false); setTime(0)}}>Stop</button>

            {showClock ? pauseButton : <></>}

          
        </div>
    )
}

/*
isRunning
showClock

*/