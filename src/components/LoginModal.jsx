import React, { useState } from 'react';

const LoginModal = ({ onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onLogin(username, password);
    onClose();
    setUsername('');
    setPassword('');
  };

  const styles = {
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      animation: 'fadeIn 0.3s ease-out', // Smooth fade-in animation
    },
    modal: {
      backgroundColor: '#fff',
      color: '#333',
      padding: '2rem',
      borderRadius: '8px',
      width: '350px',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      animation: 'scaleUp 0.3s ease-out', // Smooth scaling animation for modal
    },
    title: {
      margin: 0,
      fontSize: '1.6rem',
      fontWeight: '600',
      color: '#333',
      textAlign: 'center',
    },
    input: {
      padding: '0.8rem',
      fontSize: '1rem',
      borderRadius: '5px',
      border: '1px solid #ddd',
      outline: 'none',
      boxSizing: 'border-box',
      transition: 'border 0.3s',
    },
    inputFocus: {
      border: '1px solid #00c896',
    },
    closeBtn: {
      background: 'transparent',
      color: '#333',
      border: 'none',
      fontSize: '1.5rem',
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      cursor: 'pointer',
    },
    button: {
      backgroundColor: '#00c896',
      color: 'white',
      border: 'none',
      padding: '0.8rem',
      fontSize: '1.1rem',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#028a70',
    },
  };

  // Handle input focus and blur for adding focus effect
  const handleInputFocus = (e) => e.target.style.border = '1px solid #00c896';
  const handleInputBlur = (e) => e.target.style.border = '1px solid #ddd';

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeBtn} onClick={onClose}>✕</button>
        <h2 style={styles.title}>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            required
          />
          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            required
          />
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => e.target.style.backgroundColor = '#028a70'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#00c896'}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
