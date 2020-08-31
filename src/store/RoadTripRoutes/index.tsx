import React, { createContext, useReducer } from 'react'

import { IState } from './types'

import roadTripRoutesReducer from './reducers'

import { getCookie } from '../../helpers/cookie'

const routes = getCookie('_rtpcRoutes', true) || []

console.log('CONTEXT!', routes)

const initialState: IState = { routes: routes }

// const initialState: IState = {
//   routes: [
//     {
//       id: '75442486-0878-440c-9db1-a7006c25a39f',
//       origin: {
//         address: 'Rua Salvador 718',
//         lat: -26.8016998,
//         lng: -48.6175719,
//       },
//       destination: {
//         address: '',
//         lat: -25.4525687,
//         lng: -49.2225492,
//       },
//       matrix: {
//         distance: {
//           text: '124 mi',
//           value: 198976,
//         },
//         duration: {
//           text: '2 horas 35 minutos',
//           value: 9311,
//         },
//       },
//     },
//     {
//       id: '75442486-0878-440c-9db1-a7006c25a39f',
//       origin: {
//         address: '',
//         lat: -25.4525687,
//         lng: -49.2225492,
//       },
//       destination: {
//         address: '',
//         lat: -27.4525687,
//         lng: -55.2225492,
//       },
//       matrix: {
//         distance: {
//           text: '124 mi',
//           value: 198976,
//         },
//         duration: {
//           text: '2 horas 35 minutos',
//           value: 9311,
//         },
//       },
//     },
//     {
//       id: '75442486-0878-440c-9db1-a7006c25a39f',
//       origin: {
//         address: '',
//         lat: -27.4525687,
//         lng: -55.2225492,
//       },
//       destination: {
//         address: '',
//         lat: -29.395277,
//         lng: -50.879172,
//       },
//       matrix: {
//         distance: {
//           text: '124 mi',
//           value: 198976,
//         },
//         duration: {
//           text: '2 horas 35 minutos',
//           value: 9311,
//         },
//       },
//     },
//   ],
// }

const RoadTripRoutesContext = createContext<IState[] | any>(initialState)

const RoadTripRoutesProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(roadTripRoutesReducer, initialState)

  return <RoadTripRoutesContext.Provider value={{ state, dispatch }}>{children}</RoadTripRoutesContext.Provider>
}

export default RoadTripRoutesProvider

export { RoadTripRoutesContext }
