import React from 'react';
import logo from "../logo1.png";
// React Font awesome Im port
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">

        <a className="navbar-brand" href="#"><img src={logo} alt="logo ..." className="logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span className="navbar-toggler-icon"></span>
           */}
        <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>

        </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About me</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">My Work</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Portfolio</a>
            </li>


            <li className="nav-item">
              <a className="nav-link" href="#">Contact Me</a>
            </li>


          </ul>

        </div>
        </div>
      </nav>
    )
}

export default Navbar
