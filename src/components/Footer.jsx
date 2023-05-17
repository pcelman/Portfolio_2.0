import React from "react";
import { Link } from "react-scroll";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__links">
          <a href="mailto:pcelman@gmail.com" target="_blank">
            <HiOutlineMailOpen size={30} alt="Link to email" />
          </a>
          <a href="https://github.com/pcelman" target="_blank">
            {" "}
            <GoMarkGithub size={30} alt="Link to GitHub profile" />
          </a>
          <a href="https://www.linkedin.com/in/paula-celman/" target="_blank">
            <BsLinkedin size={30} alt="Link to LinkedIn profile" />
          </a>
        </div>
        <div className="footer__bottom">
          <p>2023 Paula Celman. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
