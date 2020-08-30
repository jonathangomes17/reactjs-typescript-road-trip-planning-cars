import React from 'react'
import styled, { css } from 'styled-components'
import IInput from '../types'
import { BaseInput } from '../styles'

const Container = styled.div`
  position: relative;
`

const Message = styled.span`
  color: #db8082;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
  font-weight: 600;
  position: absolute;
  top: -14px;
  z-index: 1;
  left: 0;

  @media (max-width: 768px) {
    position: initial;
  }
`

const InputError = styled(BaseInput)`
  ${(props: IInput) =>
    props.error?.dispatch &&
    css`
      border: solid 1px #db8082;
      margin-top: 0.25rem;
    `}
`

const RTPCInputError: React.FC<IInput> = (props) => {
  return (
    <>
      <Container>
        <Message>{props.error?.message}</Message>
        <InputError {...props} />
      </Container>
    </>
  )
}

export default RTPCInputError
