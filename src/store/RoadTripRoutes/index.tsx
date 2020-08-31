import React, { createContext, useReducer } from 'react'

import { IState } from './types'

import roadTripRoutesReducer from './reducers'

import { getCookie } from '../../helpers/cookie'

const routes = getCookie('_rtpcRoutes', true) || []

const initialState: IState = { routes: routes }

const RoadTripRoutesContext = createContext<IState[] | any>(initialState)

const RoadTripRoutesProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(roadTripRoutesReducer, initialState)

  return <RoadTripRoutesContext.Provider value={{ state, dispatch }}>{children}</RoadTripRoutesContext.Provider>
}

export default RoadTripRoutesProvider

export { RoadTripRoutesContext }
