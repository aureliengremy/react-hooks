import React, { useState } from 'react'
import { UserContext, ColorContext } from './contextExemple/MyContext'
import Profile from './contextExemple/Profile'

const UseContextSection = () => {

  const [state, setState] = useState({
    user: {
      name: 'Lisa',
      age: 8
    }
  })

    const [show, setShow] = useState(false)

    const handleClick = () => {
      const useContextHook = document.getElementById('useContextHook')
      if(show) {
        useContextHook.classList.remove('show')
        useContextHook.classList.add('hide')
        setShow(false)
      } else {
        useContextHook.classList.add('show')
        useContextHook.classList.remove('hide')
        setShow(true)
      }
    }

  return (
    <div>
      <button className="btn btn-warning m-3"onClick={handleClick}>Show/Hide UseContext</button>
      <div id="useContextHook" className="row hide">
        <UserContext.Provider value={state.user}>
            <ColorContext.Provider value='blue'>
                {/* <Profile info={this.state.user}/> */}
                <Profile/>
            </ColorContext.Provider>
        </UserContext.Provider>
      </div>
    </div>
  )
}

export default UseContextSection