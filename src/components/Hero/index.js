import React from 'react'
import { Container, Row} from './styles'

export const Hero = () => {
  return (
    <Container>
      <Row>
        <a href='#' className='volver'>Volver al Listado</a>
        <a href='#'>Herramientas</a>
        <a href='#'>Herramientas de Jardín</a>
        <a href='#'>Motosierras</a>
        <a href='#'>Motosierras a Gasolina</a>
      </Row>
      <Row>
      <a href='#'>Compartir</a>
      <a href='#'>Vender uno igual</a>
      </Row>
    </Container>
  )
}
