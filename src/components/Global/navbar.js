import React, { useState } from "react"
import { Link } from "gatsby"

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
    <nav className="navbar navbar-expand-sm navbar-light flex-sm-column align-items-center" >
      <Link to="/" className="navbar-brand animated bounce delay-15s" >
        <span className="logo">Ksenia Koziuk</span>
      </Link>
      <button className="navbar-toggler" type="button" onClick={navbarHandler}>
        <span className="navbar-toggler-icon" />
      </button>
      
      <div className={`collapse navbar-collapse ${isOpen && "show"} `}>
        <ul className="navbar-nav mx-auto">
          {links.map(link => (
            <li key={link.id} className="nav-item">
              <Link to={link.path} className="nav-link text-uppercase" activeStyle={{ color: "red" }}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
