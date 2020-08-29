import React from 'react'
import styled from 'styled-components'

const BaseHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;

  > h1 {
    font-size: 2rem;
    margin: 1rem 0;
    color: #767593;
  }

  > svg {
    margin-right: 1rem;
  }
`

const RTPCHeader: React.FC = (props) => {
  return <BaseHeader {...props}>{props.children}</BaseHeader>
}

export default RTPCHeader
