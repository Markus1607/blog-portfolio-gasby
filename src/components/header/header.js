import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.scss"

const Navbar = ({ siteTitle }) => (
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
              <a href="#">Blog</a>
            </li>
            <li className="po-link">
              <a href="#about">About</a>
            </li>
            <li className="hi-link">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
