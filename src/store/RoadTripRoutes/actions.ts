import { Dispatch } from 'react'
import { IRoadTripRoutes, IAction } from './types'

const addRoute = (dispatch: Dispatch<IAction>, payload: IRoadTripRoutes) => {
  dispatch({
    type: 'ADD_ROUTE',
    payload: { route: payload },
  })
}

export { addRoute }
