import React, { useContext, useState } from 'react'

import { RoadTripRoutesContext } from '../../../../../store/RoadTripRoutes'

import { IRoadTripRoutes } from '../../../../../store/RoadTripRoutes/types'

import { Marker, InfoWindow } from '@react-google-maps/api'

import Box from './Box'

const Markers: React.FC = () => {
  const { state } = useContext(RoadTripRoutesContext)

  const [markerFlagged, setMarkerFlagged] = useState('')

  const { routes } = state

  const labelByFlagName = 'ABCDEFGHIJLMNOPQRSTUVWXYZ'

  const handleMarker = (marker: string) => {
    if (markerFlagged) {
      handleClose()
      return
    }

    setMarkerFlagged(`Marker${marker}`)
  }

  const handleClose = () => {
    setMarkerFlagged('')
  }

  return (
    <>
      {routes &&
        routes.map((route: IRoadTripRoutes, index: number) => {
          let initialMarker = null

          const flagName = labelByFlagName[index + 1]
          const keyFlagName = `Marker${flagName}`

          const markers = {
            key: keyFlagName,
            label: flagName,
            position: {
              lat: route.destination?.lat,
              lng: route.destination?.lng,
            },
            onClick: () => handleMarker(flagName),
          }

          const box = {
            id: route.id,
            key: `MarkerBox${flagName}`,
            address: route.destination?.address,
            hour: route.matrix?.duration,
            climate: route.climate,
            stay: route.stay,
            closeBox: handleClose,
          }

          if (index === 0) {
            initialMarker = (
              <Marker
                key={'MarkerA'}
                label={'A'}
                position={{
                  lat: route.origin?.lat,
                  lng: route.origin?.lng,
                }}
              />
            )
          }

          return (
            <React.Fragment key={`RF${keyFlagName}`}>
              {initialMarker}
              <Marker {...markers}>
                {markerFlagged === keyFlagName && (
                  <InfoWindow key={`InfoWindowKey${keyFlagName}`} onCloseClick={handleClose}>
                    <Box {...box} />
                  </InfoWindow>
                )}
              </Marker>
            </React.Fragment>
          )
        })}
    </>
  )
}

export default Markers
