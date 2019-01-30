import React, {useState} from 'react';
import './App.scss'

import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"

const App = () => {

  const todosData = []

  const [todos, setTodos] = useState(todosData)

  const addTodo = todo => {
    if (!todo.name) return;
    todo.id = todos.length + 1
    setTodos([...todos, todo])
  }

  const deleteTodo = id => {
    setTodos( todos.filter(todo => todo.id !== id) )
  }

  const toggleTodo = id => {
    setTodos(todos.map(todo =>
      (todo.id === id) ?
      {...todo, completed: !todo.completed} : todo
    ))
  }

  const editTodo = id => {
    setTodos(todos.map(todo =>
      (todo.id === id) ?
      {...todo, edit: !todo.edit} : todo
    ))
  }

  const updateTodo = (todoEdit) => {
    console.log(todoEdit);
    setTodos(todos.map(todo =>
      (todo.id === todoEdit.id) ?
      todoEdit : todo
    ))
  }


  return (
    <div className="container">
      <header><h1>Remind Me!</h1></header>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} updateTodo={updateTodo}/>
    </div>
  );
}

export default App;

// { id: 1, name: "get eggs", completed: false, edit: false },
// { id: 2, name: "drink water", completed: false, edit: false },
// { id: 3, name: "go run", completed: false, edit: false },
