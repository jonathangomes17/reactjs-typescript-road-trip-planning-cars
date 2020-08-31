import React, { useState, useContext } from 'react'

// Stores
import { RoadTripRoutesContext } from '../../../store/RoadTripRoutes'

// Components
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import Grid from '../../../components/Grid'
import Row from '../../../components/Grid/Row'

// Api
import { getLatLng, getDistanceMatrix } from '../../../api'
import { addRoute } from '../../../store/RoadTripRoutes/actions'

const Form: React.FC = (props) => {
  const { state, dispatch } = useContext(RoadTripRoutesContext)

  const { routes } = state

  const [loading, setLoading] = useState(0)

  const [inputOrigin, setInputOrigin] = useState({
    id: 'origin',
    placeholder: 'Origem',
    defaultValue: '',
    disabled: true,
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

  const handleAddRoute = async () => {
    setLoading(1)

    const origin = document.getElementById('origin') as HTMLInputElement
    const destination = document.getElementById('destination') as HTMLInputElement
    const timeOfStay = document.getElementById('time-of-stay') as HTMLInputElement

    setInputOrigin({
      ...inputOrigin,
      defaultValue: origin.value,
      error: { ...inputOrigin.error, dispatch: !origin.value },
    })

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

    if (!origin.value || !destination.value || !timeOfStay.value) {
      setLoading(0)
      return
    }

    const responseOrigin = await getLatLng('Rua Salvador 178 Cajuru Parana,+BR')
    const locationOrigin = responseOrigin.results[0].geometry.location

    const responseDestination = await getLatLng('Beto Carrero,+BR')
    const locationDestination = responseDestination.results[0].geometry.location

    const distanceMatrix = await getDistanceMatrix(locationOrigin, locationDestination)

    addRoute(dispatch, {
      id: Math.random(),
      origin: {
        address: origin.value,
        ...responseOrigin.results[0].geometry.location,
      },
      destination: {
        address: destination.value,
        ...responseDestination.results[0].geometry.location,
      },
      matrix: {
        distance: distanceMatrix.rows[0].elements[0].distance,
        duration: distanceMatrix.rows[0].elements[0].duration,
      },
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
