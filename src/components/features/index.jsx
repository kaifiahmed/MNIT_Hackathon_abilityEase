import React from 'react';
import Wrapper from './style';
import Bnews from '../../assets/images/Bnews.jpeg'
import dairy from '../../assets/images/dairy.jpeg'


const Features = () => {
  return (
    <Wrapper>
    <div className="features-container">
      <div className='main'>
        <div className='box' id='one' >
        <img src= {Bnews} alt="Logo" width='250px' height='250px' />
        </div>
        <div className='box' id='two'>
        <img src= {dairy} alt="Logo" width='250px' height='250px' />
        </div>
        <div className='box' id='three'>Mail</div>
        <div className='box' id='four'>order services</div>
      </div>
    </div>
    </Wrapper>
   
  )
}

export default Features;
