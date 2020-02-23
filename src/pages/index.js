import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Contact from "../components/contact/contact"
import styles from '../styles/index.module.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <div className={styles.imageWrapper}>
      <Image />
    </div> */}
    <Contact />
  </Layout>
)

export default IndexPage
