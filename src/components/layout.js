import React from "react"
import PropTypes from "prop-types"

import Navbar from "./Global/navbar"
import Footer from "./Global/footer"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <main className="main">{children}</main>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
