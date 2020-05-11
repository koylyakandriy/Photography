import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    {
      id: 1,
      path: "/",
      text: "Про мене",
    },
    {
      id: 2,
      path: "/portfolio",
      text: "портфоліо",
    },
    {
      id: 3,
      path: "/contact",
      text: "контакти",
    },
  ]

  const navbarHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-light flex-sm-column align-items-center">
      <AniLink fade to="/" className="navbar-brand animated bounce delay-15s">
        <span className="logo">Ksenia Koziuk</span>
      </AniLink>
      <button className="navbar-toggler" type="button" onClick={navbarHandler}>
        <span className="navbar-toggler-icon" />
      </button>

      <div className={`collapse navbar-collapse ${isOpen && "show"} `}>
        <ul className="navbar-nav mx-auto">
          {links.map(link => (
            <li key={link.id} className="nav-item">
              <AniLink
                duration={0.3}
                fade
                to={link.path}
                className="nav-link text-uppercase"
                activeStyle={{ color: "red" }}
              >
                {link.text}
              </AniLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
