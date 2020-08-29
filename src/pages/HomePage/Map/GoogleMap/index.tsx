import React from 'react'

import { GoogleMap, LoadScript } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '400px',
}

const center = {
  lat: -12.999146,
  lng: -50.097394,
}

const GoogleMaps: React.FC = () => {
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // @ts-ignore
    const bounds = new window.google.maps.LatLngBounds()
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <LoadScript googleMapsApiKey={'AIzaSyDX3HTIsk87Bi4CFYJ2tUSXkAQcSM_BUpA'}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={4}>
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(GoogleMaps)
