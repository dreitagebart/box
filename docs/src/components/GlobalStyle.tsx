import React from "react"
import { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet"
import { Fragment } from "react"

const Global = createGlobalStyle`
 body {
   font-size: 16px;
   font-family: 'Open Sans', Arial, Helvetica, sans-serif;
 }

 a {
   text-decoration: none;
 }
`

export const GlobalStyle: React.FC = () => {
  return (
    <Fragment>
      <Global></Global>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
    </Fragment>
  )
}
