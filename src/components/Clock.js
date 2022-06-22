import React, {useEffect, useState} from "react";

export default function Clock(){

    const [isClock, setIsClock] = useState(false)
    const [showClock, setShowClock] = useState(false)
    const [time, setTime] = useState(0)


    function handleStart(event){
        setIsClock(true)
        setShowClock(true)

    }
    function handleStop(event){
        setIsClock(false)
        setShowClock(false)
        setTime(0)
        
        
    }
    function handlePause(event){
        setIsClock(false)
    }

    useEffect(
        ()=>{
            if (showClock && isClock){
                setTimeout(()=>setTime(time+1),1000,time); 
            }
            else if (!showClock && !isClock) {setTime(0)}
        }, [isClock, time]
    )


    // useEffect(
    //      ()=>{
    //         if (isClock){
    //         setTimeout(()=>setTime(time+1), 1000)} 
    //      }   
    //     ,[time, isClock])

        



    return(
        <div>
            <div>{showClock? time : null}</div>
            <button
            onClick={!isClock ? handleStart : null}
            >Start</button>
            <button
            onClick={isClock ? handleStop : null}
            >Stop</button>
            {isClock?<button onClick={showClock ? handlePause : null}>Pause</button> : <></>}
           

        </div>
    )
}