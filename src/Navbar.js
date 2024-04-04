import React from 'react'
import './navbar.scss'
import resume from "./data/Resume2023Auto3ff.pdf"
import{Link} from "react-scroll";
// import { motion } from "framer-motion";
import {useState} from 'react';
// import {NavLink, BrowserRouter as Router} from 'react-router-dom';


function Navbar({toggler}) {


    const [clicked, setClicked] = useState(false);

    return (
      <div>
          <div className="navbar--mobile">
            <div className="navbar--mobile--menuicon">
              <span
              className={clicked ? "fas fa-times" : "fas fa-bars"}
              onClick={() => setClicked(!clicked)}>
              </span>
            </div>
            <h1><a className="logo" href="/"><span>Shivam</span><span>Patel</span></a></h1>
            <input id="toggle" class="toggle" type="checkbox" onClick={toggler}></input>


          </div>
          <div className={clicked ? "navbar--mobile_menu open" : "navbar--mobile_menu"}
          onClick={() => setClicked(!clicked)}>
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

            <li>
              <a className="resume-button"
                href={resume}
                target="_blank" rel="norreferrer">
                resume
              </a>
            </li>
        

                </ul>


          </div>

          
          <div className="navbar">
            <div className="navbar-left">
              <h1><a className="logo" href="/"><span>Shivam</span><span>Patel</span></a></h1>
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
      </div>
      
    )
}

export default Navbar;
