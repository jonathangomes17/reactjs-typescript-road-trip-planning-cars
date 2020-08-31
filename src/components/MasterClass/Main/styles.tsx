import React from 'react'
import styled from 'styled-components'

const BaseMain = styled.main`
  padding: 0 10rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

const RTPCMain: React.FC = (props) => {
  return <BaseMain {...props}>{props.children}</BaseMain>
}

export default RTPCMain
