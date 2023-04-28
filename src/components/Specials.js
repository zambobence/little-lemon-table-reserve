import React from 'react'
import Container from './Container'
import Grid from './Grid'
import Button from './Button'
import Card from './Card'

function Specials() {
  return (
    <section className='specials'>
      <Container>
        <Grid>
          <h1>This weeks specials</h1>
          <Button>Online Menu</Button>
            <Card />
        </Grid>
      </Container>
    </section>
  )
}

export default Specials