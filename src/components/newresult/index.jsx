import React from 'react';
import { useLocation } from 'react-router-dom';
import Wrapper from './style';

const Newresult = () => {
  const location = useLocation();
  const newsData = location.state?.newsData || [];

  return (
    <Wrapper>
    <div className="news-container">
      {newsData.map((item, index) => (
        <div className="news-item" key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
        
      ))}
    </div>
    </Wrapper>
  );
}

export default Newresult;