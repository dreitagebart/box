import React from "react"
import styled from "styled-components"

interface Props {}

const Wrapper = styled.code`
  background: #cfcfcf;
  padding: 1em;
  margin: 12px 0;
  border-radius: 4px;
`

export const Code: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}
