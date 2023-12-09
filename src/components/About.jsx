import React from "react";
import { FiFigma } from "react-icons/fi";
import { FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import { FaAngular } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

import {
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiSequelize,
} from "react-icons/si";
import { GoMarkGithub } from "react-icons/go";
import { SiMongodb } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { GrNode } from "react-icons/gr";
import image from "../images/po.png";
import material from "../images/material.svg";
import cv from "../assets/paulacelman-en.pdf";
import "../styles/About.css";

export default function About() {
  return (
    <main className="about" id="home">
      <div className="about__container">
        <div className="about__intro">
          <figure className="about__figure">
            <img className="about__image" src={image} alt="" width="350px" />
            {/* <div className="about__shape"></div> */}
          </figure>
          <div className="about__secondcol">
            <p className="about__paragraph">
              <strong>Frontend Developer &nbsp;</strong>
              with a background in Industrial Design and a Master's degree in
              Fine Arts
              {/* , I bring a unique perspective and set of skills to the table.
            My ability to communicate effectively in English and Spanish,
            combined with my passion for collaboration and teamwork, make me an
            asset to any project. My proactive and positive attitude, coupled
          with my dedication to producing high-quality work, sets me apart. */}
            </p>
            <div className="about__links">
              <a href="mailto:pcelman@gmail.com" target="_blank">
                <HiOutlineMailOpen size={30} alt="Link to email" />
              </a>
              <a href="https://github.com/pcelman" target="_blank">
                {" "}
                <GoMarkGithub size={30} alt="Link to GitHub profile" />
              </a>
              <a
                href="https://www.linkedin.com/in/paula-celman/"
                target="_blank"
              >
                <BsLinkedin size={30} alt="Link to LinkedIn profile" />
              </a>
              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                download="Paula_Celman_CV.pdf"
              >
                <div className="about__cv">Download CV</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
