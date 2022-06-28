import React, { useEffect, useState } from 'react'

function FunctionDisplayKey() {

    const [keyCode, setKeyCode] = useState('')

    const handleKeyCode = (e) => {
        setKeyCode(e.code)
    }

    useEffect(() => {
        document.addEventListener('keyup', handleKeyCode)
        
        return () => {
            console.log('Je démonte le component via useEffect')
            document.removeEventListener('keyup', handleKeyCode)
        }
    },[])

  return (
    <div>
        <div className="card">
                <div className="card-body">
                    <h3 className='text-center'>{keyCode}</h3>
                </div>
        </div>
    </div>
  )
}

export default FunctionDisplayKey