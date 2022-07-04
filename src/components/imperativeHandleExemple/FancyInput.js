import React, { useRef, useState } from 'react'

const FancyInput = React.forwardRef((props, ref) => {

    const [count, setCount] = useState(0)
    
    const inputRef = useRef()
    const textRef = useRef()
    // console.log(inputRef.current)

    React.useImperativeHandle(ref, () => ({
        focus: (val) => {
        //    console.log(val)
            if(count === 4) {
                const colors = ['red', 'blue', 'orange', 'green', 'pink', 'black', 'yellow'];
                
                const style = `4ps solid ${colors[val]}`;
                // console.log(style)
                
                inputRef.current.style.border = style;
                textRef.current.innerText = `Today is ${colors[val]}`
            }
        },
        countMax: () => {
            if(count < 5) {
                setCount(count + 1)
            }
        }
    }))

  return (
    <div>
        <h3>{count}</h3>
        <input  type="text" ref={inputRef} />
        <p ref={textRef}></p>
    </div>
  )
})

export default FancyInput