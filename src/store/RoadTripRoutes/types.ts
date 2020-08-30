export interface IRoadTripRoutes {
  origin: {
    address: string
    lat: number
    lng: number
  }
  destination: {
    address: string
    lat: number
    lng: number
  }
  matrix: {
    distance: {
      text: string
      value: number
    }
    duration: {
      text: string
      value: number
    }
  }
}

export interface IAction {
  type: string
  payload: {
    route: IRoadTripRoutes
  }
}

export interface IState {
  routes: IRoadTripRoutes[]
}
