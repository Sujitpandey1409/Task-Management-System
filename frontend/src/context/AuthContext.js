import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const user = await authService.getUser(token);
        setUser(user);
      }
    };
    fetchUser();
  }, []);

  const login = async (email, password) => {
    const user = await authService.login(email, password);
    setUser(user);
    localStorage.setItem('token', user.token);
    navigate('/');
  };

  const register = async (name, email, password) => {
    const user = await authService.register(name, email, password);
    setUser(user);
    localStorage.setItem('token', user.token);
    navigate('/');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
