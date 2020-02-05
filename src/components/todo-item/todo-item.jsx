import React from 'react';
import './todo-item.css';

const ToDoItem = ({ text, isCompleted,  id, completeTask }) => (
  <li className="todo-item">
    
    <input type='checkbox' onClick={() => completeTask(id)} className='mark' defaultChecked={isCompleted}/>

    <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
    
     </li>
)

ToDoItem.defaultProps = {
  text: '',
  isCompleted: false,
}

export default ToDoItem;

