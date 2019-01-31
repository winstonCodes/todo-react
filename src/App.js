import React, {useState, useEffect} from 'react';
import './App.scss'

import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"
import Footer from "./components/Footer"
import ClickNotf from "./components/ClickNotf"

const App = () => {

  const store = (namespace, data) => {
    if (data){
      return localStorage.setItem (namespace, JSON.stringify(data))
    } else {
      let store = localStorage.getItem(namespace)
      return (store && JSON.parse(store)) || [];
    }
  }


  const todosData = store("todosLocal")

  const [todos, setTodos] = useState(todosData)

  const addTodo = async todo => {
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
    setTodos(todos.map(todo =>
      (todo.id === todoEdit.id) ?
      todoEdit : todo
    ))
  }

  useEffect(() => {
    store("todosLocal", todos)
  })


  return (
    <div className="container">
      <header><h1>Remind Me!</h1></header>
      <div className="content">
        <ClickNotf />
        <TodoInput addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} updateTodo={updateTodo}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
