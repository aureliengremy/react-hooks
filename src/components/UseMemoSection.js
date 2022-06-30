import React, { useState, useEffect, useMemo } from 'react'
import Profile from './memoExemple/Profile'
import axios from 'axios'

const UseMemoSection = ({handleShow}) => {

    const [count, setCount] = useState(1)
    const [profile, setProfile] = useState({})
    const [dark, setDark] = useState(false)
    const [btnStatus, setBtnStatus] = useState(false)

    useEffect(() =>{
        axios
        .get(`https://jsonplaceholder.typicode.com/users/${count}`)
        .then((response) => {
            setProfile(response.data)
        })
        .catch((error) => {
            // handle error
            console.log(error);
        })
    },[count])
    
    // console.log(profile)

    const goDark = () => {
        setDark(!dark)
        if(!dark){
            document.body.classList.add("bg-secondary")
        } else {
            document.body.classList.remove("bg-secondary")
        }
    }

    const btnClassTheme = dark ? "btn-light" : "btn-dark"
    const btnTextTheme = dark ? "Mode: Clair" : "Mode: Sombre"
    const disabledBtn = btnStatus ? "disabled" : ""

    const memorizedValue = useMemo(() => {
        // console.log('je suis dans isOverTen')
        if(count >= 10 ) {
            setBtnStatus(true)
            return count >= 10
        } else {
            return count >= 10
        }
    }, [count])

    const [show, setShow] = useState(false)

  return (
    <div className="">
        <button className="btn btn-warning m-3" onClick={() => handleShow(show, 'useMemoSection', setShow)}>Show/Hide useReducerHook</button>
        <div id="useMemoSection" className="row hide">
            <h1 className="text-center">useMemo()</h1>
            {memorizedValue && <div className="alert alert-danger" role="alert">Stop!</div>}
            
            <div className="d-flex justify-content-between">

            <button className={`btn btn-info mb-3 ${disabledBtn}`} onClick={() => setCount(count + 1)}>Increment {count}</button>
            <button className={`btn ${btnClassTheme} mb-3 float-right`} onClick={goDark}>{btnTextTheme}</button>
            </div>

            <Profile count={count} profile={profile}/>
        </div>
    </div>
  )
}

export default UseMemoSection