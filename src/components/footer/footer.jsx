import React from "react";
import "./footer.css";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const logosClass = inView ? "logos show-logos" : "logos";
  return (
    <div classname="footer">
      <div className="sub-footer">
        <div>
          <h1> About</h1>
          <div className="sub-footer-details">
            <p>Sohaila Yasser </p>
            <p>23 years old</p>
            <p> lives in Alexandria, Egypt </p>
            <p>Front end-developer</p>
          </div>
        </div>
        <div className="footer-links">
          <h1>Links</h1>
          <div className="sub-footer-details">
            <p>About</p>
            <p>Skills</p>
            <p>Work</p>
            <p>Contact</p>
          </div>
        </div>

        <div>
          <h1>Services</h1>
          <div className="sub-footer-details">
            <p>Web development</p>
          </div>
        </div>
        <div>
          <h1>Contact</h1>
          <div className="sub-footer-details">
            <p>Alexandria, Egypt</p>
            <p>012xxxxxx95</p>
            <p>ysohaila05@gmail.com</p>
          </div>
        </div>
      </div>
      <div ref={ref} className={logosClass}>
        <a>
          <BiLogoGmail className="logo" />
        </a>
        <a href="https://github.com/Sohaila-Yasser">
          <IoLogoGithub className="logo" />
        </a>
        <a href="https://www.instagram.com/sohailayasser26/?hl=ar">
          <FaInstagram className="logo" />
        </a>
      </div>
      <p className="last-line">Copyright ©2023 All rights reserved</p>
    </div>
  );
};
