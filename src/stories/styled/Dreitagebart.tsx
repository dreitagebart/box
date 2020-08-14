import React from "react"
import styled from "styled-components"

interface Props {}

const Wrapper = styled.div`
  font-family: "Verdana";
`

export const Dreitagebart: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}
