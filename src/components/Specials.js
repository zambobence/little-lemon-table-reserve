import React from 'react'
import Container from './Container'
import Grid from './Grid'
import Button from './Button'
import Card from './Card'
import {specials} from './Menu'
import Flex from './Flex'

function Specials() { 
  return (
    <section className='specials'>
      <Container>
        <Flex>
          <h1>This weeks specials</h1>
          <Button>Online Menu</Button>
          <Flex>
          {specials.map( e => <Card data={e} />)}
          </Flex>
        </Flex>
      </Container>
    </section>
  )
}

export default Specials