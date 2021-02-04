import React, {useRef, useState} from 'react';
import {red} from "@material-ui/core/colors";



const Stopwatch = () => {
    const [timer, setTimer] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const countRef= useRef(null)


    // Handles beginning of stopwatch
    const handleStart = () => {
        setIsActive(true)
        setIsPaused(true)
        countRef.current= setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)

    }
    // handles pausing stopwatch
    const handlePause = () => {
        clearInterval(countRef.current)
        setIsPaused(false)


    }
    // resumes stopwatch
    const handleResume = () => {
        setIsPaused(true)
        countRef.current= setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)

    }
    // resets stopwatch
    const handleReset = () => {
        clearInterval(countRef.current)
        setIsActive(false)
        setIsPaused(false)
        setTimer(0)

    }

    const formatTime = () => {
        const getSeconds= `0${(timer % 60) }`.slice(-2)
        const minutes= `${(Math.floor(timer / 60))}`
        const getMinutes= `0${(timer % 60)}`.slice(-2)
        const getHours= `${(Math.floor(timer / 3600))}`

        return (
            `${getHours} : ${getMinutes} : ${getSeconds}`
        )
    }

    return (
        <div className='buttonDiv'>
            <h1> Stopwatch</h1>
            <p> {timer}</p>

            <button className='btn' onClick={handleStart}> Start </button>
            <button className='btn' onClick={handlePause}> Pause </button>
            <button className='btn' onClick={handleResume}> Resume </button>
            <button className='btn' onClick={handleReset} disabled={!isActive}> Reset </button>

        </div>
    )
}

export default Stopwatch
