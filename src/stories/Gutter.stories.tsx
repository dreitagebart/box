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
      <Box direction="row" gutter={20} border="1px solid red">
        <Box background="red" width={100} height={150}>
          1
        </Box>
        <Box background="green" width={200} height={250}>
          2
        </Box>
        <Box background="yellow" width={300} height={350}>
          3
        </Box>
      </Box>
    </Dreitagebart>
  )
}

export const Gutter = Template.bind({})
Gutter.storyName = "gutter"
