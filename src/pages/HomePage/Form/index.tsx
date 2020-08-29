import React from 'react'

// Components
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import Grid from '../../../components/Grid'
import Row from '../../../components/Grid/Row'

const Form: React.FC = (props) => {
  return (
    <>
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
            + Adicionar Rota
          </Button>
        </Row>
      </Grid>
    </>
  )
}

export default Form
