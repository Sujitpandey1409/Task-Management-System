import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const getTasks = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/tasks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const createTask = async (task) => {
  const token = localStorage.getItem('token');
  const response = await axios.post(`${API_URL}/tasks`, task, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const updateTask = async (id, updatedTask) => {
  const token = localStorage.getItem('token');
  const response = await axios.put(`${API_URL}/tasks/${id}`, updatedTask, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const deleteTask = async (id) => {
  const token = localStorage.getItem('token');
  await axios.delete(`${API_URL}/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default { getTasks, createTask, updateTask, deleteTask };
