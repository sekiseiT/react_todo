import React from 'react';
import "./Todo.css"

const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  return (
  <div className='TodoList'>
    <label>
      <input type="checkbox"
      checked={todo.completed} 
      readOnly
      onChange={handleTodoClick}
       />
    </label>
    {todo.name}
  </div>
  );
};

export default Todo;