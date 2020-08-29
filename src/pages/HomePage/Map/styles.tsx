import React from 'react'
import styled from 'styled-components'

const BaseMap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  background-color: #f7f7f7;
  margin-top: 1rem;
`

const RTPCMap: React.FC = (props) => {
  return <BaseMap {...props}>{props.children}</BaseMap>
}

export default RTPCMap
