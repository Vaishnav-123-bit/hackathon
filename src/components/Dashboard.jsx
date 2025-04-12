import React from 'react';
import { useUser } from '../context/UserContext';

const Dashboard = () => {
  const { user, logout } = useUser();

  if (!user) {
    return <p>You need to be logged in to view this page.</p>;
  }

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
