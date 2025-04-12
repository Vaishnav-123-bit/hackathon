import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useUser } from './context/UserContext';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  const { user, loading } = useUser();

  console.log(user, "user details", loading);

  if (loading) {
    return <p>Loading...</p>;
  }

  console.log(user);

  return (
    <>
      {/* Apply styling to remove default margin and padding */}
      <div style={{ backgroundColor: "red", margin: "0", padding: "0" }}>
        <Navbar />
        <Home />
      </div>

      {/* Global style reset if necessary */}
   

    </>
  );
}

export default App;
