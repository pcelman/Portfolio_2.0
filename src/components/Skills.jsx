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
import material from "../images/material.svg";
import "../styles/Skills.css";

export default function Skills() {
  return (
          <section className="skills">
            <div className="about__skills__title">Skills</div>
            <span className="line"></span>
            
            <ul className="skills__content">
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
                <div className="skills__name ">
                  Angular CLI
                </div>
                <FaAngular
                  size={35}
                  className="skills__icon"
                  alt="Link to React icon"
                />
              </li>
              <li className="skills__item">
                <div className="skills__name">JavaScript</div>
                <IoLogoJavascript
                  size={35}
                  className="skills__icon"
                  alt="Link to Javascript"
                />
              </li>
              <li className="skills__item">
                <div className="skills__name">TypeScript</div>
                <SiTypescript
                  size={35}
                  className="skills__icon"
                  alt="Link to Javascript"
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
                <div>MongoDB</div>
                <SiMongodb
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
          </section>
  );
}
