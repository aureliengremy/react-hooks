import React, { useState } from 'react'
import ClassState from './stateExemple/ClassState';
import FunctionState from './stateExemple/FunctionState';
import Todo from './Todo/Todo';

const UseStateSection = ({handleShow}) => {

    const [show, setShow] = useState(false)

  return (
    <div>
      <button className="btn btn-warning m-3" onClick={() => handleShow(show, 'useStateHook', setShow)}>Show/Hide useStateHook</button>
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