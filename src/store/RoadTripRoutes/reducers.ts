import { IState, IAction } from './types'
import { setCookie } from '../../helpers/cookie'

const roadTripRoutesReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'ADD_ROUTE':
      let newState = { ...state, routes: [...state.routes, action.payload.route] }

      setCookie('_rtpcRoutes', JSON.stringify(newState.routes), 900)

      return newState
    case 'REMOVE_ROUTE':
      let newRouteDestination: any = null
      let indexModifyOrigin = -1

      let newRoutes = state.routes.filter((route, index) => {
        if (route.id === action.payload.route.id) {
          newRouteDestination = state.routes[index === 0 ? 0 : index - 1]
          indexModifyOrigin = index + 1
          return null
        }

        if (indexModifyOrigin === index) {
          route.origin = newRouteDestination.destination
        }

        return route
      })

      setCookie('_rtpcRoutes', JSON.stringify(newRoutes), 900)

      return { ...state, routes: newRoutes }
    default:
      return state
  }
}

export default roadTripRoutesReducer
