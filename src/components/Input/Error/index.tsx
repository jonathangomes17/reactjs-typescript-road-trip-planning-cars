import React from 'react'
import RTPCInputError from './styles'
import IInput from '../types'

const InputError: React.FC<IInput> = (props) => {
  return <RTPCInputError {...props} />
}

export default InputError
