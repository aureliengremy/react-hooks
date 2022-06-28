import React, { useState } from 'react'
import ClassDisplayKey from './ClassDisplayKey'
import FunctionDisplayKey from './FunctionDisplayKey'

function Container() {

    const [showClass, setShowClass] = useState(false)
    const [showFunction, setShowFunction] = useState(false)

    const DisplayBtnClass = showClass ? 'Cacher' : 'Afficher'
    const DisplayBtnFunction = showFunction ? 'Cacher' : 'Afficher'

  return (
    <div className="d-flex flex-column w-auto m-auto my-3">
        <button className="btn btn-primary m-3" onClick={() => setShowClass(!showClass)}>{DisplayBtnClass} Class</button>
        {
            showClass && <ClassDisplayKey/>
        }
         <button className="btn btn-primary m-3" onClick={() => setShowFunction(!showFunction)}>{DisplayBtnFunction} Function</button>
        {
            showFunction && <FunctionDisplayKey/>
        }
    </div>
  )
}

export default Container