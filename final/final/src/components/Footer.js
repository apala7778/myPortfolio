import React from "react";
import './Footer.css';

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
            <ion-icon name="logo-github"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-linkedin"></ion-icon>
            </div>
      </div>
    </div>
  );
};

export default Footer;
