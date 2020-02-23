import React from "react"
import styles from "./about.module.scss"

const About = () => (
  <section className={styles.about} id="about">
    <div className="container">
      <h2>About Me</h2>
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <p className="text-muted">
            I am a passionate web developer, with significant experience working with JavaScript technologies. I enjoy collaborating within a team, but also
            happy to work independently. Aside from programming, I enjoy
            cycling, gaming and watching comedies.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h3>Skills</h3>
        </div>
      </div>
      <div className="row">
        <div id="left-in">
          <div className="col-md-4 col-md-offset-2">
            <div className={styles.progress}>
              <div
                className={`${styles.customProgress} ${styles.customProgressBar} progress-bar progress-bar-primary progress-bar-striped active`}
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "90%" }}
              >
                <span>GatsbyJS / GragphQL</span>
              </div>
            </div>
            <div className={styles.progress}>
              <div
                className={`${styles.customProgress} ${styles.customProgressBar} progress-bar progress-bar-primary progress-bar-striped active`}
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "90%" }}
              >
                <span>CSS3/SASS</span>
              </div>
            </div>
            <div className={styles.progress}>
              <div
                className={`${styles.customProgress} ${styles.customProgressBar} progress-bar progress-bar-primary progress-bar-striped active`}
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "80%" }}
              >
                <span>NextJS / SSR</span>
              </div>
            </div>
          </div>
        </div>
        <div id="right-in">
          <div className="col-md-4">
            <div className={styles.progress}>
              <div
                className={`${styles.customProgress} ${styles.customProgressBar} progress-bar progress-bar-primary progress-bar-striped active`}
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "90%" }}
              >
                <span>React & Redux</span>
              </div>
            </div>
            <div className={styles.progress}>
              <div
                className={`${styles.customProgress} ${styles.customProgressBar} progress-bar progress-bar-primary progress-bar-striped active`}
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "90%" }}
              >
                <span>NodeJS / Express </span>
              </div>
            </div>
            <div className={styles.progress}>
              <div
                className={`${styles.customProgress} ${styles.customProgressBar} progress-bar progress-bar-primary progress-bar-striped active`}
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "80%" }}
              >
                <span>Firebase / MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About
