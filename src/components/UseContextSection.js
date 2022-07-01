import React, { useState } from 'react'
import { UserContext, ColorContext } from './contextExemple/MyContext'
import Profile from './contextExemple/Profile'

const UseContextSection = ({handleShow}) => {

  const [state, setState] = useState({
    user: {
      name: 'Lisa',
      age: 8
    }
  })
  // to remove the warning message
  // setState()

    const [show, setShow] = useState(false)

  return (
    <div>
      <button className="btn btn-warning m-3" onClick={() => handleShow(show, 'useContextHook', setShow)}>Show/Hide UseContext</button>
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