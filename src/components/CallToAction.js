import React from 'react';
import Container from './Container';
import Flex from './Flex';
import HeroImg from '../assets/img/restauranfood.jpg';
import { useNavigate } from 'react-router-dom';

function CallToAction() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/booking');
  };

  return (
    <section className='call-to-action'>
      <Container>
        <Flex>
          <div className='hero-content-container'>
            <h1 className='display-title'>
              Little Lemon
            </h1>
            <h2 className='sub-title'>
              Chicago
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis dolorum eaque similique deleniti repellat velit vero, laborum sint et pariatur aut labore quos quidem vitae sequi iusto obcaecati, quasi voluptatibus hic excepturi dolor? Reprehenderit, dignissimos neque alias deleniti quibusdam ipsam.
            </p>
            <button className='btn' onClick={handleButtonClick}>Reserve table</button>
          </div>
          <div className='hero-img-container'>
            <img src={HeroImg} className='hero-img' alt='Picture of delicious food' />
          </div>
        </Flex>
      </Container>
    </section>
  );
}

export default CallToAction;
