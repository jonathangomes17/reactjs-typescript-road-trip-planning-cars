interface IOriginAndDestination {
  address: string
  lat: number
  lng: number
}

interface IMatrix {
  distance: {
    text: string
    value: number
  }
  duration: {
    text: string
    value: number
  }
}

export interface IRoadTripRoutes {
  id: number
  origin: IOriginAndDestination | null
  destination: IOriginAndDestination | null
  matrix: IMatrix | null
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
