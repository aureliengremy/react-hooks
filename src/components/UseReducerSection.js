import React, { useState } from 'react'
import Count from './Count'

const UseReducerSection = () => {

    const [show, setShow] = useState(false)

    const handleClick = () => {
      const useReducerHook = document.getElementById('useReducerHook')
      if(show) {
        useReducerHook.classList.remove('show')
        useReducerHook.classList.add('hide')
        setShow(false)
      } else {
        useReducerHook.classList.add('show')
        useReducerHook.classList.remove('hide')
        setShow(true)
      }
    }

  return (
    <div>
        <button className="btn btn-warning m-3"onClick={handleClick}>Show/Hide UseReducer</button>
        <div id="useReducerHook" className="row hide">
            <Count/>
            <hr />
            
        </div>
    </div>
  )
}

export default UseReducerSection