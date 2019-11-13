import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons';


export default function Navbar() {
  return (
    <nav>
          <ul className="navcontainer">
            <li className="logo">{"<sB/>"}</li>
          </ul>
          <ul className="navcontainer">
            <li className="navitem"><FontAwesomeIcon icon={ faGithub }/></li>
            <li className="navitem"><FontAwesomeIcon icon={ faLinkedin }/></li>
            <li className="navitem"><FontAwesomeIcon icon={ faTwitter }/></li>
            <li className="navitem"><FontAwesomeIcon icon={ faMedium }/></li>
          </ul>
        </nav>
  );
}