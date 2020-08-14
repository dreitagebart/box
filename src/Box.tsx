import React, { Children, CSSProperties, ReactNode } from "react"
import styled from "styled-components"

import Gutter from "./Gutter"
import {
  BackgroundProp,
  MarginProp,
  AlignProp,
  AlignContentProp,
  BasisProp,
  JustifyProp,
  DirectionProp,
  BorderProp,
  ShadowProp,
  FillProp,
  GutterProp,
  HeightProp,
  WidthProp,
  RadiusProp,
  WrapProp,
  PaddingProp,
  OverflowProp,
  SelfProp,
  GrowProp,
  ShrinkProp,
} from "./types"
import {
  renderBorder,
  renderMargin,
  renderPadding,
  renderBackground,
  renderWidth,
  renderHeight,
  renderShadow,
  renderDirection,
  renderAlign,
  renderAlignContent,
  renderJustify,
  renderSelf,
  renderBasis,
  renderShrink,
  renderGrow,
  renderOverflow,
  renderRadius,
  renderWrap,
} from "./utils"

export interface BoxProps {
  style?: CSSProperties
  self?: SelfProp
  margin?: MarginProp
  align?: AlignProp
  alignContent?: AlignContentProp
  background?: BackgroundProp
  basis?: BasisProp
  border?: BorderProp
  direction?: DirectionProp
  shadow?: ShadowProp
  grow?: GrowProp
  shrink?: ShrinkProp
  gutter?: GutterProp
  height?: HeightProp
  justify?: JustifyProp
  onClick?: (...args: any[]) => any
  overflow?: OverflowProp
  padding?: PaddingProp
  radius?: RadiusProp
  width?: WidthProp
  wrap?: WrapProp
}

const Wrapper = styled.div<BoxProps>`
  display: flex;
  box-sizing: border-box;
  ${({ wrap }) => wrap && renderWrap(wrap)}
  ${({ overflow }) => overflow && renderOverflow(overflow)}
  ${({ radius }) => radius && renderRadius(radius)}
  ${({ grow }) => grow && renderGrow(grow)}
  ${({ shrink }) => shrink && renderShrink(shrink)}
  ${({ basis }) => basis && renderBasis(basis)}
  ${({ align }) => align && renderAlign(align)}
  ${({ alignContent }) => alignContent && renderAlignContent(alignContent)}
  ${({ justify }) => justify && renderJustify(justify)}
  ${({ self }) => self && renderSelf(self)}
  ${({ direction }) => direction && renderDirection(direction)}
  ${({ shadow }) => shadow && renderShadow(shadow)}
  ${({ border }) => border && renderBorder(border)}
  ${({ margin }) => margin && renderMargin(margin)}
  ${({ padding }) => padding && renderPadding(padding)}
  ${({ background }) => background && renderBackground(background)}
  ${({ width }) => width && renderWidth(width)}
  ${({ height }) => height && renderHeight(height)}
`

export const Box: React.FC<BoxProps> = ({
  radius,
  overflow,
  grow,
  shrink,
  style,
  basis,
  justify,
  align,
  alignContent,
  self,
  children,
  shadow,
  gutter,
  onClick,
  direction = "column",
  margin,
  padding,
  background,
  height,
  width,
  wrap,
  border,
}) => {
  let contents: any = children

  if (gutter) {
    contents = []

    let firstIndex: number

    Children.forEach(children, (child, index) => {
      if (child) {
        if (firstIndex === undefined) {
          firstIndex = index
        } else {
          contents.push(
            <Gutter
              key={`gutter-${index}`}
              gutter={gutter}
              direction={direction}
            />
          )
        }
      }
      contents.push(child)
    })
  }

  return (
    <Wrapper
      radius={radius}
      overflow={overflow}
      basis={basis}
      style={style}
      shadow={shadow}
      onClick={onClick}
      border={border}
      margin={margin}
      padding={padding}
      background={background}
      width={width}
      height={height}
      direction={direction}
      self={self}
      align={align}
      justify={justify}
      alignContent={alignContent}
      grow={grow}
      shrink={shrink}
      wrap={wrap}
    >
      {contents}
    </Wrapper>
  )
}
