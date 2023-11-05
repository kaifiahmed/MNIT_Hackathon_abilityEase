import React, { useState } from 'react';
import axios from 'axios';
import news from '../../assets/images/news.png';
import dairy from '../../assets/images/dairy.jpeg';
import Wrapper from './style';
import { useNavigate } from 'react-router-dom';

const Features = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [data, setData] = useState([]);

  const getNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=9bfd7540afd54199b1a52c8dbf856d2c&q=india")
     .then((response) => {
      setData(response.data.articles);
      console.log(response);
      navigate('/news-results', { state: { newsData: response.data.articles } }); // Use navigate instead of history.push
     })
  }
  return (
    <Wrapper>
      <div className="features-container">
        <div className='main'>
          <div className='box' id='one'>
            <button onClick={getNews}>Fetch news</button>
            <img src={news} alt="Logo" width='250px' height='250px' />
          </div>
          <div className='box' id='two'>
          <img src={dairy} alt="Logo" width='250px' height='250px' />

          </div>
          <div className='box' id='three'>Mail</div>
          <div className='box' id='four'>order services</div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {
            data.map((value) => {
              return(
                <div className="col-3">
                <div className="card" style= {{width: '18rem'}}>
                    <img src= {value.urlToImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.description} </p>
                    </div>
                </div>
              </div>
              );
            })
          }
        </div>
      </div>
    </Wrapper>
   
  )
}

export default Features;