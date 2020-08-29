import React from 'react'
import styled, { css } from 'styled-components'
import IRow from './types'

const BaseRow = styled.div`
  padding: 0 0.5rem;
  flex-basis: ${(props: IRow) => {
    switch (props.col) {
      case 6:
        return '50%'
    }
  }};
`

const RTPCRow: React.FC<IRow> = (props) => {
  return <BaseRow {...props}>{props.children}</BaseRow>
}

export default RTPCRow
