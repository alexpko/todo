import { ADD_TASK, COMPLETE_TASK } from '../constants';

const TASKS = [
  {
    id: 1,
    text: 'first task',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'second task',
    isCompleted: false,
  },
  {
    id: 3,
    text: 'third task',
    isCompleted: false,
  }
];

const tasks = (state = TASKS, { id, text, isCompleted, type }) => {
  switch (type) {
    case ADD_TASK :
      return [
        ...state, {
          id,
          text,
          isCompleted,
        }
      ];
    
      case COMPLETE_TASK:
          return [...state].map(task => {
            if(task.id === id) {
              task.isCompleted = !task.isCompleted;
            }
            return task;
          });
    default:
      return state;
  }
}

export default tasks;
