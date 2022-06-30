import React, { useCallback, useState } from 'react'
import Button from './callbackExemple/Button'
import Count from './callbackExemple/Count'

const UseCallbackSection = ({handleShow}) => {

    const [countOne, setCountOne] = useState({value: 0, btnColor: 'success', increment: 25})
    const [countTwo, setCountTwo] = useState({value: 0, btnColor: 'danger', increment: 25})
  
    const incrementCountOne = useCallback(
        (val) => {
            countOne.value < 100 && setCountOne({...countOne, value: countOne.value + val})
    },[countOne])
    const incrementCountTwo = useCallback(
        (val) => {
            countTwo.value < 100 && setCountTwo({...countTwo, value: countTwo.value + val})
    }, [countTwo])

    const backToZero = useCallback(() => {
        // console.log('back to zero')
        setCountOne({...countOne, value: 0})
        setCountTwo({...countTwo, value: 0})
    },[])

    const [show, setShow] = useState(false)

    return (
    <div>
        <button className="btn btn-warning m-3" onClick={() => handleShow(show, 'useCallback', setShow)}>Show/Hide UseCallback</button>
        <div id='useCallback' className="row hide">
        <Count text="CountOne" count={countOne.value} bgColor={countOne.btnColor}/>
        <Count text="CountTwo" count={countTwo.value} bgColor={countTwo.btnColor}/>
            <div className="w-25 m-auto">
                <Button handleClick={incrementCountOne} btnColor={countOne.btnColor} increment={countOne.increment}>Count 1 </Button>
                <Button handleClick={incrementCountTwo} btnColor={countTwo.btnColor} increment={countTwo.increment}>Count 2</Button>
                {/* <button onClick={() => setCountOne({...countOne, value: 0})}>Green to 0%</button> */}
                <Button handleClick={backToZero} btnColor='info' increment='0'>Back to</Button>
            </div>
        </div>
    </div>
  )
}

export default UseCallbackSection