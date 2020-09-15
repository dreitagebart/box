import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBox } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Box } from "@dreitagebart/box"
import { Link } from "gatsby"

interface Props {
  isHome: boolean
}

const Menu = styled(Box)`
  @media only screen and (max-width: 600px) {
    .mobile {
    }

    .full {
      display: none;
    }
  }

  @media only screen and (min-width: 600px) {
    .mobile {
      display: none;
    }

    .full {
    }
  }
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

const Logo = styled(Box)`
  font-size: 4rem;
  color: #efefef;
  text-shadow: 0px 0px 4px rgba(255, 255, 255, 1);
`

const Social = styled.a`
  transition: all 600ms ease-in-out;
  color: #cfcfcf;

  &:hover {
    color: #fff;
  }
`

export const Header: React.FC<Props> = ({ isHome }) => (
  <Box
    height={300}
    background="radial-gradient(circle, rgba(64, 64, 64, 1) 0%, rgba(0, 0, 0, 1) 100%)"
    shadow="xxl"
    border={{ bottom: "1px solid #fff" }}
    margin={{ bottom: "2em" }}
  >
    <Box
      direction="row"
      align="center"
      justify="between"
      padding={{ top: 40 }}
      width="100%"
    >
      <Menu padding={{ left: 40 }} wrap={true}>
        <Box className="full" direction="row">
          <MenuItem to="/start">Getting started</MenuItem>
          <MenuItem to="/docs">Documentation</MenuItem>
          <MenuItem to="/tutorials">Tutorials</MenuItem>
          <MenuItem to="/github">Github</MenuItem>
        </Box>
        <Box className="mobile">Ich bin ein Frühstücksclown</Box>
      </Menu>
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
    <Logo
      direction="row"
      justify="center"
      align="center"
      gutter={20}
      margin={{ top: 60 }}
    >
      <Box>
        <FontAwesomeIcon icon={faBox}></FontAwesomeIcon>
      </Box>
      <Box>box</Box>
    </Logo>
  </Box>
)

export default Header
