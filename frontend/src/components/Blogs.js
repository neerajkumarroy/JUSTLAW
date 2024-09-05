import React from 'react';

const ShineTextAnimation = () => {
  const shineStyle = {
    padding: 0,
    margin: 0,
    backgroundColor: '#0000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  };

  const h1Style = {
    color: 'hsl(0, 0%, 28%)',
    fontSize: '50px',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    letterSpacing: '7px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    padding: '64px',
    background: 'linear-gradient(to right, hsl(0, 0%, 30%) 0, hsl(0, 0%, 100%) 10%, hsl(0, 0%, 30%) 20%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'shine 3s infinite linear',
  };

  const shineKeyframes = `
    @keyframes shine {
      0% {
        background-position: 0;
      }
      60% {
        background-position: 600px;
      }
      100% {
        background-position: 600px;
      }
    }
  `;

  return (
    <div style={shineStyle}>
      <style>{shineKeyframes}</style>
      <h1 style={h1Style}>Shining Text</h1>
    </div>
  );
};

export default ShineTextAnimation;
