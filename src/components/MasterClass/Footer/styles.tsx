import React from 'react'
import styled from 'styled-components'

const BaseFooter = styled.footer`
  height: 40px;
  background-color: #d6d6d6;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`

const RTPCFooter: React.FC = (props) => {
  return <BaseFooter {...props}>{props.children}</BaseFooter>
}

export default RTPCFooter
