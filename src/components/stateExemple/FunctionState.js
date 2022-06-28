import React, { useState } from 'react'

const FunctionState = () => {

    const [counter, setCounter] = useState(0)
    // console.log(counter)

    // const addOne = () => {
    //     setCounter(counter + 1)
    // }
  return (
    <div>
        <p>Function State : {counter}</p>
        {/* <button onClick={addOne}>State dans Function</button> */}
        <button onClick={() => setCounter(counter => counter + 1)}>State dans Function</button>
    </div>
  )
}

export default FunctionState