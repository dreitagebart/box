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
      <Box direction="row" gutter={40}>
        <Box
          border="4px dotted #ccc"
          background="red"
          width={100}
          height={100}
        ></Box>
        <Box background="green" width={100} height={100}></Box>
        <Box background="yellow" width={100} height={100}></Box>
      </Box>
    </Dreitagebart>
  )
}

export const Vertical = Template.bind({})
Vertical.storyName = "vertical"
