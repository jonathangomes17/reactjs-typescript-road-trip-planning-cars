import React from 'react'

import Form from './Form'
import Map from './Map'

import RoadTripRoutesProvider from '../../store/RoadTripRoutes'

function HomePage() {
  return (
    <>
      <h2>Planejando viajar de carro? Nós temos a melhor rota para você \o/</h2>

      <RoadTripRoutesProvider>
        <Form />
        <Map />
      </RoadTripRoutesProvider>
    </>
  )
}

export default HomePage
