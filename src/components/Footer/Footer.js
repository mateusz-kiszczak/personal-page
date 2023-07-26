import { Link } from "react-router-dom";

import githubIcon from "../../img/icons/footer/github.svg";
import linkedinIcon from "../../img/icons/footer/linkedin.svg"


const Footer = () => {
  return (
    <footer className="footer default-container-width">
      <div className="footer__links">
        <Link to="/">
          <span className="blue-text">Mat</span>
          <span className="pink-text">Personal</span>
          <span className="yellow-text">Page</span>
          .com
        </Link>
        <div className="footer__links__external-links">
          <div>
            <img src={githubIcon} alt="GitHub icon." />
            <a href="https://github.com/mateusz-kiszczak" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <div>
            <img src={linkedinIcon} alt="GitHub icon." />
            <a href="www.linkedin.com/in/mateusz-kiszczak-567850183" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <p>©2023 Mateusz Kiszczak, All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;