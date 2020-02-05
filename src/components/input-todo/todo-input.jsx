import React from 'react'
import './todo-input.css';

const ToDoInput = ({ value, onChange, onKeyPress }) => (
  <div className="todo-input-wrapper">
    
    <input
      className="todo-input"
      placeholder="Print new task and press enter"
      onChange={onChange}
      value={value}
      onKeyPress={onKeyPress}
    />
    
  </div>
);

export default ToDoInput;
