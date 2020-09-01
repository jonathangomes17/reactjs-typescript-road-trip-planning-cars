import React from 'react'
import RTPCBadge from './styles'

const Badge: React.FC = (props) => {
  return <RTPCBadge {...props}>{props.children}</RTPCBadge>
}

export default Badge
