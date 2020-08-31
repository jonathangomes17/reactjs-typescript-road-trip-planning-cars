import { Dispatch } from 'react'

import { IRoadTripRoutes, IAction } from './types'

const addRoute = (dispatch: Dispatch<IAction>, payload: IRoadTripRoutes) => {
  dispatch({
    type: 'ADD_ROUTE',
    payload: { route: payload },
  })
}

const removeRoute = (dispatch: Dispatch<IAction>, routeId: string) => {
  dispatch({
    type: 'REMOVE_ROUTE',
    payload: { route: { id: routeId, origin: null, destination: null, matrix: null, climate: null, stay: null } },
  })
}

export { addRoute, removeRoute }
