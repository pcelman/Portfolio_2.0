import React from "react";
import paula from "../images/Paula_crop.png";
import b from "../images/b1.png";
import g from "../images/g1.png";
import paulamd from "../images/about__pcv-574.png";
import image from "../images/p1.png";
import { FiFigma } from "react-icons/fi";
import { FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
// import { DiScrum } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";
import {
  SiTailwindcss,
  SiBootstrap,
  //   SiMaterialui,
  SiExpress,
  SiSequelize,
} from "react-icons/si";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiFilePaperLine } from "react-icons/ri";
import { GrNode } from "react-icons/gr";
import cv from "../assets/paulacelman.pdf";
import "../styles/about.css";

export default function About() {
  return (
    <main className="about" id="home">
      <div className="about__container">
        {/* <section className="about__presentation"> */}
        <figure className="about_image">
          <img src={image} alt="" width="350px"/>
        </figure>
        <div className="about__secondcol">
          <p className="about__paragraph">
            As a &nbsp;<strong>Front End Developer &nbsp;</strong>
            with a background in Industrial Design and a Master's degree in Fine
            Arts, I bring a unique perspective and set of skills to the table.
            My ability to communicate effectively in English and Spanish,
            combined with my passion for collaboration and teamwork, make me an
            asset to any project. My proactive and positive attitude, coupled
            with my dedication to producing high-quality work, sets me apart.
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
              {/* <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer noopener"
              >
                  </a> */}
                <IoLogoJavascript
                  size={35}
                  className="skills__icon"
                  alt="Link to Javascript"
                />
            </li>

            <li className="skills__item">
              <div className="skills__name">
                React & <br /> React Native
              </div>
              {/* <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer noopener"
                >
                  </a> */}
                <RiReactjsFill
                  size={35}
                  className="skills__icon"
                  alt="Link to React icon"
                />
            </li>
            <li className="skills__item">
              <div className="skills__name">Figma</div>
              {/* <a
                href="https://www.figma.com/blog/figma-on-figma-how-we-built-figma-dot-coms-design-system/"
                target="_blank"
                rel="noreferrer noopener"
              >
                  </a> */}
                <FiFigma
                  size={35}
                  className="skills__icon"
                  alt="Link to Figma"
                />
            </li>
            <li className="skills__item">
                <div className="skills__name">CSS</div>
              {/* <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                rel="noreferrer noopener"
                >
                  </a> */}
                <FaCss3Alt
                  size={35}
                  className="skills__icon"
                  alt="Link to CSS"
                />
            </li>
            <li className="skills__item">
              <a
                href="https://tailwindui.com/documentation"
                target="_blank"
                rel="noreferrer noopener"
                >
                  <div className="skills__name">Tailwind</div>
              </a>
                <SiTailwindcss
                  size={35}
                  className="skills__icon"
                  alt="Link to Tailwind"
                />
            </li>
            <li className="skills__item">
              <a
                href="https://alaskan-odyssey.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
                >
                  <div className="skills__name">Bootstrap</div>
              </a>
                <SiBootstrap
                  size={35}
                  className="skills__icon"
                  alt="Link to a Bootstrap project"
                />
            </li>
            <li className="skills__item">
              <a
                href="https://mytodolist-six.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
                >
                  <div className="skills__name">MaterialUI</div>
              </a>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                  height="40px"
                />
            </li>
            <li className="skills__item">
              <div>NodeJs</div>
              {/* <a
                href="https://nodejs.org/en/docs/"
                target="_blank"
                rel="noreferrer noopener"
              > */}
                <GrNode size={35} className="skills__icon" alt="Link to Node" />
              {/* </a> */}
            </li>
            <li className="skills__item">
              <div>Express</div>
              {/* <a
                href="https://expressjs.com/"
                target="_blank"
                rel="noreferrer noopener"
              > */}
                <SiExpress
                  size={35}
                  className="skills__icon"
                  alt="Link to Express"
                />
              {/* </a> */}
            </li>
            <li className="skills__item">
              <div>Sequelize</div>
              {/* <a
                href="https://sequelize.org/"
                target="_blank"
                rel="noreferrer noopener"
              > */}
                <SiSequelize
                  size={35}
                  className="skills__icon"
                  alt="Link to Sequelize"
                />
              {/* </a> */}
            </li>
            <li className="skills__item">
              {/* <a
                href="https://git-scm.com/doc"
                target="_blank"
                rel="noreferrer noopener"
              > */}
              <div  className="skills__name">Git</div>
              {/* </a> */}
                <FaGitAlt
                  size={35}
                  className="skills__icon"
                  alt="Link to Git"
                />
            </li>
          </ul>
         {/* <------------------Skills end --------------------->  */}
        </section>
      </div>
    </main>
  );
}
