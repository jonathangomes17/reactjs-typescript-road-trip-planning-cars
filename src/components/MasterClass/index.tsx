import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const MasterClass: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default MasterClass
