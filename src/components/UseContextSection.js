import React, { Component }from 'react'
import { UserContext, ColorContext } from './contextExemple/MyContext'
import Profile from './contextExemple/Profile'

class UseContextSection extends Component {

    state = {
        user: {
          name: 'Lisa',
          age: 8
        }
    }

    render() {
        return (
          <div>
            <UserContext.Provider value={this.state.user}>
                <ColorContext.Provider value='blue'>
                    {/* <Profile info={this.state.user}/> */}
                    <Profile/>
                </ColorContext.Provider>
            </UserContext.Provider>
          </div>
        )
    }
}

export default UseContextSection