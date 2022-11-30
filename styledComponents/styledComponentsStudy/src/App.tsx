import React from 'react'
import styled from 'styled-components'
import { Container, Botao } from './AppStyles'

const App = () => {
  return (
    <Container bgContainer='#000000'>
      <span>Texto componente</span>
      <a href='' className='link'>Link qualquer</a>
      <Botao bg='#FF0000'>Clique aqui</Botao>
      <Botao bg='#00FF00' small>Clique aqui</Botao>
    </Container>
  )
}
export default App