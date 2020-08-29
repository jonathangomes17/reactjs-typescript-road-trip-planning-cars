import React from 'react'
import styled from 'styled-components'

const BaseHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 2rem;
    margin: 1rem 0;
    color: #7e7e7e;
    border-bottom: solid 0.5rem grey;
  }

  > svg {
    margin-right: 1rem;
  }
`

const RTPCHeader: React.FC = (props) => {
  return <BaseHeader {...props}>{props.children}</BaseHeader>
}

export default RTPCHeader
