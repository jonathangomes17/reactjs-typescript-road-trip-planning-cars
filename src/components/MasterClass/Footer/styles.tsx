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

const Container = styled.div`
  padding: 0 10rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

const RTPCFooter: React.FC = (props) => {
  return <BaseFooter {...props}>{props.children}</BaseFooter>
}

const RTPCFooterContainer: React.FC = ({ children }) => {
  return <Container>{children}</Container>
}

export { RTPCFooter, RTPCFooterContainer }
