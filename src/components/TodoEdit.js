import React, {useState} from 'react'

const TodoEdit = props => {
  const {updateTodo, todo} = props;

    // set initial state from passed in todo object values
    const initialInputState = { id: todo.id, name:todo.name, completed: todo.completed }

    // initiate input form state [getter, setter] = hook(initialState)
    const [newTodo, setTodo] = useState(initialInputState);

    // connect input form changes to above state
    const handleInputChange = event => {
      const {name, value} = event.target
      setTodo({...newTodo, [name]:value})
    }

    // on form submit, pass todo data to parent TodoList;
  const handleSubmit = event => {
    event.preventDefault();
    updateTodo(newTodo);
    setTodo(initialInputState);
  }

  return(
    <div className="todo-edit">
      <form onSubmit={handleSubmit}>
        <label>todo:</label>
        <input
          type="text"
          name="name"
          value={newTodo.name}
          onChange={handleInputChange} />
        <button className="done">&#x2713;</button>
      </form>
    </div>
  )
}

export default TodoEdit
