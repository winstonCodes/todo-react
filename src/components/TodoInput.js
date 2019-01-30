import React, {useState} from 'react'

const TodoInput = props => {
  const {addTodo} = props;

    const initialInputState = { id: null, name: "", completed: false }

    const [todo, setTodo] = useState(initialInputState);

    const handleInputChange = event => {
      const {name, value} = event.target
      setTodo({...todo, [name]:value})
    }


  const handleSubmit = event => {
    event.preventDefault();
    addTodo(todo);
    setTodo(initialInputState);
  }

  return(
    <div className="todo-input">
      <form onSubmit={handleSubmit}>
        <label>todo:</label>
        <input
          type="text"
          name="name"
          value={todo.name}
          autocomplete="off"
          onChange={handleInputChange} />
        <button>add</button>
      </form>
    </div>
  )
}

export default TodoInput
