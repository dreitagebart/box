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
      <Box margin="1rem" shadow="xxs" width={100} height={100}>
        xxs
      </Box>
      <Box margin="1rem" shadow="xs" width={100} height={100}>
        xs
      </Box>
      <Box margin="1rem" shadow="sm" width={100} height={100}>
        sm
      </Box>
      <Box margin="1rem" shadow="md" width={100} height={100}>
        md
      </Box>
      <Box margin="1rem" shadow="lg" width={100} height={100}>
        lg
      </Box>
      <Box margin="1rem" shadow="xl" width={100} height={100}>
        xl
      </Box>
      <Box margin="1rem" shadow="xxl" width={100} height={100}>
        xxl
      </Box>
    </Dreitagebart>
  )
}

export const Shadow = Template.bind({})
Shadow.storyName = "shadow"
