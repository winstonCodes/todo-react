import React, {useState} from 'react'

const TodoInput = props => {
  const {addTodo} = props;

    // todo item initial state
    const initialInputState = { id: null, name: "", completed: false }

    // initiate input form state... [getter, setter] = useState(initialState)
    const [todo, setTodo] = useState(initialInputState);

    // on change link input value and state name
    const handleInputChange = event => {
      const {name, value} = event.target
      setTodo({...todo, [name]:value})
    }

  //on submit pass todo up to parent to be added to todo list state
  const handleSubmit = event => {
    event.preventDefault();
    addTodo(todo);
    setTodo(initialInputState);
  }

  // render add todo input w/ submit button
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
