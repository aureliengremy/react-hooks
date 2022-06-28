import React, { useState } from 'react'
import AddTodoForm from './AddTodoForm'
// import {v4 as uuid} from 'uuid'

const Todo = () => {

    const [todos, setTodos] = useState([
        {id:1, todo: 'acheter du lait'},
        {id:2, todo: 'acheter du pain'},
        {id:3, todo: 'acheter du chocolat'}
    ])
    const [warning, setWarning] = useState(false)

    const todosList = todos.map(todo => {
        return (
            <li key={todo.id} className="list-group-item w-50 m-auto">{todo.todo}</li>
        )
    })

    const addNewToto = (newTodo) => {
        if(newTodo !== '') {
            warning && setWarning(false)
            setTodos([...todos, {
                id: todos.length + 1,
                todo: newTodo
            }])
        } else {
            setWarning(true)
        }
    }
    
    // console.log(warning)
    // console.log(todos)

    const warningMsg = warning && <div className="alert alert-danger" role="alert"> Veuillez notez votre To-do</div>


  return (
    <div className='p-5'>
        {warningMsg}
        <h1>TodoList :</h1>
        <h2 className="text-center">{todos.length} To-do{todos.length > 1 ? '\'s' : '' }</h2>

        <ul className="list-group my-5">
            {todosList}
        </ul>
        <AddTodoForm handlerAddTodo={addNewToto}/>
    </div>
  )
}

export default Todo