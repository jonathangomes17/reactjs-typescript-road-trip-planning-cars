import React, { useContext, useState, useEffect } from 'react'

import { RoadTripRoutesContext } from '../../../../store/RoadTripRoutes'

import { GoogleMap, LoadScript, Marker, Polyline } from '@react-google-maps/api'

import { IRoadTripRoutes } from '../../../../store/RoadTripRoutes/types'

const containerStyle = {
  width: '100%',
  height: '400px',
}

const label = 'ABCDEFGH'

const GoogleMaps: React.FC = () => {
  // const [map, setMap] = React.useState(null)

  const [path, setPath] = useState([])

  const [center, setCenter] = useState({
    lat: -26.8016998,
    lng: -25.4525687,
  })

  const [zoom] = useState(6.486662934691841)

  const { state } = useContext(RoadTripRoutesContext)

  const { routes } = state

  useEffect(() => {
    let pathListMount: any = []
    let centerLat = 0
    let centerLng = 0
    // let distance = 0

    routes.map((route: IRoadTripRoutes) => {
      pathListMount.push(
        { lat: route.origin.lat, lng: route.origin.lng },
        { lat: route.destination.lat, lng: route.destination.lng },
      )

      centerLat += route.origin.lat + route.destination.lat
      centerLng += route.origin.lng + route.destination.lng
      // distance += route.matrix.distance.value

      return route
    })

    setCenter({
      lat: centerLat / (routes.length * 2),
      lng: centerLng / (routes.length * 2),
    })

    //setZoom(calcZoom(distance))

    setPath(pathListMount)
  }, [routes])

  // const calcZoom = (distance: number) => {
  //   var zoomLevel = ((256 * distance) / 40000000) * 2
  //   return Math.pow(zoomLevel, 2)
  // }

  const handleMarker = (route: IRoadTripRoutes) => {
    console.log(route)
  }

  // const onLoad = React.useCallback(function callback(map) {
  //   // @ts-ignore
  //   //const bounds = new window.google.maps.LatLngBounds()
  //   //map.fitBounds(bounds)
  //   //setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])

  return (
    <LoadScript googleMapsApiKey={'AIzaSyDX3HTIsk87Bi4CFYJ2tUSXkAQcSM_BUpA'}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
        <Polyline
          key={'Poly!'}
          path={path}
          options={{
            strokeColor: '#767593',
            strokeOpacity: 1,
            strokeWeight: 3,
            icons: [
              {
                icon: '',
                offset: '0',
                repeat: '20px',
              },
            ],
          }}
        />

        {routes.map((route: IRoadTripRoutes, index: number) => (
          <React.Fragment key={index}>
            <Marker
              key={`marker${label[index]}`}
              label={label[index]}
              options={{
                strokeColor: '#767593',
              }}
              position={{
                lat: route.origin.lat,
                lng: route.origin.lng,
              }}
              onLoad={() => handleMarker}
            />

            <Marker
              key={`marker${label[index + 1]}`}
              label={label[index + 1]}
              position={{
                lat: route.destination.lat,
                lng: route.destination.lng,
              }}
            />
          </React.Fragment>
        ))}
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(GoogleMaps)
