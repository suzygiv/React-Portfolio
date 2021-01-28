import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Icon = () => (
        <div id="icons">
             <a href="https://github.com/suzygiv">
                <FontAwesomeIcon icon={faGithub} size="1x" />
             </a>
             &nbsp;&nbsp;&nbsp; 
            <a href="https://www.linkedin.com/in/suzanne-givnish-09481259/">
                <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </a>
            &nbsp;&nbsp;&nbsp; 
            <a href="https://www.facebook.com/suzy.givnish/">
                <FontAwesomeIcon icon={faFacebook} size="1x" />
            </a>
        </div>
    );

export default Icon;