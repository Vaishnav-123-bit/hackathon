import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  
  const testUser = {
    userName: 'admin',
    password: 'admin'
  };

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const domain = 'http://localhost:5000';

  // UseEffect for checking token when app loads
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .post(`${domain}/verify`, { token })
        .then((res) => {
          setUser(res.data.user); 
        })
        .catch((err) => console.error('Error verifying token:', err));
    }
    setLoading(false); 
  }, []);

  const login = async (username, password) => {
    try {
      // Check if the username and password match the test user credentials
      if (username === testUser.userName && password === testUser.password) {
        const mockToken = 'mock-token'; // Mock token for this user
        localStorage.setItem('token', mockToken); // Save token in localStorage

        setUser({ username }); // Set user state after successful login
      } else {
        console.error('Login failed: Invalid credentials');
      }
    } catch (e) {
      console.error('Login error:', e);
    }
  };

  const logout = () => {
    localStorage.removeItem('token'); // Remove token on logout
    setUser(null); // Clear user state
  };

  return (
    <UserContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};
