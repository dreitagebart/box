import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Header, GlobalStyle } from "./"
import { Content } from "./Content"
import { Footer } from "./Footer"

interface Props {
  isHome?: boolean
}

export const Layout: React.FC<Props> = ({ children, isHome = false }) => {
  return (
    <Fragment>
      <GlobalStyle></GlobalStyle>
      <Header isHome={isHome} />
      <Content>{children}</Content>
      <Footer />
    </Fragment>
  )
}
