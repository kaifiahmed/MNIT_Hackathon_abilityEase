import React, { createContext, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Wrapper from './style';


const TextVariationsContext = createContext();

function TextVariations() {
  const { fontSize, setFontSize, textColor, setTextColor } = useContext(TextVariationsContext);

  const increaseFontSize = () => {
    setFontSize(fontSize + 5);
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize - 1);
  };

  const changeTextColor = () => {
    setTextColor(textColor === 'black' ? 'blue' : 'black');
  };

  const textStyle = {
    fontSize: `${fontSize}px`,
    color: textColor,
  };

  return (
    <div>
      <h1>Text Variations</h1>
      <div className='button'>
        <button onClick={increaseFontSize}>Increase Font Size</button>
        <button onClick={decreaseFontSize}>Decrease Font Size</button>
        <button onClick={changeTextColor}>Change Text Color</button>
      </div>
    </div>
  );
}

function Newresult() {
  const location = useLocation();
  const newsData = location.state?.newsData || [];
  const { fontSize, textColor } = useContext(TextVariationsContext);

  return (
    <div>
      <h1>News Section</h1>
      <Wrapper>
        {newsData.map((item, index) => (
          <div className="news-container" key={index}>
            <div className="card-body">
              <img src={item.urlToImage} alt="News Image" style={{ maxWidth: '100%', height: 'auto' }} />
              <h3 className='card-title' style={{ fontSize: `${fontSize}px`, color: textColor }}>{item.title}</h3>
              <p className='card-text' style={{ fontSize: `${fontSize}px`, color: textColor }}>{item.description}</p>
            </div>
          </div>
        ))}
      </Wrapper>
    </div>
  );
}

function App() {
  const [fontSize, setFontSize] = useState(16);
  const [textColor, setTextColor] = useState('black');

  return (
    <TextVariationsContext.Provider value={{ fontSize, setFontSize, textColor, setTextColor }}>
      <div>
        <TextVariations />
        <Newresult />
      </div>
    </TextVariationsContext.Provider>
  );
}

export default App;
