import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { FiFigma } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import projects__hc from "../images/projects__hc.png";
import projects__arq from "../images/projects__arq.png";
import projects__fm from "../images/projects__fm.png";
import projects__vg from "../images/projects__vg.jpg";
import projects__pk from "../images/projects__pk.png";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projects__container">

        <section className="projects__card">
          <img
            className="projects__card__image"
            src={projects__arq}
            alt="Arquihub"
            width="300px"
            height="250px"
          />
          <div>
            <h2 className="projects__card__title">ARQUIHUB</h2>
            <p className="projects__card__paragraph">
              As a member of the front-end team, I contributed to the
              development of Arquihub. My responsibilities included creating and
              implementing various React components, contributing to the overall
              design and aesthetics of the application, and adding
              functionalities.
            </p>
            <br />
            <br />
            <div className="projects__card__icon-center">
              <a href="https://arquihub.vercel.app/" target="_blank" 
                 aria-label="Go to Arquihub" >
                <BiWorld
                  size={33}
                  className="projects__card__icon-center-world"
                  alt="Link to Arquihub´s project deploy"
                />
              </a>
              <a href="https://github.com/pcelman/ARQUIHUB" target="_blank" 
                 aria-label="Go to Arquihub" >
                <GoMarkGithub
                  size={30}
                  className="projects__card__icon-center-github"
                  alt="Link to Arquihub´s  GitHub repository"
                />
              </a>
            </div>
          </div>
        </section>
        <section className="projects__card">
          <img
            className="projects__card__image"
            src={projects__pk}
            alt="Pokemon project"
            width="300px"
            height="250px"
          />
          <div>
            <h2 className="projects__card__title">Pokemon</h2>
            <p className="projects__card__paragraph">
              Worked independently creating a website dedicated to Pokemon. The
              project involved using Express for routing, Sequelize and Postgres
              for the database, and React and Redux for the front-end. I
              utilized an API to gather information. Syled with CSS.
            </p>
            <br /> <br />
            <a
              href="https://github.com/pcelman/Pokemon-front.git"
              target="_blank"
              className="projects__card__icon-center"
              aria-label="Go to Videogames"
            >
              <GoMarkGithub
                size={30}
                className="projects__card__icon"
                alt="Link to Github"
              />
            </a>
              <a href="https://my-pokemon-delta.vercel.app/" target="_blank"    aria-label="Go to Pokemon">
                <BiWorld
                  size={33}
                  className="projects__card__icon-center-world"
                  alt="Link to the deploy of My Pokemon"
                />
              </a>
          </div>
        </section>

        <section className="projects__card">
          <img
            className="projects__card__image"
            src={projects__vg}
            alt="Videogames project"
            width="300px"
            height="250px"
          />
          <div>
            <h2 className="projects__card__title">Videogames</h2>
            <p className="projects__card__paragraph">
              Personal project. My responsibilities included all aspects of the
              project, from API requests to the rendering and functionality of
              the website. I utilized Express for routing, Sequelize and
              Postgres for the database, and React, Redux and CSS for the front-end.
              I sourced the information for the website from an API.
            </p>
            <a
              href="https://github.com/pcelman/Videogames-front"
              target="_blank"
              className="projects__card__icon-center"
              aria-label="Go to Videogames"
            >
              <GoMarkGithub
                size={30}
                className="projects__card__icon"
                alt="Link to Github"
              />
            </a>
              <a href="https://my-videogame.vercel.app/" target="_blank"    aria-label="Go to Videogames">
                <BiWorld
                  size={33}
                  className="projects__card__icon-center-world"
                  alt="Link to the deploy of My Videogame"
                />
              </a>
          </div>
        </section>
 
        <section className="projects__card">
          <img
            className="projects__card__image"
            src={projects__hc}
            alt="image of the design for Henry connect on figma"
            width="300px"
            height="250px"
          />
          <div>
            <h2 className="projects__card__title">HENRYconnect</h2>
            <p className="projects__card__paragraph">
              Part of a team that developed Henry Connect, a location-based chat
              application built with React Native. My role focused on the
              front-end development and design, including implementing the user
              interface and styling elements.
            </p>
            <br />
            <br />
            <div className="projects__card__icon-center">
              <a
                href="https://www.figma.com/file/2NzlH6zSqLfxevWvKNVJCU/P-connect?node-id=0%3A1&t=tCm1GvsENAYSyUCP-1"
                target="_blank"
                className="projects__card__icon-center"
                aria-label="Go to HenryConnect"
              >
                <FiFigma
                  size={30}
                  className="projects__card__icon"
                  alt="Link to Figma"
                />
              </a>
              <a
                href="https://github.com/pcelman/Henry-connect"
                target="_blank"
                className="projects__card__icon-center"
                aria-label="Go to HenryConnect"
              >
                <GoMarkGithub
                  size={30}
                  className="projects__card__icon"
                  alt="Link to Github"
                />
              </a>
            </div>
          </div>
        </section>
      </div>
        <div className="projects__more">More deployed projects on my &nbsp;
          <a href="https://github.com/pcelman?tab=repositories"   target="_blank" className="gitHub__link">GitHub.</a>
          </div>
    </div>
    // </div>
  );
}
