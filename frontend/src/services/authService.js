import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const register = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/users/register`, {
    name,
    email,
    password,
  });
  return response.data;
};

const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/users/login`, { email, password });
  return response.data;
};

const getUser = async (token) => {
  const response = await axios.get(`${API_URL}/users/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export default { register, login, getUser };
