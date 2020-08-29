import React from 'react'
import RTPCHeader from './styles'
import { ReactComponent as Logo } from '../../assets/logo.svg'

const Header = () => {
  return (
    <RTPCHeader>
      <Logo />
      <h1>Road Trip Planning Cars</h1>
    </RTPCHeader>
  )
}

export default Header
