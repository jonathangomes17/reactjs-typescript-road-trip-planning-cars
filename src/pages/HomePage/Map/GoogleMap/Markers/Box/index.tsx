import React, { useContext } from 'react'
import { RoadTripRoutesContext } from '../../../../../../store/RoadTripRoutes'
import { removeRoute } from '../../../../../../store/RoadTripRoutes/actions'
import Button from '../../../../../../components/Button'

interface IBox {
  id: number
  address?: string
  hour?: string
  climate?: string
  closeBox: Function
}

const Box: React.FC<IBox> = (props) => {
  const { dispatch } = useContext(RoadTripRoutesContext)

  const { address } = props
  const { hour } = props
  const { climate } = props
  const { id } = props

  const handleRemoveRoute = <_, MouseEvent>(event: MouseEvent) => {
    props.closeBox()
    removeRoute(dispatch, id)
  }

  return (
    <>
      <span
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '80px',
          width: '200px',
        }}
      >
        <strong
          style={{
            display: 'flex',
            wordBreak: 'break-all',
            justifyContent: 'center',
          }}
        >
          {address}
        </strong>

        <span>
          Horário de chegada: <strong>{hour}</strong>
        </span>

        <span>
          Previsão do tempo: <strong>{climate}</strong>
        </span>

        <br />

        <Button primary onClick={handleRemoveRoute}>
          - Remover Rota
        </Button>
      </span>
    </>
  )
}

export default Box
