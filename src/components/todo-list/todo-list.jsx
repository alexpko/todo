import React from 'react';
import ToDoItem from '../todo-item/todo-item';

import './todo-list.css';

const ToDoList = ({ tasksList, completeTask }) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted }) => (
      <ToDoItem completeTask={completeTask}  id={id} key={id} text={text} isCompleted={isCompleted} />
    ))}
  </ul>
);
export default ToDoList;
