import React, { useState } from 'react';

function TextVariations() {
  const [fontSize, setFontSize] = useState(16);
  const [textColor, setTextColor] = useState('black');

  const increaseFontSize = () => {
    setFontSize(fontSize + 5);
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize - 1);
  };

  const changeTextColor = () => {
    setTextColor(textColor === 'black' ? 'red' : 'black');
  };

  const textStyle = {
    fontSize: `${fontSize}px`,
    color: textColor,
  };

  return (
    <div>
      <h1>Text Variations</h1>
      <p style={textStyle}>This is a sample text with font size and color variations.</p>
      <div>
        <button onClick={increaseFontSize}>Increase Font Size</button>
        <button onClick={decreaseFontSize}>Decrease Font Size</button>
        <button onClick={changeTextColor}>Change Text Color</button>
      </div>
    </div>
  );
}

export default TextVariations;
