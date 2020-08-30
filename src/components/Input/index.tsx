import React from 'react'
import RTPCInput from './styles'
import RTPCInputError from './Error/styles'
import IInput from './types'

const Input: React.FC<IInput> = (props) => {
  if (props.error?.dispatch) {
    return <RTPCInputError {...props} />
  }

  return <RTPCInput {...props} />
}

export default Input
