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
      <Box border="1px solid red" padding="40px">
        Box with 40px padding
      </Box>
      <Box border="1px solid red" padding={40}>
        Box with 40px padding
      </Box>
      <Box border="1px solid red" padding={{ left: 40, right: 40 }}>
        Box with 40px padding
      </Box>
      <Box border="1px solid red" padding={{ vertical: 40 }}>
        Box with 40px padding
      </Box>
      <Box border="1px solid red" padding={{ horizontal: 40 }}>
        Box with 40px padding
      </Box>
    </Dreitagebart>
  )
}

export const MarginPadding = Template.bind({})
MarginPadding.storyName = "margin & padding"
