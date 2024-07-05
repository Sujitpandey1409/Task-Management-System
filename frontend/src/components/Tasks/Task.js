import React, { useContext } from 'react';
import TaskContext from '../../context/TaskContext';

const Task = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{task.title}</h5>
        <p className="card-text">{task.description}</p>
        <p className="card-text"><small className="text-muted">{task.dueDate}</small></p>
        <p className="card-text"><small className="text-muted">{task.priority}</small></p>
        <p className="card-text"><small className="text-muted">{task.status}</small></p>
        <button className="btn btn-danger" onClick={() => deleteTask(task._id)}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
