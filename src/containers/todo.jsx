import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTast, completeTask } from '../actions/actionCreator';

import ToDoInput from '../components/input-todo/todo-input';
import ToDoList from '../components/todo-list/todo-list';


import './todo.css';

class ToDo extends Component {

  state = {
        taskText: ''
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value,
    })
  }

  addTast = ({ key }) => {
    const { taskText } = this.state;

    if (taskText.length > 1 && key === 'Enter') {
      const { addTast } = this.props;
      addTast((new Date()).getTime(), taskText, false);
      this.setState({
        taskText: '',
      });
    }
  }

  render() {
    const { taskText } = this.state;
    const { tasks, completeTask } = this.props;
    const isTasksExist = tasks && tasks.length > 0;

    return (
      <div className="todo-wrapper">
        <ToDoInput onKeyPress={this.addTast} onChange={this.handleInputChange} value={taskText} />
        {isTasksExist && <ToDoList completeTask={completeTask} tasksList={tasks}/>}
         
      </div>
    );
  }
}

export default connect(state => ({
  tasks: state.tasks,
}), { addTast, completeTask })(ToDo);



