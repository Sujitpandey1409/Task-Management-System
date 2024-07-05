import React from 'react';
import TaskList from '../components/Tasks/TaskList';
import TaskForm from '../components/Tasks/TaskForm';

const Home = () => {
  return (
    <div>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;
