import React from 'react';
import { FaReact, FaMicrophone, FaRegImage, FaVideo } from 'react-icons/fa';
import { MdTextFields } from 'react-icons/md';

function IconButtons({ scrollToMainSection }) {
  return (
    <div style={containerStyle}>
      <button style={btnStyle} onClick={scrollToMainSection}>
        <MdTextFields size={20} />
      </button>
      <button style={btnStyle} onClick={scrollToMainSection}>
        <FaMicrophone size={20} />
      </button>
      <button style={btnStyle} onClick={scrollToMainSection}>
        <FaRegImage size={20} />
      </button>
      <button style={btnStyle} onClick={scrollToMainSection}>
        <FaVideo size={20} />
      </button>
    </div>
  );
}

const containerStyle = {
  position: 'fixed',
  top: '70%',
  right: '10px',
  transform: 'translateY(-50%)',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  zIndex: 1000
};

const btnStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50px',
  height: '50px',
  backgroundColor: '#282c34',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  transition: 'transform 0.2s ease',
};

export default IconButtons;
