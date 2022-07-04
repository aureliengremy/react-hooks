import React, { useState } from 'react'
import Box from './layoutEffectExemple/Box'
// import Layout from './layoutEffectExemple/Layout'

const UseLayoutEffect = ({handleShow}) => {

    const [show, setShow] = useState(true)

  return (
    <div>
        <button className="btn btn-warning m-3" onClick={() => handleShow(show, 'useLayoutEffectHook', setShow)}>Show/Hide useLayoutEffectHook</button>
        <div id="useLayoutEffectHook" className=" hide">
            <h2>UseLayoutEffect</h2>
            {/* <Layout/> */}
            <Box/>
        </div>
    </div>
  )
}

export default UseLayoutEffect