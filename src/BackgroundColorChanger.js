// src/BackgroundColorChanger.js

import React, { useState } from 'react';

const BackgroundColorChanger = () => {
  const [color, setColor] = useState('#ffffff'); // Initial color

  const handleChange = (event) => {
    setColor(event.target.value);
    document.body.style.backgroundColor = event.target.value; // Change body background color
  };

  return (
    <input type="color" value={color} onChange={handleChange} />
  );
};

export default BackgroundColorChanger;
