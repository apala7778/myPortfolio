import React from "react";
import './Footer.css';
import {AiFillGithub} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';


const Footer = () => {
  return (
    <div className="final">
      <div className="last">
            <div className="free"> Feel Free to contact me</div>
            <div>
            
            <a
                className="email"
                href="mailto:apalagupta769@gmail.com?
        &subject=Feedback from Simplilearn Support Team
        &body=Add what you want to suggest"
            >
                apalagupta769@gmail.com
            </a>
            </div>

            <div className="my">
            <a href="https://github.com/apala7778" target='_blank'><AiFillGithub size='1.5rem' color='white' /></a>
        
        <a href="https://twitter.com/apalagupta4" target='_blank' ><BsTwitter size='1.5rem' color='white' /></a>
        <a href="https://www.linkedin.com/in/apala-g-33765b226" target='_blank' ><BsLinkedin size='1.5rem' color='white' /></a>
            </div>
      </div>
    </div>
  );
};

export default Footer;
