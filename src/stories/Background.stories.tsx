import React from "react"
import { Story, Meta } from "@storybook/react"

import { Box, BoxProps } from "../Box"
import { Dreitagebart } from "./styled"

export default {
  title: "Box",
  component: Box,
} as Meta

const Template: Story<BoxProps> = () => {
  return (
    <Dreitagebart>
      <Box background="#efefef">I am the example content</Box>
    </Dreitagebart>
  )
}

export const Background = Template.bind({})
Background.storyName = "background"