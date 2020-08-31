import React, { useState, useContext } from 'react'

import { v4 as uuidv4 } from 'uuid'

// Stores
import { RoadTripRoutesContext } from '../../../store/RoadTripRoutes'

// Components
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import Grid from '../../../components/Grid'
import Row from '../../../components/Grid/Row'

// Api
import { getLatLng, getDistanceMatrix, getClimate } from '../../../api'
import { addRoute } from '../../../store/RoadTripRoutes/actions'

const Form: React.FC = () => {
  const { state, dispatch } = useContext(RoadTripRoutesContext)

  const { routes } = state

  const [loading, setLoading] = useState(0)

  const [inputOrigin, setInputOrigin] = useState({
    id: 'origin',
    placeholder: 'Origem',
    defaultValue: '',
    disabled: routes.length > 0,
    error: {
      message: 'Origem precisa ser preenchido',
      dispatch: false,
    },
  })

  const [inputDestination, setInputDestionation] = useState({
    id: 'destination',
    placeholder: 'Destino',
    defaultValue: '',
    error: {
      message: 'Destino precisa ser preenchido',
      dispatch: false,
    },
  })

  const [inputTimeOfStay, setInputTimeOfStay] = useState({
    id: 'time-of-stay',
    placeholder: 'Tempo de Permanência',
    defaultValue: '',
    error: {
      message: 'Tempo de viagem precisa ser preenchido',
      dispatch: false,
    },
  })

  /**
   * Busca o último destino de rota
   */
  const getLastDestinationInRoutes = (routes: any) => {
    if (routes && routes.length === 0) return null
    return routes.slice(-1).pop()['destination']
  }

  /**
   * Busca a cidade baseado no retorno de endereços do Google
   */
  const getCity = (addressComponents: string[]) => {
    const city: any = addressComponents.filter((address: any) => {
      return address.types[0] === 'administrative_area_level_1'
    })

    if (city.length === 0) return null

    return city[0].long_name
  }

  const getFormattedClimate = (actuallyClimate: any) => {
    if (!actuallyClimate) return null

    return {
      temperature: Math.floor(actuallyClimate.main.temp - 273.15),
      weather: actuallyClimate.weather[0].description,
    }
  }

  const getFormattedMatrix = (actuallyDistanceMatrix: any) => {
    if (!actuallyDistanceMatrix) return null

    const results = actuallyDistanceMatrix.rows[0].elements[0]

    if (results.status === 'ZERO_RESULTS') return null

    return {
      distance: parseFloat((results.distance.value / 1000 / 1000).toFixed(2)),
      duration: results.duration.text,
    }
  }

  const handleAddRoute = async () => {
    setLoading(1)

    const origin = document.getElementById('origin') as HTMLInputElement
    const destination = document.getElementById('destination') as HTMLInputElement
    const timeOfStay = document.getElementById('time-of-stay') as HTMLInputElement

    if (routes.length === 0) {
      setInputOrigin({
        ...inputOrigin,
        defaultValue: origin.value,
        error: { ...inputOrigin.error, dispatch: !origin.value },
      })
    }

    setInputDestionation({
      ...inputDestination,
      defaultValue: destination.value,
      error: { ...inputDestination.error, dispatch: !destination.value },
    })

    setInputTimeOfStay({
      ...inputTimeOfStay,
      defaultValue: timeOfStay.value,
      error: { ...inputTimeOfStay.error, dispatch: !timeOfStay.value },
    })

    if ((routes.length === 0 && !origin.value) || !destination.value || !timeOfStay.value) {
      setLoading(0)
      return
    }

    let locationOrigin = getLastDestinationInRoutes(routes)
    let addressOrigin = locationOrigin ? locationOrigin.address : null

    if (!locationOrigin) {
      const responseOrigin = await getLatLng(`${origin.value},+BR`)
      locationOrigin = responseOrigin.results[0].geometry.location
      addressOrigin = responseOrigin.results[0].formatted_address
    }

    const responseDestination = await getLatLng(`${destination.value},+BR`)
    const locationDestination = responseDestination.results[0].geometry.location

    const distanceMatrix = await getDistanceMatrix(locationOrigin, locationDestination)

    let city = getCity(responseDestination.results[0].address_components)

    const climate = await getClimate(city)

    addRoute(dispatch, {
      id: uuidv4(),
      origin: {
        address: addressOrigin,
        ...locationOrigin,
      },
      destination: {
        address: responseDestination.results[0].formatted_address,
        ...responseDestination.results[0].geometry.location,
      },
      matrix: getFormattedMatrix(distanceMatrix),
      climate: getFormattedClimate(climate),
      stay: timeOfStay.value,
    })

    setLoading(0)
  }

  return (
    <>
      <Grid>
        <Row col={6}>
          <Input {...inputOrigin} />
        </Row>
        <Row col={6}>
          <Input {...inputDestination} />
        </Row>
      </Grid>

      <Grid>
        <Row col={6}>
          <Input {...inputTimeOfStay} />
        </Row>

        <Row col={6}>
          <Button primary bigger onClick={handleAddRoute} loading={loading}>
            + Adicionar Rota
          </Button>
        </Row>
      </Grid>
    </>
  )
}

export default Form
