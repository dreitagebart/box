import React from "react"
import { Box } from "@dreitagebart/box"

export const Content: React.FC = ({ children }) => {
  return (
    <Box
      justify="center"
      width={{ max: 768 }}
      padding={{ horizontal: 32 }}
      margin={{ horizontal: "auto" }}
    >
      {children}
    </Box>
  )
}
