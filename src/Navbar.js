import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons';


export default function Navbar() {
  return (
    <nav>
          <ul className="navcontainer">
            <li className="logo">{"<sB/>"}</li>
          </ul>
          <ul className="navcontainer" id="s">
            <li className="navitem" class="hvr-grow" id="github"><FontAwesomeIcon icon={ faGithub }/></li>
            <li className="navitem" class="hvr-grow" id="linkedin"><FontAwesomeIcon icon={ faLinkedin }/></li>
            <li className="navitem" class="hvr-grow" id="twitter"><FontAwesomeIcon icon={ faTwitter }/></li>
            <li className="navitem" class="hvr-grow" id="medium"><FontAwesomeIcon icon={ faMedium }/></li>
          </ul>
        </nav>
  );
}