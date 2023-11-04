import React from 'react';
import Wrapper from './style';
import news from '../../assets/images/news.png'


const Features = () => {
  return (
    <Wrapper>
    <div className="features-container">
      <div className='main'>
        <div className='box' id='one' >
        <img src= {news} alt="Logo" width='250px' height='250px' />
        </div>
        {/* <Link className="forgot" to="/resetPassword">
              Forgot Password ?
            </Link> */}
        <div className='box' id='two'><>Daiy Record</></div>
        <div className='box' id='three'>Mail</div>
        <div className='box' id='four'>order services</div>
      </div>
    </div>
    </Wrapper>
  )
}

export default Features;
