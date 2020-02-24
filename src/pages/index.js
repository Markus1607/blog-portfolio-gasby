import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Contact from "../components/contact/contact"
import About from "../components/about/about"
import Intro from "../components/intro/intro"
import { StateProvider } from "../hooks/store"

function IndexPage() {
  return (
    <StateProvider>
      <Layout>
        <SEO title="Home" />
        <Intro />
        <About />
        <Contact />
      </Layout>
    </StateProvider>
  )
}
export default IndexPage
