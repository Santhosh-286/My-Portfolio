import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faMessage } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero-section");
  const menuRef = useRef();

  // Track scroll position and highlight correct nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero-section", "about", "skills", "project", "contact"];

      sections.forEach((sec) => {
        const element = document.getElementById(sec);
        if (!element) return;

        const rect = element.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(sec);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <h1>SANTHOSH T</h1>
        </div>

        <ul ref={menuRef} className="nav-menu">
          <FontAwesomeIcon icon={faXmark} onClick={() => {}} />

          <li>
            <a
              href="#hero-section"
              className={activeSection === "hero-section" ? "active" : ""}
              onClick={() => setActiveSection("hero-section")}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
              onClick={() => setActiveSection("about")}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
              onClick={() => setActiveSection("skills")}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#project"
              className={activeSection === "project" ? "active" : ""}
              onClick={() => setActiveSection("project")}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
              onClick={() => setActiveSection("contact")}
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="connect">
          <button>
            <a href="#contact">
              Let's Chat
              <FontAwesomeIcon icon={faMessage} />
            </a>
          </button>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </header>
  );
}
