interface IOriginAndDestination {
  address: string
  lat: number
  lng: number
}

interface IMatrix {
  distance: number
  duration: string
}

interface IClimate {
  temperature: number
  weather: string
}

export interface IRoadTripRoutes {
  id: string
  origin: IOriginAndDestination | null
  destination: IOriginAndDestination | null
  matrix: IMatrix | null
  climate: IClimate | null
  stay: string | null
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
