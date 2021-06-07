import React from 'react'
import './navbar.scss'
import resume from "./data/Shivam Resume 2021.pdf"
import{Link} from "react-scroll";
import { motion } from "framer-motion";
import {useState} from 'react';
import {NavLink, BrowserRouter as Router} from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css"
// import "shards-ui/dist/css/shards.min.css"

function Navbar({toggler}) {


    const [clicked, setClicked] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar-left">
            <h1><a className="logo" href="/"><span>Shivam</span><span>Patel</span></a></h1>
            
            {/* <button onClick={toggler}>dark</button> */}
            </div>
            <div className="navbar-right">
                <ul className="links">
                <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            offset={-30}
            smooth={true}
            duration={500}
            onClick={() => setClicked(!clicked)}
          >
            <li>
              portfolio

            </li>
          </Link>
          <Link
            activeClass="active"
            to="about-me-app"
            spy={true}
            offset={-30}
            smooth={true}
            duration={500}
            onClick={() => setClicked(!clicked)}
          >
            <li>
              about me
            </li>
          </Link>
          {/* <Link
            activeClass="active"
            to="contact-me-app"
            spy={true}
            offset={-30}
            smooth={true}
            duration={500}
            onClick={() => setClicked(!clicked)}
          >
            <li>
                contact
            </li>
          </Link> */}
            <li>
              <a className="resume-button"
                href={resume}
                target="_blank" rel="norreferrer">
                resume
              </a>
            </li>
        

                </ul>
                <input id="toggle" class="toggle" type="checkbox" onClick={toggler}></input>
                {/* <button onClick={toggler}>dark</button> */}
            </div>
        </div>
    )
}

export default Navbar;
