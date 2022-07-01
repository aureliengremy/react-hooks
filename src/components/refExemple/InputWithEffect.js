import React, { useEffect, useRef, useState } from 'react'

const InputWithEffect = () => {

    const [count, setCount] = useState(0)

    const setIntervalRef = useRef()
    const setHandleIntervalRef = useRef()
    

    useEffect(() => {
        setIntervalRef.current = setInterval(() => {
            setCount(prevState => {
                return prevState + 1
            })
        }, 1000)
    },[])

    
    const handlePlay = () => {
        setHandleIntervalRef.current = setInterval(() => {
            setCount(prevState => {
                return prevState + 1
            })
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(setIntervalRef.current) 
        clearInterval(setHandleIntervalRef.current) 
    }

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default InputWithEffect