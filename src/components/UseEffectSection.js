import React, { useState } from 'react'
import ClassCount from './effectExemple/ClassCount';
import FunctionCount from './effectExemple/FunctionCount';
import FunctionCountWithCondition from './effectExemple/FunctionCountWithCondition';
import Container from './effectExemple/Container';

const UseEffectSection = () => {
    const [show, setShow] = useState(false)

    const handleClick = () => {
      const useStateHook = document.getElementById('useEffectHook')
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
        <button className="btn btn-warning m-3"onClick={handleClick}>Show/Hide UseEffect</button>
        
        <div id="useEffectHook" className="row hide">
          <div className="row">
            <ClassCount/>
            <hr/>
            <div className="d-flex justify-content-around my-3 mx-auto">
              <FunctionCount/>
              <div className="">
                <h3>With Condition</h3>
                <FunctionCountWithCondition />
              </div>
            </div>
          </div>
            <hr/>
          <div className="row">
            <h3>useEffect with Destroy</h3>
            <Container/>
          </div>
        </div>
    </div>
  )
}

export default UseEffectSection