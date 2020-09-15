import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  margin-top: 2rem;
`

export const Content: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}
