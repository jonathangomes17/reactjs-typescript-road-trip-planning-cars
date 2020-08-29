import React from 'react'
import RTPCGrid from './styles'

const Grid: React.FC = (props) => {
  return <RTPCGrid {...props}>{props.children}</RTPCGrid>
}

export default Grid
