import React from 'react'
import styled, { css } from 'styled-components'

import { renderValue } from './utils'
import { GutterProp, DirectionProp, BorderProp } from './types'

interface Props {
  gutter: GutterProp
  direction: DirectionProp
}

const renderGutter = (gutter: GutterProp, direction: DirectionProp) => {
  if (typeof gutter === 'undefined')
    return css`
      width: 0;
    `

  if (direction === 'row') {
    return css`
      width: ${renderValue(gutter)};
    `
  } else {
    return css`
      height: ${renderValue(gutter)};
    `
  }
}

const Wrapper = styled.div<Props>`
  ${({ gutter, direction }) => renderGutter(gutter, direction)}
`

const Gutter: React.FC<Props> = ({ ...props }) => {
  return <Wrapper {...props}></Wrapper>
}

export default Gutter
