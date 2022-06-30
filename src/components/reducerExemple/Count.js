import React, { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reinitialize':
            return initialState
        default:
            return state
    }
}

const Count = () => {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h3>{count}</h3>
            <button className="btn btn-success m-3" onClick={() => dispatch('increment')}>+</button>
            <button className="btn btn-danger m-3" onClick={() => dispatch('decrement')}>-</button>
            <button className="btn btn-primary m-3" onClick={() => dispatch('reinitialize')}>0</button>
        </div>
    )
}

export default Count