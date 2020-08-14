import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBox } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Box } from "@dreitagebart/box"
import { Link } from "gatsby"

interface Props {
  siteTitle: string
}

const Wrapper = styled.header`
  background: rgb(64, 64, 64);
  background-image: radial-gradient(
    circle,
    rgba(64, 64, 64, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  height: 300px;
`

const MenuItem = styled(Link)`
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: #cfcfcf;
  transition: all 600ms ease-in-out;
  padding: 0 12px;

  &:hover {
    color: #fff;
  }

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 1px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }
`

const Social = styled.a`
  transition: all 600ms ease-in-out;
  color: #cfcfcf;

  &:hover {
    color: #fff;
  }
`

export const Header: React.FC<Props> = ({ siteTitle }) => (
  <Wrapper>
    <Box
      direction="row"
      align="center"
      justify="between"
      padding={{ top: 40 }}
      width="100%"
    >
      <Box direction="row" padding={{ left: 40 }} wrap>
        <MenuItem to="/start">Getting started</MenuItem>
        <MenuItem to="/docs">Documentation</MenuItem>
        <MenuItem to="/tutorials">Tutorials</MenuItem>
        <MenuItem to="/github">Github</MenuItem>
      </Box>
      <Box
        padding={{ right: 40 }}
        direction="row"
        align="center"
        justify="end"
        style={{ color: "#fff" }}
        gutter={12}
      >
        <Social href="https://github.com/dreitagebart/box" target="_blank">
          <FontAwesomeIcon size="2x" icon={faGithub}></FontAwesomeIcon>
        </Social>
      </Box>
    </Box>
    <Box
      direction="row"
      justify="center"
      align="center"
      gutter={20}
      margin={{ top: 60 }}
      style={{ fontSize: "4em", color: "#fff" }}
    >
      <Box>
        <FontAwesomeIcon icon={faBox}></FontAwesomeIcon>
      </Box>
      <Box>box</Box>
    </Box>
  </Wrapper>
)

export default Header
