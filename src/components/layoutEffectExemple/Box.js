import React, { useState, useLayoutEffect, useEffect, useRef } from 'react'
import Content from './Content'

const Box = () => {

    const [height, setHeight] = useState(100)

    const boxRef = useRef(null)
    const timeRef = useRef(0)

    useEffect(() => {
        // console.log(boxRef.current.getBoundingClientRect())
        if(boxRef.current.offsetHeight < 150) {
            setHeight(height + 100)
            // console.log(`Attente useEffect: ${performance.now() - timeRef.current}`)
        }

    }, [])

    // UseLayoutEffect is execute before the render of this component
    useLayoutEffect(() => {
        // console.log(boxRef.current.getBoundingClientRect())
        if(boxRef.current.offsetHeight < 150) {
            setHeight(height + 100)
            // console.log(`Attente useLayoutEffect: ${performance.now() - timeRef.current}`)
        }

    }, [])

    timeRef.current = performance.now()

    const boxStyle = { 
        width: '400px', 
        height: `${height}px`,
        margin: '0 auto',
        background: height > 100 ? 'lightgrey' : 'lightblue'
    }

    // console.log('render')

    
  return (
    <div ref={boxRef} style={boxStyle}>
        {`Height: ${height}px`}
        <Content/>
    </div>
  )
}

export default Box