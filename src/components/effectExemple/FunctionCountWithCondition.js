import React, { useState, useEffect } from 'react'

const FunctionCountWithCondition = () => {

    const [count, setCount] = useState(0)

    const [name, setName] = useState('')


    useEffect(() => {
        // console.log(`Le titre de la page va changer suite au montage/update du composent: ${count} click! `)
        setTimeout(() =>{
            document.title = `Vous avez cliqué ${count} fois`
        }, 3000)
        // Avec des conditions :
        // console.log('Mise à jour du titre')
    }, [count])

  return (
    <div>
        <h2>{count}</h2>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={() => setCount(count => count + 1)}>Cliquer</button>
    </div>
  )
}

export default FunctionCountWithCondition