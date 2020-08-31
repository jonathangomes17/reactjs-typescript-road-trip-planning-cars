import React, { useContext } from 'react'
import { RoadTripRoutesContext } from '../../../../../../store/RoadTripRoutes'
import { removeRoute } from '../../../../../../store/RoadTripRoutes/actions'
import Button from '../../../../../../components/Button'

interface IBox {
  id: string
  address?: string
  hour?: string
  climate?: object | null
  stay?: string | null
  closeBox: Function
}

const Box: React.FC<IBox> = (props) => {
  const { dispatch } = useContext(RoadTripRoutesContext)

  const { address } = props
  const { hour } = props
  const { climate }: any = props
  const { weather, temperature } = climate
  const { stay } = props
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
          height: '100px',
          width: '300px',
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
          Previsão do tempo:
          <strong>
            {weather} ({temperature}º)
          </strong>
        </span>

        <span>
          Tempo de permanência: <strong>{stay}</strong>
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
