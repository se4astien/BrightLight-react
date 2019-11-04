import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>Travel Factor 2019</p>
      <p>Made at le Reacteur</p>
      <ul className="social-icons">
        <li>
          <ion-icon
            className="picto md hydrated"
            name="logo-instagram"
            role="img"
            aria-label="logo instagram"
          ></ion-icon>
        </li>
        <li>
          <ion-icon
            className="picto md hydrated"
            name="logo-twitter"
            role="img"
            aria-label="logo twitter"
          ></ion-icon>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
