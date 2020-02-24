import PropTypes from "prop-types"
import React, { useContext, useEffect } from "react"
import { Link } from "gatsby"
import styles from "./navbar.module.scss"
import { store } from "../../hooks/store"

function Navbar(props) {
  const { siteTitle } = props
  const { dispatch } = useContext(store)

  function activateAnimation() {
    if (dispatch) {
      //TODO: Fix dispatch becoming undefined some times
      dispatch({ type: "animate", animate: true })
    }
  }

  //Reveal on scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const wScroll = window.scrollY
      if (wScroll > 436) {
        activateAnimation()
      }
    })
  }, [])

  return (
    <header>
      <nav
        className={`navbar navbar-default navbar-fixed-top ${styles.navbar} ${styles.navbarDefault}`}
      >
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className={`navbar-brand ${styles.navbarBrand}`} href="#">
              {siteTitle}
            </a>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className={`nav navbar-nav navbar-right ${styles.navbarNav}`}>
              <li className="ab-link">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="po-link" onClick={activateAnimation}>
                <a href="#about">About</a>
              </li>
              <li className="po-link">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
