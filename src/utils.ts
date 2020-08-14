import { css } from "styled-components"

import {
  Value,
  JustifyProp,
  AlignProp,
  BorderProp,
  MarginProp,
  WidthProp,
  BackgroundProp,
  HeightProp,
  PaddingProp,
  ShadowProp,
  DirectionProp,
  AlignContentProp,
  SelfProp,
  BasisProp,
  GrowProp,
  ShrinkProp,
  OverflowProp,
  RadiusProp,
  WrapProp,
} from "./types"

const FlexMap: { [key: string]: string } = {
  start: "flex-start",
  end: "flex-end",
  stretch: "stretch",
  baseline: "baseline",
  initial: "initial",
  inherit: "inherit",
  center: "flex-end",
  between: "space-between",
  around: "space-around",
  auto: "auto",
}

export const renderWrap = (wrap: WrapProp) => {
  if (wrap)
    return css`
      flex-wrap: wrap;
    `

  return css`
    flex-wrap: nowrap;
  `
}

export const renderOverflow = (overflow: OverflowProp) => {
  if (typeof overflow === "string") {
    return css`
      overflow: ${overflow};
    `
  }

  if (typeof overflow === "object") {
    return Object.keys(overflow).map((key, index) => {
      const value = Object.values(overflow)[index]

      if (typeof value === "undefined") return css``

      switch (key) {
        case "x": {
          return css`
            overflow-x: ${value};
          `
        }
        case "y": {
          return css`
            overflow-y: ${value};
          `
        }
        default: {
          return css``
        }
      }
    })
  }
}

export const renderRadius = (radius: RadiusProp) => {
  if (typeof radius === "string" || typeof radius === "number") {
    return css`
      border-radius: ${renderValue(radius)};
    `
  }

  if (typeof radius === "object") {
    return Object.keys(radius).map((key, index) => {
      const value = Object.values(radius)[index]

      if (typeof value === "undefined") return css``

      switch (key) {
        case "top": {
          return css`
            border-top-left-radius: ${renderValue(value)};
            border-top-right-radius: ${renderValue(value)};
          `
        }
        case "right": {
          return css`
            border-top-right-radius: ${renderValue(value)};
            border-bottom-right-radius: ${renderValue(value)};
          `
        }
        case "bottom": {
          return css`
            border-bottom-right-radius: ${renderValue(value)};
            border-bottom-left-radius: ${renderValue(value)};
          `
        }
        case "left": {
          return css`
            border-top-left-radius: ${renderValue(value)};
            border-bottom-left-radius: ${renderValue(value)};
          `
        }
        case "topLeft": {
          return css`
            border-top-left-radius: ${renderValue(value)};
          `
        }
        case "topRight": {
          return css`
            border-top-right-radius: ${renderValue(value)};
          `
        }
        case "bottomLeft": {
          return css`
            border-bottom-left-radius: ${renderValue(value)};
          `
        }
        case "bottomRight": {
          return css`
            border-bottom-right-radius: ${renderValue(value)};
          `
        }
        default: {
          return css``
        }
      }
    })
  }
}

export const renderGrow = (grow: GrowProp) => {
  return css`
    flex-grow: ${grow};
  `
}

export const renderShrink = (shrink: ShrinkProp) => {
  return css`
    flex-shrink: ${shrink};
  `
}

export const renderBasis = (basis: BasisProp) => {
  return css`
    flex-basis: ${renderValue(basis)};
  `
}

export const renderAlign = (align: AlignProp) => {
  return css`
    align-items: ${FlexMap[align]};
  `
}

export const renderAlignContent = (alignContent: AlignContentProp) => {
  return css`
    align-content: ${FlexMap[alignContent]};
  `
}

export const renderJustify = (justify: JustifyProp) => {
  return css`
    justify-content: ${FlexMap[justify]};
  `
}

export const renderSelf = (self: SelfProp) => {
  return css`
    align-self: ${FlexMap[self]};
  `
}

export const renderValue = (value: Value): string => {
  if (typeof value === "number") {
    return `${value}px`
  }

  return value
}

export const renderDirection = (direction: DirectionProp) => {
  return css`
    flex-direction: ${direction};
  `
}

export const renderShadow = (shadow: ShadowProp) => {
  switch (shadow) {
    case "xxs": {
      return css`
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
      `
    }
    case "xs": {
      return css`
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      `
    }
    case "sm": {
      return css`
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 2px 0 rgba(0, 0, 0, 0.06);
      `
    }
    case "md": {
      return css`
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
      `
    }
    case "lg": {
      return css`
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
      `
    }
    case "xl": {
      return css`
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
      `
    }
    case "xxl": {
      return css`
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      `
    }
    default: {
      return null
    }
  }
}

