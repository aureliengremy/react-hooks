import React, { useContext } from 'react';
import ProfileData from './ProfileData';
import icone from './icon-user.png'
import { UserContext } from './MyContext'

const Profile = () => {

    const user = useContext(UserContext)


    // const data = this.context;
    // console.log(data)
    return (
        <div className="container">
            {/* <h1>{this.props.info.name}</h1> */}
            <h4>{user.name}</h4>
            <img src={icone} className="img-thumbnail mb-3" alt="icone profile" />
            {/* <ProfileData data={this.props.info}/> */}
            <ProfileData/>
        </div>
    );
    
}
// Profile.contextType = MyContext;

export default Profile;