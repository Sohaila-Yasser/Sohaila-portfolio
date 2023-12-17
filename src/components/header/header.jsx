import React, { useState, useEffect } from "react";
import "./header.css";

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");

      let foundActiveLink = false;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveLink(section.id);
          foundActiveLink = true;
        }
      });

      if (!foundActiveLink) {
        setActiveLink(null);
      }
    };

    const handleLinkClick = (event, targetId) => {
      event.preventDefault();

      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        const targetOffset = targetSection.offsetTop - 100;
        window.scrollTo({ top: targetOffset, behavior: "smooth" });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header-component">
      <h1>Sohaila</h1>
      <ul className="header-links">
        <a
          href="#about"
          onClick={(event) => handleLinkClick(event, "about")}
          className={activeLink === "about" ? "active" : ""}
        >
          <li>
            <b>About</b>
          </li>
        </a>
        <a
          href="#skills"
          onClick={(event) => handleLinkClick(event, "skills")}
          className={activeLink === "skills" ? "active" : ""}
        >
          <li>
            <b>Skills</b>
          </li>
        </a>
        <a
          href="#projects"
          onClick={(event) => handleLinkClick(event, "projects")}
          className={activeLink === "projects" ? "active" : ""}
        >
          <li>
            <b>Work</b>
          </li>
        </a>
        <a
          href="#contact"
          onClick={(event) => handleLinkClick(event, "contact")}
          className={activeLink === "contact" ? "active" : ""}
        >
          <li>
            <b>Contact</b>
          </li>
        </a>
      </ul>
    </div>
  );
};
