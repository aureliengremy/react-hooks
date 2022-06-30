import React, { useReducer } from 'react'

const initialState = {
    countOne: 0,
    countTwo: 0
}

const reducer = (state = initialState, action) => {
    // console.log(typeof action.value)
    // console.log(state)
    switch (action.type) {
        case 'increment':
            return {...state, countOne: state.countOne + action.value}
        case 'decrement':
            return {...state, countOne: state.countOne - action.value}
        case 'increment2':
            return {...state, countTwo: state.countTwo + action.value}
        case 'decrement2':
            return {...state, countTwo: state.countTwo - action.value}
        case 'reinitialize':
            return initialState
        case 'reinitialize1':
            return {...state, countOne: initialState.countOne}
        case 'reinitialize2':
            return {...state, countTwo: initialState.countTwo}
        default:
            return state
    }
}

function Count() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="row">
            <div className="col-4">
                <p>{count.countOne}</p>
                <button className="btn btn-success m-3" onClick={() => dispatch({type: 'increment', value: 1})}>+</button>
                <button className="btn btn-danger m-3" onClick={() => dispatch({type :'decrement', value: 1})}>-</button>
                
            </div>
            <div className="col">
                <button className="btn btn-primary m-3" onClick={() => dispatch({type:'reinitialize1'})}>left to 0</button>
                <button className="btn btn-primary m-3" onClick={() => dispatch({type:'reinitialize'})}>All to 0</button>
                <button className="btn btn-primary m-3" onClick={() => dispatch({type:'reinitialize2'})}>right to 0</button>
            </div>
            <div className="col-4">
                <p>{count.countTwo}</p>
                <button className="btn btn-success m-3" onClick={() => dispatch({type: 'increment2', value: 10})}>+</button>
                <button className="btn btn-danger m-3" onClick={() => dispatch({type :'decrement2', value: 10})}>-</button>
            </div>
        </div>
    )
}

export default Count