import React, { useContext } from 'react'
import { UserContext, ColorContext } from './MyContext'

const ContentData = () => {
   
    const user = useContext(UserContext)
    const color = useContext(ColorContext)

  return (
    // <UserContext.Consumer>
    //     {
    //         user => {
    //             return(
    //                 <ColorContext.Consumer>
    //                 {
    //                     color => {
    //                         return (
    //                             <div className="collapse mt-3" id="collapseExemple">
    //                                 <div className="card card-body">
    //                                     <ul className="list-group list-group-flush">
    //                                         <li className="list-group-item"><strong style={{color: color}}>Nom : </strong>{user.name}</li>
    //                                         <li className="list-group-item"><strong style={{color: color}}>Age : </strong>{user.age}</li>
    //                                     </ul>
    //                                 </div>
    //                             </div> 
    //                         )
    //                     }
    //                 }
    //                 </ColorContext.Consumer>
    //             )
    //         }
    //     }
    // </UserContext.Consumer>

    <div className="collapse mt-3" id="collapseExemple">
        <div className="card card-body">
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong style={{color :color}}>Nom : </strong>{user.name}</li>
                <li className="list-group-item"><strong style={{color :color}}>Age : </strong>{user.age}</li>
            </ul>
        </div>
    </div>
  )
}

export default ContentData