import React, { useState } from 'react'
import Count from './reducerExemple/Count'
import MultiCount from './reducerExemple/MultiCount';

const UseReducerSection = ({handleShow}) => {

    const [show, setShow] = useState(false)

  return (
    <div>
        <button className="btn btn-warning m-3" onClick={() => handleShow(show, 'useReducerHook', setShow)}>Show/Hide useReducerHook</button>
        <div id="useReducerHook" className="row hide">
            <Count/>
            <hr />
            <p>with Object</p>
            <MultiCount/>
        </div>
    </div>
  )
}

export default UseReducerSection