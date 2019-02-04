import React, {useState, useEffect} from 'react';
import './App.scss'

import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"
import Footer from "./components/Footer"
import ClickNotf from "./components/ClickNotf"

const App = () => {

  // initiate store function: if passed name and data, save data in localStorage
  // if passed only name, load any stored data or return empty array
  const store = (namespace, data) => {
    if (data){
      return localStorage.setItem (namespace, JSON.stringify(data))
    } else {
      let store = localStorage.getItem(namespace)
      return (store && JSON.parse(store)) || [];
    }
  }

  // load todos from localStorage
  const todosData = store("todosLocal")

  // set initial todo list state w/ data from local storage
  const [todos, setTodos] = useState(todosData)

  // create new todo, passed to TodoInput component
  const addTodo = todo => {
    if (!todo.name) return;
    todo.id = Date.now()
    setTodos([...todos, todo])
  }

  // delete todo, passed to TodoList and is on each todo list item as a button
  const deleteTodo = id => {
    setTodos( todos.filter(todo => todo.id !== id) )
  }

  // toggle todo to complete/uncomplete. passed to TodoList, on each todo onclick
  const toggleComplete = id => {
    setTodos(todos.map(todo =>
      (todo.id === id) ?
      {...todo, completed: !todo.completed} : todo
    ))
  }

  // toggle editing mode for a todo. When true TodoList renders TodoEdit
  const toggleEdit = id => {
    setTodos(todos.map(todo =>
      (todo.id === id) ?
      {...todo, edit: !todo.edit} : todo
    ))
  }

  //update todo w/ information passed from TodoEdit
  const updateTodo = (todoEdit) => {
    setTodos(todos.map(todo =>
      (todo.id === todoEdit.id) ?
      todoEdit : todo
    ))
  }

  // clear completed button logic
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  // clear all button logic
  const clearAll = () => {
    setTodos([])
  }

  // save todos to localStorage after every component update
  useEffect(() => {
    store("todosLocal", todos)
  })

  //render header, "click to complete" animation (ClickNotf), TodoList items, and Footer
  return (
    <div className="container">
      <header><h1>Remind Me!</h1></header>
      <div className="content">
        <ClickNotf />
        <TodoInput addTodo={addTodo} />
        <TodoList
          todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} toggleEdit={toggleEdit} updateTodo={updateTodo}
          clearCompleted={clearCompleted}
          clearAll={clearAll}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
