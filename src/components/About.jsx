import React from "react";
import { FiFigma } from "react-icons/fi";
import { FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import {
    SiTailwindcss,
    SiBootstrap,
    SiExpress,
    SiSequelize,
} from "react-icons/si";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { GrNode } from "react-icons/gr";
import image from "../images/p1.png";
import material from "../images/material.svg";
import cv from "../assets/paulacelman.pdf";
import "../styles/About.css";

export default function About() {
  return (
    <main className="about" id="home">
      <div className="about__container">
        <figure className="about_image">
          <img src={image} alt="" width="350px" />
        </figure>
        <div className="about__secondcol">
          <p className="about__paragraph">
            <strong>Frontend Developer &nbsp;</strong>
            with a background in Industrial Design and a Master's degree in Fine
            Arts
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
            <a href="https://www.linkedin.com/in/paula-celman/" target="_blank">
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
        {/* <---------------Skills------------> */}
        <section className="about__skills">
          <div className="about__skills__title">Skills</div>
          <span className="line"></span>
          <ul className="skills__content">
            <li className="skills__item">
              <div className="skills__name">JavaScript</div>
              <IoLogoJavascript
                size={35}
                className="skills__icon"
                alt="Link to Javascript"
              />
            </li>
            <li className="skills__item">
              <div className="skills__name ">
                React & <br /> React Native
              </div>
              <RiReactjsFill
                size={35}
                className="skills__icon"
                alt="Link to React icon"
              />
            </li>
            <li className="skills__item">
              <div className="skills__name">Figma</div>
              <FiFigma size={35} className="skills__icon" alt="Link to Figma" />
            </li>
            <li className="skills__item">
              <div className="skills__name">CSS</div>
              <FaCss3Alt size={35} className="skills__icon" alt="Link to CSS" />
            </li>
            <li className="skills__item">
              <div className="skills__name">Tailwind</div>
              <SiTailwindcss
                size={35}
                className="skills__icon"
                alt="Link to Tailwind"
              />
            </li>
            <li className="skills__item">
              <div className="skills__name ">Bootstrap</div>
              <SiBootstrap
                size={35}
                className="skills__icon"
                alt="Link to a Bootstrap project"
              />
            </li>
            <li className="skills__item">
              <div className="skills__name">MaterialUI</div>
              <img src={material} height="40px" />
            </li>
            <li className="skills__item">
              <div>NodeJs</div>
              <GrNode size={35} className="skills__icon" alt="Link to Node" />
            </li>
            <li className="skills__item">
              <div>Express</div>
              <SiExpress
                size={35}
                className="skills__icon"
                alt="Link to Express"
              />
            </li>
            <li className="skills__item">
              <div>Sequelize</div>
              <SiSequelize
                size={35}
                className="skills__icon"
                alt="Link to Sequelize"
              />
            </li>
            <li className="skills__item">
              <div className="skills__name">Git</div>
              <FaGitAlt size={35} className="skills__icon" alt="Link to Git" />
            </li>
          </ul>
          {/* <------------------Skills end --------------------->  */}
        </section>
      </div>
    </main>
  );
}
