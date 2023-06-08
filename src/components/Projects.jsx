import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { FiFigma } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import projects__hc from "../images/projects__hc.png";
import projects__arq from "../images/projects__arq.png";
import projects__fm from "../images/projects__fm.png";
import projects__vg from "../images/projects__vg.png";
import projects__pk from "../images/projects__pk.jpeg";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projects__container">
          <section className="projects__card">
            <img className="projects__card__image"
              src={projects__hc}
              alt="image of the design for Henry connect on figma"
              width="300px"
              height="250px"
            />
            <div>
              <h2 className="projects__card__title" >HENRYconnect</h2>
              <p className="projects__card__paragraph">
                Part of a team that developed Henry Connect, a
                location-based chat application built with React Native. My role
                focused on the front-end development and design, including
                implementing the user interface and styling elements.
              </p>
              <br />
              <div className="projects__card__icon-center">
              <a
                href="https://www.figma.com/file/2NzlH6zSqLfxevWvKNVJCU/P-connect?node-id=0%3A1&t=tCm1GvsENAYSyUCP-1"
                target="_blank"
                className="projects__card__icon-center"
              >
                <FiFigma size={30} className="projects__card__icon" alt="Link to Figma"/>
              </a>
              <a
                href="https://github.com/pcelman/Henry-connect"
                target="_blank"
                className="projects__card__icon-center"
              >
                <GoMarkGithub size={30} className="projects__card__icon" alt="Link to Github"/>
              </a>
            </div>
            </div>
          </section>
          <section className="projects__card">
            <img className="projects__card__image" src={projects__arq} alt="Arquihub" 
            width="300px" height="250px" 
            />
            <div>
              <h2 className="projects__card__title">ARQUIHUB</h2>
              <p className="projects__card__paragraph">
                As a member of the front-end team, I contributed to the
                development of Arquihub. My responsibilities included creating
                and implementing various React components, contributing to the
                overall design and aesthetics of the application, and adding
                functionalities.
              </p>
              <br />
              <div className="projects__card__icon-center">
                <a href="https://github.com/pcelman/ARQUIHUB" target="_blank">
                  <GoMarkGithub
                    size={30}
                    className="projects__card__icon-center-github"
                    alt="Link to Github"
                  />
                </a>
                <a href="https://arquihub.vercel.app/" target="_blank">
                  <BiWorld size={30} className="projects__card__icon-center-world" alt="Link to the deploy of Arquihub"/>
                </a>
              </div>
            </div>
          </section>
          <section className="projects__card">
            <img className="projects__card__image" src={projects__fm} alt="Fundacion Mujer project" 
            width="300px" height="250px" 
            />
            <div>
              <h2 className="projects__card__title">Fundacion Mujer</h2>
              <p className="projects__card__paragraph">
                I was part of the front-end team for a foundation based in
                Colombia. The goal of the project was to create a website that
                provided a platform for women to access news, posts, and job
                opportunities. My role involved designing the user interface and
                the website's overall aesthetic.
              </p>
              <a
                href="https://www.figma.com/file/4R1YzisyHOhWE0j228Qk2V/P-Fundacion?t=tCm1GvsENAYSyUCP-1"
                target="_blank"
                className="projects__card__icon-center"
              >
                <FiFigma size={30} className="projects__card__icon" alt="Link to Figma"/>
              </a>
              
            </div>
          </section>
          <section className="projects__card">
            <img className="projects__card__image" src={projects__vg} alt="Videogames project" 
            width="300px" height="250px" 
            />
            <div>
              <h2 className="projects__card__title">Videogames</h2>
              <p className="projects__card__paragraph">
                I was the sole developer for a personal project creating a video
                game website. My responsibilities included all aspects of the
                project, from API requests to the final rendering and
                functionality of the website. I utilized Express for routing,
                Sequelize and Postgres for the database, and React and Redux for
                the front-end. I sourced the information for the website from
                an API.
              </p>
              <a
                href="https://github.com/pcelman/Videogames"
                target="_blank"
                className="projects__card__icon-center"
              >
                <GoMarkGithub size={30} className="projects__card__icon" alt="Link to Github"/>
              </a>
            </div>
          </section>
          <section className="projects__card">
            <img className="projects__card__image" src={projects__pk} alt="Pokemon project" 
            width="300px" height="250px" 
            />
            <div>
              <h2 className="projects__card__title">Pokemon</h2>
              <p  className="projects__card__paragraph">
                Worked independently on a personal project creating a website
                dedicated to Pokemon. The project involved using Express for
                routing, Sequelize and Postgres for the database, and React and
                Redux for the front-end. I utilized an API to gather information
                and display it on the website.
              </p>
              <br /> <br />
              <a
                href="https://github.com/pcelman/Make-your-own"
                target="_blank"
                className="projects__card__icon-center"
              >
                <GoMarkGithub size={30} className="projects__card__icon" alt="Link to Github"/>
              </a>
            </div>
          </section>
      
        </div>
      </div>
    // </div>
  );
}
