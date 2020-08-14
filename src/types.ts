export type Value = string | number

type Border =
  | string
  | {
      size: Value
      color: string
      style: "solid" | "dashed" | "dotted"
    }

type Overflow = "auto" | "hidden" | "scroll" | "visible" | "initial" | "inherit"

type Background = string

type Edges = {
  top?: Value
  right?: Value
  bottom?: Value
  left?: Value
  vertical?: Value
  horizontal?: Value
}

export type BackgroundProp = Background

export type AlignProp =
  | "start"
  | "center"
  | "end"
  | "baseline"
  | "stretch"
  | "initial"
  | "inherit"

export type AlignContentProp =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "stretch"
  | "initial"
  | "inherit"

export type JustifyProp =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "initial"
  | "inherit"

export type MarginProp = "inherit" | "auto" | Value | Edges

export type PaddingProp = "inherit" | "auto" | Value | Edges

export type BorderProp =
  | Border
  | {
      top?: Border
      right?: Border
      bottom?: Border
      left?: Border
    }

export type BasisProp = Value | "auto" | "initial" | "inherit"

export type GrowProp = number | "initial" | "inherit"

export type ShrinkProp = number | "initial" | "inherit"

export type WrapProp = boolean

export type DirectionProp = "row" | "column"

export type ShadowProp = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"

export type FillProp = "horizontal" | "vertical" | boolean

export type GutterProp = Value

export type HeightProp = Value | { min?: Value; max?: Value }

export type WidthProp = Value | { min?: Value; max?: Value }

export type OverflowProp = Overflow | { x?: Overflow; y?: Overflow }

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

export type SelfProp =
  | "auto"
  | "stretch"
  | "center"
  | "start"
  | "end"
  | "baseline"
  | "initial"
  | "inherit"