const renderSubBorder = (prop: string, border: BorderProp) => {
  let borderCSS: string

  if (typeof border === "string") {
    borderCSS = `border-${prop}: ${border};`

    return css`
      ${borderCSS}
    `
  }

  if (typeof border === "object") {
    return Object.keys(border).map((key, index) => {
      const value = Object.values(border)[index]

      if (typeof value === "undefined") return css``

      borderCSS = `border-${prop}-${key}: ${renderValue(value)};`

      switch (key) {
        case "size": {
          return css`
            ${borderCSS}
          `
        }
        case "color": {
          return css`
            ${borderCSS}
          `
        }
        case "style": {
          return css`
            ${borderCSS}
          `
        }
        default: {
          return css``
        }
      }
    })
  }
}

export const renderBorder = (border: BorderProp) => {
  if (typeof border === "string") {
    return css`
      border: ${border};
    `
  }

  if (typeof border === "object") {
    return Object.keys(border).map((key, index) => {
      const value = Object.values(border)[index]

      if (typeof value === "undefined") return css``

      switch (key) {
        case "size": {
          return css`
            border-width: ${renderValue(value)};
          `
        }
        case "color": {
          return css`
            border-color: ${value};
          `
        }
        case "style": {
          return css`
            border-style: ${value};
          `
        }
        case "top": {
          return renderSubBorder("top", value)
        }
        case "right": {
          return renderSubBorder("right", value)
        }
        case "bottom": {
          return renderSubBorder("bottom", value)
        }
        case "left": {
          return renderSubBorder("left", value)
        }
        default: {
          return css``
        }
      }
    })
  }
}

export const renderMargin = (margin: MarginProp) => {
  if (typeof margin === "string" || typeof margin === "number") {
    return css`
      margin: ${renderValue(margin)};
    `
  }

  if (typeof margin === "object") {
    return Object.keys(margin).map((key, index) => {
      const value = Object.values(margin)[index]

      if (typeof value === "undefined") return css``

      switch (key) {
        case "top": {
          return css`
            margin-top: ${renderValue(value)};
          `
        }
        case "right": {
          return css`
            margin-right: ${renderValue(value)};
          `
        }
        case "bottom": {
          return css`
            margin-bottom: ${renderValue(value)};
          `
        }
        case "left": {
          return css`
            margin-left: ${renderValue(value)};
          `
        }
        case "vertical": {
          return css`
            margin-top: ${renderValue(value)};
            margin-bottom: ${renderValue(value)};
          `
        }
        case "horizontal": {
          return css`
            margin-right: ${renderValue(value)};
            margin-left: ${renderValue(value)};
          `
        }
        default: {
          return css``
        }
      }
    })
  }
}

export const renderPadding = (padding: PaddingProp) => {
  if (typeof padding === "string" || typeof padding === "number") {
    return css`
      padding: ${renderValue(padding)};
    `
  }

  if (typeof padding === "object") {
    return Object.keys(padding).map((key, index) => {
      const value = Object.values(padding)[index]

      if (typeof value === "undefined") return css``

      switch (key) {
        case "top": {
          return css`
            padding-top: ${renderValue(value)};
          `
        }
        case "right": {
          return css`
            padding-right: ${renderValue(value)};
          `
        }
        case "bottom": {
          return css`
            padding-bottom: ${renderValue(value)};
          `
        }
        case "left": {
          return css`
            padding-left: ${renderValue(value)};
          `
        }
        case "vertical": {
          return css`
            padding-top: ${renderValue(value)};
            padding-bottom: ${renderValue(value)};
          `
        }
        case "horizontal": {
          return css`
            padding-right: ${renderValue(value)};
            padding-left: ${renderValue(value)};
          `
        }
        default: {
          return css``
        }
      }
    })
  }
}

export const renderBackground = (background: BackgroundProp) => {
  return css`
    background: ${background};
  `
}

export const renderWidth = (width: WidthProp) => {
  if (typeof width === "string" || typeof width === "number") {
    return css`
      width: ${renderValue(width)};
    `
  }

  if (typeof width === "object") {
    return Object.keys(width).map((key, index) => {
      const value = Object.values(width)[index]

      if (typeof value === "undefined") return css``

      switch (key) {
        case "min": {
          return css`
            min-width: ${renderValue(value)};
          `
        }
        case "max": {
          return css`
            max-width: ${renderValue(value)};
          `
        }
        default: {
          return css``
        }
      }
    })
  }
}

export const renderHeight = (height: HeightProp) => {
  if (typeof height === "string" || typeof height === "number") {
    return css`
      height: ${renderValue(height)};
    `
  }

  if (typeof height === "object") {
    return Object.keys(height).map((key, index) => {
      const value = Object.values(height)[index]

      if (typeof value === "undefined") return css``

      switch (key) {
        case "min": {
          return css`
            min-height: ${renderValue(value)};
          `
        }
        case "max": {
          return css`
            max-height: ${renderValue(value)};
          `
        }
        default: {
          return css``
        }
      }
    })
  }
}
