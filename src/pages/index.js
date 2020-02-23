import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Contact from "../components/contact/contact"
import About from "../components/about/about"
import Intro from "../components/intro/intro"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <About />
    <Contact />
  </Layout>
)

export default IndexPage
