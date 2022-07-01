import React, { useRef, useState } from 'react'

const Input = () => {

    const usernameRef = useRef(null)
    const [name, setName] = useState(null)

    // console.log(usernameRef)

    const handleSubmit = () => {
        // usernameRef.current.focus()
        console.log(usernameRef.current.value)
        setName(usernameRef.current.value)
    }

  return (
    <div>
        <input ref={usernameRef} type="text" />
        <button onClick={handleSubmit}>Focus</button>
        <p>{name}</p>
    </div>
  )
}

export default Input