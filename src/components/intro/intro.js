import React from "react"
import { Link } from "gatsby"
import styles from "./intro.module.scss"

const Intro = () => (
  <section className={styles.intro} id="home">
    <video autoPlay={true} loop>
      <source src="../../assets/videos/MP4/typing.mp4" type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
      <source src="../../assets/videos/WEBM/typing.webm" type="video/webm" />
      Sorry, your browser doesn't support embedded videos.
      <track
        default
        kind="typing hand"
        srcLang="en"
        src="../../assets/videos/MP4/typing.vtt"
      />
    </video>
    <div className={styles.text}>
      <h1>Hi There</h1>
      <h1>I'm Mark Sarpong</h1>
      <h3>Software Developer</h3>
      <div className={styles.img}>
        <a href="#about" />
      </div>
    </div>
  </section>
)

export default Intro
