import React, { useRef, useState } from 'react'
import FancyInput from './imperativeHandleExemple/FancyInput'

const UseImperativeHandleSection = ({handleShow}) => {

    const [show, setShow] = useState(false)

    const date = new Date()

    const fancyInputRef = useRef()

    const focusInput = (val) => {
        console.log(fancyInputRef.current)
        fancyInputRef.current.focus(val)
        fancyInputRef.current.countMax()

        console.log(fancyInputRef.current)
    }

  return (
    <div>
        <button className="btn btn-warning m-3" onClick={() => handleShow(show, 'useImperativeHandleHook', setShow)}>Show/Hide useImperativeHandleHook</button>
        <div id="useImperativeHandleHook" className="hide">
            <FancyInput name="fancy" ref={fancyInputRef}/>
            <button onClick={() => focusInput(date.getDate())}>Cliquer</button>
        </div>
    </div>
  )
}

export default UseImperativeHandleSection