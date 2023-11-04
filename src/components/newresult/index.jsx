import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation

const Newresult = () => {
  const location = useLocation(); // Initialize location
  const newsData = location.state?.newsData || [];

  return (
    <div>
      {newsData.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Newresult;
