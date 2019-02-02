import React from 'react'
import TodoEdit from './TodoEdit'

const TodoList = props => {

  const {todos, deleteTodo, toggleComplete, toggleEdit, updateTodo, clearCompleted, clearAll} = props;

  // function used to pass edited todo data from child EditInput up to parent and into state
  const handleUpdate = todo => updateTodo(todo)

  // todos array = if edit toggle is true, render edit component. else render todo li and inline styles
  let todosArray = todos.map(todo => {
    if (todo.edit) {
      return (
        <li key={todo.id}>
          <TodoEdit todo={todo} updateTodo={handleUpdate} />
        </li>
      )

    } else {
      return (
        <li key={todo.id}>
          <span
          onClick={() => toggleComplete(todo.id)}
          style={{
            textDecoration: todo.completed ? 'line-through':'none',
            opacity: todo.completed ? '0.5' : '1',
            cursor:"pointer"
          }}>
          {todo.name}
          </span>
          <button className="edit" onClick={() => toggleEdit(todo.id)}>Edit</button>
          <button className="delete" onClick={() => deleteTodo(todo.id)}>X</button>
        </li>
      )
    }
})

  //render todolist array and clear buttons if length>0, else no todos message
  return (
    <div className="todo-list">
      {(todos.length > 0 ? (
        <ul>
          {todosArray}
          <button
            className="clear"
            onClick={clearCompleted}>
            Clear Completed
          </button>|
          <button
            className="clear"
            onClick={clearAll}>
            Clear All
          </button>
        </ul>
      ) : (
        <p> No todos!</p>
      )
    )}
    </div>
  )

}

export default TodoList
