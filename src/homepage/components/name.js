import React from 'react';

const ContainerWithText = () => {
  const containerStyle = {
    position: 'relative',
    width: '100%', // or specify a fixed width
    height: '300px', // or specify a fixed height
    border: '1px solid #ccc',
  };

  const textStyles = {
    position: 'absolute',
    top: '0',
    left: '0',
    padding: '10px',
    background: '#fff',
    color: "#0xff"
  };

  return (
    <div style={containerStyle}>
      <div style={textStyles}>
        Your Text Here
      </div>
    
    </div>
  );
};

export default ContainerWithText;
