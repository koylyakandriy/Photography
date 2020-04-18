import React from "react"
import { FaInstagram, FaFacebookSquare } from "react-icons/fa"

const Footer = () => (
  <footer className="footer py-3">
    <div className="container">
      <div className="row flex-column flex-md-row align-items-center">
        <div className="col-12 mx-auto col-md-5 text-center text-capitalize">
          <h5 className="mb-0 text-title">
            <a  className="nav-link font-weight-lighter" href="tel:+380992427371‬">+380 (99) 242 73 71‬</a>
          </h5>
        </div>

        <div className="col-10 mx-auto col-md-2 text-center text-capitalize d-f">
          <ul className="d-flex nav justify-content-center m-0">
            <li className="nav-item m-0 px-2">
              <a
                className="nav-link social-link"
                rel="noopener noreferrer"
                href="https://www.instagram.com/kseniakoziuk/"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="nav-item m-0 px-2">
              <a
                className="nav-link social-link"
                rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=100006665328413"
                target="_blank"
              >
                <FaFacebookSquare />
              </a>
            </li>
          </ul>
        </div>

        <div className="col-12 mx-auto col-md-5 text-center">
          <h5 className="mb-0 text-title">
            <a className="nav-link font-weight-lighter" href="mailto:oxxxyk07@gmail.com‬">Oxxxyk07@gmail.com</a>
          </h5>
        </div>
      </div>

      <div className="row">
        <div className="col-10 mx-auto text-center text-capitalize mt-3">
          <h4>{new Date().getFullYear().toString()}</h4>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
