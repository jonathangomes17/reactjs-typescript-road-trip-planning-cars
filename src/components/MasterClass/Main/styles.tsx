import React from 'react'
import styled from 'styled-components'

const BaseMain = styled.main`
  padding: 0 10rem;
`

const RTPCMain: React.FC = (props) => {
  return <BaseMain {...props}>{props.children}</BaseMain>
}

export default RTPCMain
