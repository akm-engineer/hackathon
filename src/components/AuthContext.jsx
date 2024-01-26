// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8000/api/user/signin', {
        email,
        password,
      });

      const { token, user } = response.data;

      setUser(user);

      localStorage.setItem('authToken', token);
    } catch (error) {
      throw new Error(error.response?.data?.error || error.message);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authToken');
  };

  const checkAuth = async () => {
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      try {
        const response = await axios.get('http://localhost:8000/api/user/sign-up', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        const { user } = response.data;
        setUser(user);
      } catch (error) {
        console.error(
          'Error checking authentication:',
          error.response?.data?.error || error.message
        );
      }
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
