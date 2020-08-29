import React from 'react'
import styled from 'styled-components'

const BaseHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px lightgray;
  transition: top 1s linear;

  > h1 {
    font-size: 3rem;
    margin: 1rem 0;
    color: #767593;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      color: white;
      margin: 0;
    }

    @media (max-width: 320px) {
      font-size: 1rem;
      color: white;
    }
  }

  > svg {
    margin-right: 1rem;

    @media (max-width: 320px) {
      height: 40px;
      width: 40px;
    }
  }

  @media (max-width: 768px) {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #767593;
    border: none;
    height: 60px;
  }
`

const RTPCHeader: React.FC = (props) => {
  return <BaseHeader {...props}>{props.children}</BaseHeader>
}

export default RTPCHeader
