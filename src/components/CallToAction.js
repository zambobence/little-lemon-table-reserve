import React from 'react'
import Container from './Container'
import Grid from './Grid'
import Button from './Button'
import HeroImg from '../assets/img/restauranfood.jpg'
function CallToAction() {
  return (
    <section className='call-to-action'>
      <Container>
      <Grid>
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
        <Button>Reserve table</Button>
        </div>
        <div className='hero-img-container'>
          <img src={HeroImg} className='hero-img' />
        </div>
        </Grid>
        </Container>
    </section>
  )
}

export default CallToAction