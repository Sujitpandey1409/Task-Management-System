import React, { useContext } from 'react';
import Task from './Task';
import TaskContext from '../../context/TaskContext';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
