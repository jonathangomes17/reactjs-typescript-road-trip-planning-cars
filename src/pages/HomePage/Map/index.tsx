import React from 'react'
import RTPCMap from './styles'
// import Animation from './Animation'
import GoogleMaps from './GoogleMap'

const Map: React.FC = (props) => {
  return (
    <RTPCMap>
      {/* <Animation /> */}
      <GoogleMaps />
    </RTPCMap>
  )
}

export default Map
