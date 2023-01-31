import React, { useState } from "react";
import './list.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      alert('Please type something to add');
      return;
    }
    setTodos([...todos, input]);
    setInput('');
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-point">
      <div class = "title">
        <h1>Welcome To Todo Point</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{' '}
            <button type="button" onClick={() => handleDelete(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;