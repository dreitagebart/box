import React from "react"
import styled from "styled-components"

interface Props {}

const Wrapper = styled.code``

const Header = styled.div``

export const Code: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Header>code</Header>
      {children}
    </Wrapper>
  )
}
