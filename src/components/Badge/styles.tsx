import React from 'react'
import styled from 'styled-components'

const Container = styled.span`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: 'tnum';
  position: relative;
  display: inline-block;
  line-height: 1;
  color: white;
`

const Count = styled.span`
  z-index: auto;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  color: #fff;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  text-align: center;
  border-radius: 10px;
  -webkit-box-shadow: 0 0 0 1px #fff;
  box-shadow: 0 0 0 1px #fff;
  background-color: #da7e81;
`

const RTPCBadge: React.FC = (props) => {
  return (
    <Container {...props}>
      <Count>{props.children}</Count>
    </Container>
  )
}

export default RTPCBadge
