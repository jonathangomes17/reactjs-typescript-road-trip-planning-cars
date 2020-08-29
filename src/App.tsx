import React from 'react'
import Button from './components/Button'
import GlobalStyles from './styles'
import Header from './containers/Header'

function App() {
  return (
    <>
      <GlobalStyles />

      <Header />

      <Button primary bigger>
        Traçar melhor rota
      </Button>
    </>
  )
}

export default App
