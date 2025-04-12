import React, { useState } from 'react';

const LoginModal = ({ onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return(
  <div style={{display:'block' ,justifyContent:'center',alignItems:'center'}}>
  <h2>Login</h2>
  <input 
    type="text" 
    placeholder="Username" 
    value={username} 
    onChange={(e) => setUsername(e.target.value)} 
  />
  <input 
    type="password" 
    placeholder="Password" 
    value={password} 
    onChange={(e) => setPassword(e.target.value)} 
  />
  <button >Login</button>
</div>
  )
};

export default LoginModal;
