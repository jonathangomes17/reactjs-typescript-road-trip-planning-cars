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
  const [marker, setMarker] = useState('')

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

    console.log('ROUTES', routes)

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

  // const handleMarker = (index: number) => {
  //   console.log('Marker!')
  //   setMarker(label[index])
  // }

  // const handleInfoWindowClose = (route: IRoadTripRoutes) => {
  //   setMarker('')
  // }

  // const onLoad = React.useCallback(function callback(map) {
  //   // @ts-ignore
  //   //const bounds = new window.google.maps.LatLngBounds()
  //   //map.fitBounds(bounds)
  //   //setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])

  console.log(routes)

  return (
    <LoadScript googleMapsApiKey={'AIzaSyDX3HTIsk87Bi4CFYJ2tUSXkAQcSM_BUpA'}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
        <Polyline
          key={'Polyline!'}
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
        <Markers key={'MarkersPlannig'} />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(GoogleMaps)
// export default GoogleMaps
