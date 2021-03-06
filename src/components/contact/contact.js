import React, { useContext } from "react"
import styles from "./contact.module.scss"
import { Animated } from "react-animated-css"
import { store } from "../../hooks/store"

function Contact() {
  const { state } = useContext(store)

  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <h2>Contact</h2>
        <div className="row">
          <div className="col-md-12">
            <h3>Get in touch with me</h3>
            <Animated
              animationIn={state.animate ? "bounceInUp" : null}
              animationInDuration={state.animate ? 700 : null}
              isVisible={state.animate ? true : false}
            >
              <div className={styles.iconsWrapper}>
                <a
                  href="https://www.linkedin.com/in/mark-sarpong-7b397411a?authType=NAME_SEARCH&authToken=rT_V&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A498066039%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1476640655206%2Ctas%3Amark%20s"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin fa-3x" aria-hidden="true"></i>
                </a>
                <a
                  href="http://codepen.io/Markus1607/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-codepen fa-3x" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.instagram.com/mark.sarpong/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-instagram fa-3x" aria-hidden="true"></i>
                </a>
                <a
                  href="https://github.com/Markus1607"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github fa-3x" aria-hidden="true"></i>
                </a>
                <a
                  href="https://twitter.com/mark_sarpong21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter fa-3x" aria-hidden="true"></i>
                </a>
              </div>
            </Animated>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
