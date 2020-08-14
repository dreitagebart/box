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
      <Box border="1px solid red">Who is your god now</Box>
      <Box border={{ size: 1, color: "#ff0000", style: "dashed" }}>
        Who is your god now
      </Box>
      <Box border={{ bottom: { size: 1, color: "#ff0000", style: "solid" } }}>
        Who is your god now
      </Box>
    </Dreitagebart>
  )
}

export const Border = Template.bind({})
Border.storyName = "border"
