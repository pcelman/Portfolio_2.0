import React, { useRef } from 'react';
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa";
import image from "../images/po.png";
import cv from "../assets/paulacelman-en.pdf";
import "../styles/About.css";

export default function About() {

  const text = "pcelman@gmail.com"
  const inputRef = useRef(null);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      inputRef.current.value = '¡Copiado!';
      setTimeout(() => (inputRef.current.value = text), 2000);
    } catch (err) {
      try {
        inputRef.current.select();
        document.execCommand('copy');
        inputRef.current.value = '¡Copiado!';
        setTimeout(() => (inputRef.current.value = text), 2000);
      } catch (err) {
        console.error('Error al copiar al portapapeles: ', err);
      }
    }
  };
  
  return (
    <main className="about" id="home">
      <div className="about__container">
        <div className="about__intro">
          <figure className="about__figure">
            <img className="about__image" src={image} alt="Paula Celman´s profile photo" width="350px" />
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
            <section className="about__contact">

            <article className="about__links">
              <a href="mailto:pcelman@gmail.com" target="_blank" title="email me"
                 aria-label="Email me!">
                {/* <HiOutlineMailOpen size={30} alt="Link to email" /> */}
                <IoMdSend size={32} alt="Link to email" />
              </a>
              <a href="https://github.com/pcelman" target="_blank" title='this is my Github'
                 aria-label="Go to my Github">
                {" "}
                <GoMarkGithub size={30} alt="Link to GitHub profile" />
              </a>
              <a
                href="https://www.linkedin.com/in/paula-celman/"
                target="_blank"
                title='this is my linkedIn'
                aria-label="Go to my LinkedIn"
                >
                <BsLinkedin size={30} alt="Link to LinkedIn profile" />
              </a>
              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                download="Paula_Celman_CV.pdf"
                aria-label="Go to my CV"
                >
                <div className="about__cv">Download CV</div>
              </a>
            </article>
            <article className="about__email">
            <label htmlFor="input" style={{ display: 'none' }}>Write me!</label>
    <input
        ref={inputRef}
        className="about__email__border"
        value={text}
        readOnly
        aria-label="my email"
      />
     
        <FaRegCopy size={25} onClick={() => copyToClipboard(text)} className="copy-icon"/>
            </article>
                </section>
          </div>
        </div>
      </div>
    </main>
  );
}
