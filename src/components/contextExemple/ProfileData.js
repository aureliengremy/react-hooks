import React, { useContext } from 'react'
import ContentData from './ContentData'
import {UserContext} from './MyContext'

const ProfileData = () => {

    const user = useContext(UserContext)

    const collapse = () => {
        const collapseElement = document.getElementById("collapseExemple")
        collapseElement.classList.toggle('show')
    }

  return (
   <div>
        <a onClick={collapse} href="#collapseExemple" data-toggle='collapse' className="btn btn-primary">
            Information sur {user.name} ?
        </a>
        <ContentData/>
   </div>
  )
}

export default ProfileData