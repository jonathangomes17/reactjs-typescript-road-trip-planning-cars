import React from 'react'
import Loading from '../Loading'
import RTPCButton from './styles'
import IButton from './types'

const Button: React.FC<IButton> = (props) => {
  if (props.loading) {
    const disabled = true
    props = { disabled, ...props }
  }

  return (
    <RTPCButton {...props}>
      {props.loading && <Loading />}
      {props.children}
    </RTPCButton>
  )
}

export default Button
