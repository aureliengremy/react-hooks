import React, { useState } from 'react'
import Input from './refExemple/Input'
import InputWithEffect from './refExemple/InputWithEffect'

const UseRefSection = ({handleShow}) => {

  const [show, setShow] = useState(false)

  return (
    <div>
        <button className="btn btn-warning m-3" onClick={() => handleShow(show, 'useRefHook', setShow)}>Show/Hide useRefHook</button>
        <div id="useRefHook" className="hide">
          <Input/>
          <InputWithEffect/>
        </div>
    </div>
  )
}

export default UseRefSection
