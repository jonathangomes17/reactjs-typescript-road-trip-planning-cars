import React from 'react'

// Components
import Button from '../../components/Button'
import Input from '../../components/Input'
import Grid from '../../components/Grid'
import Row from '../../components/Grid/Row'

function HomePage() {
  return (
    <>
      <h1>Planejando viajar de carro? Nós temos a melhor rota para você \o/</h1>

      <Grid>
        <Row col={6}>
          <Input placeholder={'Origem'} />
        </Row>
        <Row col={6}>
          <Input placeholder={'Destino'} />
        </Row>
      </Grid>

      <Grid>
        <Row col={6}>
          <Input placeholder={'Tempo de Permanência'} />
        </Row>

        <Row col={6}>
          <Button primary bigger>
            + Adicionar
          </Button>
        </Row>
      </Grid>
    </>
  )
}

export default HomePage
