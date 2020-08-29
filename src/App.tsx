import React from 'react'

// Global styles
import GlobalStyles from './styles'

// Containers
import Header from './containers/Header'
import Footer from './containers/Footer'

// Routes
import Routes from './routes'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes />
      <Footer />
    </>
  )
}

export default App
