import React, { useState } from 'react'

const AddTodoForm = ({handlerAddTodo}) => {

    const [addTodo, setAddTodo] = useState('')

    // console.log(addTodo)

    const handleNewTodo = (e) => {
        e.preventDefault()
        handlerAddTodo(addTodo)
        setAddTodo('')
    }
    
  return (
    <form onSubmit={handleNewTodo}>
        <div className="card card-body w-50 m-auto mb-3">
            <div className="form-group">
                <label className="mb-2"> Ajouter un Todo</label>
                <div className="d-flex justify-content-around m-auto">
                    <input className="form-control mx-3" type="text" value={addTodo} onChange={(e) => {setAddTodo(e.target.value)}} />
                    <input className="btn btn-success" type="submit"/>
                </div>
            </div>
        </div>
    </form>
  )
}

export default AddTodoForm