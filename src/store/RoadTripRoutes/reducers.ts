import { IState, IAction } from './types'

const roadTripRoutesReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'ADD_ROUTE':
      return { ...state, routes: [...state.routes, action.payload.route] }
    default:
      return state
  }
}

export default roadTripRoutesReducer
