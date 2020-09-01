import React from 'react'
import { RTPCFooter, RTPCFooterContainer } from './styles'
import Bagde from '../../Badge'

const Footer = () => {
  const text = `${process.env.REACT_APP_SHORTNAME} Version ${process.env.REACT_APP_TAG} (${process.env.REACT_APP_DESCRIPTION})`

  return (
    <RTPCFooter>
      <RTPCFooterContainer>
        <h5 style={{ wordBreak: 'break-all', marginRight: '3px' }}>{text}</h5>
        <Bagde>{process.env.REACT_APP_ENV}</Bagde>
      </RTPCFooterContainer>
    </RTPCFooter>
  )
}

export default Footer
