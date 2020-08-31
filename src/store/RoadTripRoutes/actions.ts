import { Dispatch } from 'react'

import { IRoadTripRoutes, IAction } from './types'

const addRoute = (dispatch: Dispatch<IAction>, payload: IRoadTripRoutes) => {
  dispatch({
    type: 'ADD_ROUTE',
    payload: { route: payload },
  })
}

const removeRoute = (dispatch: Dispatch<IAction>, routeId: number) => {
  dispatch({
    type: 'REMOVE_ROUTE',
    payload: { route: { id: routeId, origin: null, destination: null, matrix: null } },
  })
}

export { addRoute, removeRoute }
