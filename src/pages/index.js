import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>... welcome</h1>
    <p>See what I've been up to.</p>
    <a href="https://sol.roubekas.com">
      SolData
    </a>
    <br/>
    <a href="https://blog.roubekas.com">
      Blog
    </a>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
