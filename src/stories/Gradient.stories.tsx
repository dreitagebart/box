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
      <Box background="linear-gradient(110.1deg, rgba(34,126,34,1) 2.9%, rgba(168,251,60,1) 90.3%)">
        Who is your god now
      </Box>
      <Box background="linear-gradient(113.7deg, rgba(90,173,173,1) 16.4%, rgba(0,0,0,1) 99.7%)">
        Who is your god now
      </Box>
      <Box background="linear-gradient(225deg, #85FFBD 0%, #FFFB7D 100%)">
        Who is your god now
      </Box>
    </Dreitagebart>
  )
}

export const Gradient = Template.bind({})
Gradient.storyName = "gradient"
