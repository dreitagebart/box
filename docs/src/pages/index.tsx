import React from "react"
import { Box } from "@dreitagebart/box"
import { Link } from "gatsby"

import { Layout, SEO, Code } from "../components"

const IndexPage: React.FC = () => (
  <Layout isHome={true}>
    <SEO title="Getting started"></SEO>
    <h3>Installation</h3>
    <Box>
      to install the box component you can use following command
      <Code>npm install --save @dreitagebart/box</Code>
      or when you use yarn package manager type
      <Code>yarn add @dreitagebart/box</Code>
    </Box>
    <h3>Usage</h3>
    <Box>
      after you installed the library you can import it with
      <Code>
        import &#123; Box &#125; from "@dreitagebart/box";
        <br></br>
        <br></br>
        &lt;Box&gt;Who is your god now?&lt;/Box&gt;
      </Code>
    </Box>
    <Box>
      Check out the <Link to="/docs">documentation</Link> to understand more how
      to use the box component more efficient
    </Box>
  </Layout>
)

export default IndexPage
