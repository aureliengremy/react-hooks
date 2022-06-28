import React, { useState, useEffect } from 'react'

const FunctionCount = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        // console.log(`Le titre de la page va changer suite au montage/update du composent: ${count} click! `)
        setTimeout(() =>{
            document.title = `Vous avez cliqué ${count} fois`
        }, 3000)
    })
  return (
    <div>
        <h2>{count}</h2>

        <button onClick={() => setCount(count => count + 1)}>Cliquer</button>
    </div>
  )
}

export default FunctionCount