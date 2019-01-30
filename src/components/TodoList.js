import React from 'react'
import TodoEdit from './TodoEdit'

const TodoList = props => {

  const {todos, deleteTodo, toggleTodo, editTodo, updateTodo} = props;

  const handleUpdate = todo => updateTodo(todo)


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
          onClick={() => toggleTodo(todo.id)}
          style={{
            textDecoration: todo.completed ? 'line-through':'none',
            opacity: todo.completed ? '0.5' : '1',
            cursor:"pointer"
          }}>
          {todo.name}
          </span>
          <button className="edit" onClick={() => editTodo(todo.id)}>Edit</button>
          <button className="delete" onClick={() => deleteTodo(todo.id)}>X</button>
        </li>
      )
    }
})

  return (
    <div className="todo-list">
      {(todos.length > 0 ? (
        <ul>
          {todosArray}
        </ul>
      ) : (
        <p> No todos!</p>
      )
    )}
    </div>
  )

}

export default TodoList
