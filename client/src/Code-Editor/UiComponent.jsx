import React from 'react';
import { Rnd } from 'react-rnd';

function MovableResizablePhoto({ imageUrl, isVisible }) {
  if (!isVisible) return null; // Render nothing if not visible

  return (
    <Rnd
      default={{
        x: 50,  
        y: 50,   
        width: 500, 
        height: 500, 
      }}
      minWidth={150}
      minHeight={150} 
      bounds="parent" 
      style={{
        border: '2px solid #fff',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <img
        src={imageUrl}
        alt="Movable and Resizable"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Ensure the image covers the container
        }}
      />
    </Rnd>
  );
}

export default MovableResizablePhoto;
