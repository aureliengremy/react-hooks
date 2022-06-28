import React, { useState } from 'react'
import ClassState from './stateExemple/ClassState';
import FunctionState from './stateExemple/FunctionState';
import Todo from './Todo/Todo';

const UseStateSection = () => {

    const [show, setShow] = useState(false)

    
    const handleClick = () => {
      const useStateHook = document.getElementById('useStateHook')
      if(show) {
        useStateHook.classList.remove('show')
        useStateHook.classList.add('hide')
        setShow(false)
      } else {
        useStateHook.classList.add('show')
        useStateHook.classList.remove('hide')
        setShow(true)
      }
    }
  return (
    <div>
      <button className="btn btn-warning m-3"onClick={handleClick}>Show/Hide UseState</button>
      <div id="useStateHook" className="row hide">
        <h2 className="text-center">useState Hooks</h2>
        <ClassState/>
        <hr/>
        <FunctionState/>
        <hr />
        <Todo/>
      </div>
    </div>
  )
}

export default UseStateSection