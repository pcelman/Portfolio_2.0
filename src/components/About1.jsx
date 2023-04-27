import React from "react";
import paula from "../images/Paula_crop.png";
import b from "../images/b1.png";
import g from "../images/g1.png";
import paulamd from "../images/about__pcv-574.png";
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

import { RiFilePaperLine } from "react-icons/ri";
import { GrNode } from "react-icons/gr";
import cv from "../assets/paulacelman.pdf";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about" id="home">
      <div className="about__container">
        {/* <div className="about__col-1"> */}

        <section className="about__paralax">
          <img
            src={g}
            alt="broken edges circle"
            width="350px"
            className="about__bg-back image"
          />

          <img
            src={b}
            alt="broken edges circle"
            width="350px"
            className="about__bg-middle image"
          />

          <img
            className="about__foreground image"
            src={paula}
            alt="Smiling woman"
            width="350px"
          />
        </section>

        <div className="col-2">
          {/* <span className="line"></span> */}
          <p className="about__text">
            As a &nbsp;<strong>Front End Developer &nbsp;</strong>
            with a background in Industrial Design and a Master's degree in Fine
            Arts, I bring a unique perspective and set of skills to the table.
            My ability to communicate effectively in English and Spanish,
            combined with my passion for collaboration and teamwork, make me an
            asset to any project. My proactive and positive attitude, coupled
            with my dedication to producing high-quality work, sets me apart.
          </p>
          <p className="about__bold">
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              download="Paula_Celman_CV.pdf"
              className="download__cv"
            >
              Download CV
            </a>
          </p>
        </div>
        {/* skills --------------- */}
        <div className="about__skills">
          <div className="about__skills__title">Skills</div>
          <span className="line"></span>
          <ul className="skills__content">
            <li className="skills__item">
              <div>JavaScript</div>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer noopener"
              >
                <IoLogoJavascript
                  size={35}
                  className="skills__icon"
                  alt="Link to Javascript"
                />
              </a>
            </li>

            <li className="skills__item">
              <div>
                React & <br /> React Native
              </div>
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <RiReactjsFill
                  size={35}
                  className="skills__icon"
                  alt="Link to React icon"
                />
              </a>
            </li>
            <li className="skills__item">
              <div>Figma</div>
              <a
                href="https://www.figma.com/blog/figma-on-figma-how-we-built-figma-dot-coms-design-system/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FiFigma
                  size={35}
                  className="skills__icon"
                  alt="Link to Figma"
                />
              </a>
            </li>
            <li className="skills__item">
              <div>CSS</div>
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaCss3Alt
                  size={35}
                  className="skills__icon"
                  alt="Link to CSS"
                />
              </a>
            </li>
            <li className="skills__item">
              <div>Tailwind</div>
              <a
                href="https://tailwindui.com/documentation"
                target="_blank"
                rel="noreferrer noopener"
              >
                <SiTailwindcss
                  size={35}
                  className="skills__icon"
                  alt="Link to Tailwind"
                />
              </a>
            </li>
            <li className="skills__item">
              <div>Bootstrap</div>
              <a
                href="https://alaskan-odyssey.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <SiBootstrap
                  size={35}
                  className="skills__icon"
                  alt="Link to Bootstrap"
                />
              </a>
            </li>
            <li className="skills__item">
              <div>MaterialUI</div>
              <a
                href="https://mytodolist-six.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                  height="40px"
                />
              </a>
            </li>
            <li className="skills__item">
              <div>NodeJs</div>
              <a
                href="https://nodejs.org/en/docs/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <GrNode size={35} className="skills__icon" alt="Link to Node" />
              </a>
            </li>
            <li className="skills__item">
              <div>Express</div>
              <a
                href="https://expressjs.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <SiExpress
                  size={35}
                  className="skills__icon"
                  alt="Link to Express"
                />
              </a>
            </li>
            <li className="skills__item">
              <div>Sequelize</div>
              <a
                href="https://sequelize.org/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <SiSequelize
                  size={35}
                  className="skills__icon"
                  alt="Link to Sequelize"
                />
              </a>
            </li>
            <li className="skills__item">
              <div>Git</div>
              <a
                href="https://git-scm.com/doc"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGitAlt
                  size={35}
                  className="skills__icon"
                  alt="Link to Git"
                />
              </a>
            </li>
            {/* <li className="skills__item">
              <div>Scrum</div>
              <a
                href="https://www.scrum.org/forum/scrum-forum/14437/agile-and-documentation"
                target="_blank"
              >
                <DiScrum size={35} className="skills__icon" alt="Link to Scrum" />
              </a>
            </li> */}
          </ul>

          {/* skills end ---------------------  */}
        </div>
      </div>
    </div>
  );
};

export default About;
