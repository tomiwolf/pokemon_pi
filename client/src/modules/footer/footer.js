import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import './footer.css'

export function Footer() {

  const handleClickLinkedIn = () => {
    window.open('https://www.linkedin.com/in/tomas-wolfmann-35518a1a5/');
  }
  const handleClickGitHub = () => {
    window.open('https://github.com/tomiwolf');
  }


  return (
    <div className="footer" >
      <a
        href="mailto:tomiwolfman@gmail.com?body=Contact Diego Tavelli"
        className='footerName' >@Tomiwolf</a >
      <p onClick={handleClickLinkedIn} className='footerLink' >
        <FontAwesomeIcon icon={faLinkedin} size='2x' />
      </p>
      <p onClick={handleClickGitHub} className='footerGit' >
        <FontAwesomeIcon icon={faGithub} size='2x' />
      </p>
    </div>
  )
}