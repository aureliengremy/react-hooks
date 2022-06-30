import React from 'react'

const Button = ({handleClick, btnColor, increment, children}) => {
    // console.log(`Button ${children}`)
  return (
    <button onClick={() => handleClick(increment)} className={`btn btn-${btnColor} m-2`}>+ {increment} %</button>
  )
}

export default React.memo(Button)