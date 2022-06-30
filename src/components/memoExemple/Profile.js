import React from 'react'

const Profile = ({count, profile}) => {

    const {name, username, email} = profile

    // console.log('Je suis dans Profile')

  return (
    <div>
        <ul className="list-group">
            <li className="list-group-item"><p className="h2">User ID: {count} </p></li>
            <li className="list-group-item"><strong>Nom: </strong>{name}</li>
            <li className="list-group-item"><strong>Pseudo: </strong>{username}</li>
            <li className="list-group-item"><strong>Email: </strong>{email}</li>
        </ul>
    </div>
  )
}

export default React.memo(Profile)