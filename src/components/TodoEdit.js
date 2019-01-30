import React, {useState} from 'react'

const TodoEdit = props => {
  const {updateTodo, todo} = props;

    const initialInputState = { id: todo.id, name:todo.name, completed: false }

    const [newTodo, setTodo] = useState(initialInputState);

    const handleInputChange = event => {
      const {name, value} = event.target
      setTodo({...newTodo, [name]:value})
    }


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
