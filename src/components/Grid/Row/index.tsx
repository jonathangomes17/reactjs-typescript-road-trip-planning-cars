import React from 'react'
import RTPCRow from './styles'
import IRow from './types'

const Row: React.FC<IRow> = (props) => {
  return <RTPCRow {...props}>{props.children}</RTPCRow>
}

export default Row
