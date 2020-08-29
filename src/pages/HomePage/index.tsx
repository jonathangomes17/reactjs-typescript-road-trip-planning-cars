import React from 'react'

// Components
import Button from '../../components/Button'
import Input from '../../components/Input'

function HomePage() {
  return (
    <>
      <h1>Home Page</h1>

      <Input placeholder={'Origem'} />
      <Input placeholder={'Destino'} />
      <Input placeholder={'Tempo de Permanência'} />

      <Button primary bigger>
        + Adicionar
      </Button>
    </>
  )
}

export default HomePage
