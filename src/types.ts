export type Value = string | number

type Border =
  | string
  | {
      size: Value
      color: string
      style: 'solid' | 'dashed' | 'dotted'
    }

type Overflow = 'auto' | 'hidden' | 'scroll' | 'visible' | 'initial' | 'inherit'

type Background = string

type Edges = {
  top?: Value
  right?: Value
  bottom?: Value
  left?: Value
  vertical?: Value
  horizontal?: Value
}

export type BackgroundProp = Background | undefined

export type AlignProp =
  | 'start'
  | 'center'
  | 'end'
  | 'baseline'
  | 'stretch'
  | 'initial'
  | 'inherit'
  | undefined

export type AlignContentProp =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'stretch'
  | 'initial'
  | 'inherit'
  | undefined

export type JustifyProp =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'initial'
  | 'inherit'
  | undefined

export type MarginProp = 'inherit' | 'auto' | Value | Edges | undefined

export type PaddingProp = 'inherit' | 'auto' | Value | Edges | undefined

export type BorderProp =
  | Border
  | {
      top?: Border
      right?: Border
      bottom?: Border
      left?: Border
    }
  | undefined

export type BasisProp = Value | 'auto' | 'initial' | 'inherit' | undefined

export type GrowProp = number | 'initial' | 'inherit' | undefined

export type ShrinkProp = number | 'initial' | 'inherit' | undefined

export type WrapProp = boolean | undefined

export type DirectionProp = 'row' | 'column'

export type ShadowProp =
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | undefined

export type FillProp = 'horizontal' | 'vertical' | boolean | undefined

export type GutterProp = Value | undefined

export type HeightProp = Value | { min?: Value; max?: Value } | undefined

export type WidthProp = Value | { min?: Value; max?: Value } | undefined

export type OverflowProp = Overflow | { x?: Overflow; y?: Overflow } | undefined

export type RadiusProp =
  | Value
  | {
      top?: Value
      right?: Value
      bottom?: Value
      left?: Value
      topLeft?: Value
      topRight?: Value
      bottomLeft?: Value
      bottomRight?: Value
    }
  | undefined

export type SelfProp =
  | 'auto'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'baseline'
  | 'initial'
  | 'inherit'
  | undefined
