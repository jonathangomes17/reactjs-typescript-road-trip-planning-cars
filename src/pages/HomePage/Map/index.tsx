import React from 'react'

import RTPCMap from './styles'

import GoogleMaps from './GoogleMap'

const Map: React.FC = () => {
  return (
    <RTPCMap>
      <GoogleMaps key={'GM001'} />
    </RTPCMap>
  )
}

export default Map
