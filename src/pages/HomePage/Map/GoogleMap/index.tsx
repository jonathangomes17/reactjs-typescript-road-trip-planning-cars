import React, { useContext, useState, useEffect } from 'react'

import { RoadTripRoutesContext } from '../../../../store/RoadTripRoutes'

import { GoogleMap, LoadScript, Marker, Polyline, InfoWindow } from '@react-google-maps/api'

import { IRoadTripRoutes } from '../../../../store/RoadTripRoutes/types'

import Markers from './Markers'

const containerStyle = {
  width: '100%',
  height: '400px',
}

const GoogleMaps: React.FC = () => {
  const [path, setPath] = useState([])

  const [center, setCenter] = useState({
    lat: -26.8016998,
    lng: -25.4525687,
  })

  const [zoom] = useState(5)

  const { state } = useContext(RoadTripRoutesContext)

  const { routes } = state

  useEffect(() => {
    if (routes.length === 0) return

    let pathListMount: any = []
    let centerLat = 0
    let centerLng = 0

    routes.map((route: IRoadTripRoutes) => {
      pathListMount.push(
        { lat: route.origin?.lat, lng: route.origin?.lng },
        { lat: route.destination?.lat, lng: route.destination?.lng },
      )

      let originLat = route.origin?.lat || 0
      let destinationLat = route.destination?.lat || 0
      let originLng = route.origin?.lng || 0
      let destinationLng = route.destination?.lng || 0

      centerLat += originLat + destinationLat
      centerLng += originLng + destinationLng

      return route
    })

    setCenter({
      lat: centerLat / (routes.length * 2),
      lng: centerLng / (routes.length * 2),
    })

    setPath(pathListMount)
  }, [routes])

  return (
    <>
      {routes.length > 0 && (
        <LoadScript googleMapsApiKey={'AIzaSyDX3HTIsk87Bi4CFYJ2tUSXkAQcSM_BUpA'}>
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
            <Polyline
              key={'GMPolyline0001'}
              path={path}
              options={{
                strokeColor: '#767593',
                strokeOpacity: 0.75,
                strokeWeight: 5,
                icons: [
                  {
                    icon: '',
                    offset: '0',
                    repeat: '20px',
                  },
                ],
              }}
            />
            <Markers />
          </GoogleMap>
        </LoadScript>
      )}
    </>
  )
}

export default React.memo(GoogleMaps)
