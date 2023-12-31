// import React, { useState } from 'react';
// import Wrapper from './style';
import { Link} from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import news from '../../assets/images/news.png'
// import dairy from '../../assets/images/dairy.jpeg'


// const Features = () => {

  
//     const navigate = useNavigate(); // Initialize navigate
//     const [data, setData] = useState([]);
  
//     const getNews = () => {
//       axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=9bfd7540afd54199b1a52c8dbf856d2c&q=india")
//        .then((response) => {
//         setData(response.data.articles);
//         console.log(response);
//         navigate('/news-results', { state: { newsData: response.data.articles } }); // Use navigate instead of history.push
//        })
//     }

//   return (
//     <Wrapper>
//     <div className="features-container">
//       <div className='main'>
//         <button onClick={getNews}>Fetch news</button>
//         <div className='box' id='one' >
//         <img src= {news} alt="Logo" width='250px' height='250px' />
//         </div>
        
//         <Link className="forgot" to="/dairy">
//         <div className='box' id='two'>
//           <img src= {dairy} alt="Logo" width='250px' height='250px' /></div>
//         </Link>
        
//         <div className='box' id='three'>Mail</div>
//         <div className='box' id='four'>order services</div>
//         <div className='box' id='five'>More</div>

//       </div>
//     </div>
//     </Wrapper>
//   )
// }

// export default Features;

import React, { useState } from 'react';
import axios from 'axios';
import news from '../../assets/images/news.png';
import dairy from '../../assets/images/dairy.jpeg';
import emailicon from '../../assets/images/gmail.png'
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
          
          <Link className="" to="/news-results" onClick={getNews}>
          <div className='box' id='one'>
            <img src={news} alt="Logo" width='250px' height='250px' />
            <div className='' id='three'>Take Notes</div></div>  
           </Link>
          <Link className="" to="/dairy">
            <div className='box' id='two'>
            <img src= {dairy} alt="Logo" width='250px' height='250px' />
            <div className='' id='three'>Take Notes</div></div>  
           </Link>

           <Link className="" to="#">
            <div className='box' id='two'>
            <img src= {emailicon} alt="Logo" width='250px' height='250px' />
            <div className='' id='three'>Send a Mail</div></div>
           </Link>
          
          <div className='box' id='four'>order services</div>
          <div className='box' id='five'>More</div>

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