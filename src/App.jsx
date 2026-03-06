import React, { useRef, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faDownload,
  faMessage,
  faRightFromBracket,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import assets from "./assets/assets";

import SkillsSection from "./SkillsSection";
import Tab from "./Tab";
// import {
//   faGithub,
//   faInstagram,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";
export default function App() {
  useEffect(() => {
    document.title = "My Portfolio";
  }, []);

  const [activeSection, setActiveSection] = useState("hero-section");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero-section",
        "about",
        "skills",
        "project",
        "contact",
      ];

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

  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.top = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.top = "-100%";
  };
  const [activeTab, setActiveTab] = useState("education");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "ebec800b-8a1b-44af-9779-64601dea68df");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      alert("Your message has been sent successfully!");
      event.target.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <>
      <div className="portfolio">
        <header>
          <div className="navbar">
            <div className="logo">
              <h1>
                <a href="#">SANTHOSH</a>
              </h1>
            </div>

            {/* Mobile Menu */}
            <ul ref={menuRef} className="nav-menu">
              <FontAwesomeIcon
                icon={faXmark}
                className="close-icon"
                onClick={closeMenu}
              />

              <li>
                <a
                  href="#hero-section"
                  className={activeSection === "hero-section" ? "active" : ""}
                  onClick={() => {
                    setActiveSection("hero-section");
                    closeMenu();
                  }}
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className={activeSection === "about" ? "active" : ""}
                  onClick={() => {
                    setActiveSection("about");
                    closeMenu();
                  }}
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className={activeSection === "skills" ? "active" : ""}
                  onClick={() => {
                    setActiveSection("skills");
                    closeMenu();
                  }}
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#project"
                  className={activeSection === "project" ? "active" : ""}
                  onClick={() => {
                    setActiveSection("project");
                    closeMenu();
                  }}
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className={activeSection === "contact" ? "active" : ""}
                  onClick={() => {
                    setActiveSection("contact");
                    closeMenu();
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Right Side Buttons */}
            <div className="connect">
              <button>
                <a href="#contact">
                  Let's Chat
                  <FontAwesomeIcon icon={faMessage} />
                </a>
              </button>

              {/* MENU OPEN BUTTON */}
              <FontAwesomeIcon
                icon={faBars}
                className="menu-icon"
                onClick={openMenu}
              />
            </div>
          </div>
        </header>

        <div className="hero-section" id="hero-section">
          <div className="hero">
            <div className="left">
              <h4 className="welcome">WELCOME TO MY WORLD</h4>
              <h1>Hi I'm Santhosh</h1>
              <div className="typewriter">
                <h2>Fullstack Developer</h2>
              </div>
              <p className="para">
                I am a motivated and versatile individual, always eager to take
                an new challendes. With a passion for learning, I am delivering
                high-quality results. With a positive attitude and a growth
                mindset, I am ready to make a meaningful contribution and
                acheive great things.
              </p>
              <div className="hero-btn">
                <button className="hire-me">
                  <a href="#contact">
                    Hire Me Now !<FontAwesomeIcon icon={faRightFromBracket} />
                  </a>
                </button>
                <button className="resume">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    Resume
                    <FontAwesomeIcon icon={faDownload} />
                  </a>
                </button>
              </div>
            </div>
            <div className="right">
              <img src={assets.my_img} alt="" />
            </div>
          </div>
        </div>

        <div className="about-main" id="about">
          <div className="about">
            <div className="left">
              <img src={assets.my_img} alt="" />
            </div>
            <div className="right">
              <h2 className="abt">About Me</h2>
              <h1 className="abt">Let's Interoduce myself</h1>
              <p className="para">
                I'm Santhosh, a MERN Full Stack Developer from Coimbatore. I
                completed my full-stack development training at SDLC
                Institution, where I gained practical experience in React,
                Node.js, Express, MongoDB, and modern web technologies. I enjoy
                building clean, efficient, and scalable applications. My
                short-term goal is to begin my career in a reputed organization,
                and my long-term goal is to grow into a senior developer role
                after gaining 5–7 years of experience. I believe in continuous
                learning and contributing positively to my workplace and
                society.
              </p>
              <div className="about-btn">
                <div className="tab-container">
                  {/* Tab Buttons */}
                  <div className="tab-buttons">
                    <button
                      className={activeTab === "education" ? "active" : ""}
                      onClick={() => setActiveTab("education")}
                    >
                      Educations
                    </button>

                    <button
                      className={activeTab === "experience" ? "active" : ""}
                      onClick={() => setActiveTab("experience")}
                    >
                      Experience
                    </button>

                    <button
                      className={activeTab === "course" ? "active" : ""}
                      onClick={() => setActiveTab("course")}
                    >
                      Course
                    </button>
                  </div>

                  {/* Tab Content */}
                  <div className="tab-content">
                    {activeTab === "education" && (
                      <>
                        <h3 className="title">Under Graduate Degree</h3>
                        <p className="title-p">
                          Bachelor of Computer Application, RVS College
                        </p>
                        <p className="percent">
                          Percentage : <span>75.9%</span>
                        </p>

                        <h3 className="title ">Higher Secondary</h3>
                        <p className="title-p">
                          S C M Hr Sec School, Vadambacheri
                        </p>
                        <p className="percent">
                          Percentage : <span>78.2%</span>
                        </p>
                      </>
                    )}

                    {/* {activeTab === "experience" && <p>No awards added yet.</p>} */}

                    {activeTab === "experience" && (
                      <>
                        <h3 className="title">
                          ProPlus Logics Pvt. Ltd., Coimbatore
                        </h3>
                        <p className="title-p">
                          I have one year of experience as a Wordpress Developer
                          at ProPlus Logics Pvt. Ltd., Coimbatore, specializing
                          in UI/UX design, WordPress development, responsive web
                          layouts, and creating modern, user-friendly
                          interfaces.
                        </p>
                      </>
                    )}

                    {activeTab === "course" && (
                      <>
                        <h3 className="title">MERN Full Stack Developer</h3>
                        <p className="title-p">
                          I have successfully completed the MERN Full Stack
                          Development program at SDLC Training Institute,
                          Coimbatore, gaining hands-on experience in MongoDB,
                          Express.js, React.js, and Node.js.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <button className="resume">
                <a href="" target="_blank" rel="noopener noreferrer">
                  Resume
                  <FontAwesomeIcon icon={faDownload} />
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="skill-section-main" id="skills">
          <div className="skill-sections">
            <div className="title">
              <h1 className="abt">My Skills</h1>
              <p className="title-p">Technical & Professional</p>
            </div>
            <div className="skill-section">
              <div className="skill-left">
                <h3 className="skill-title">Technical Skills</h3>

                <div className="skill-bar">
                  <div className="info">
                    <p>HTML & CSS</p>
                    <p>93%</p>
                  </div>
                  <div className="bar">
                    <span className="html"></span>
                  </div>
                </div>
                <div className="skill-bar">
                  <div className="info">
                    <p>Bootstrap & jQuery</p>
                    <p>75%</p>
                  </div>
                  <div className="bar">
                    <span className="bootstrap"></span>
                  </div>
                </div>
                <div className="skill-bar">
                  <div className="info">
                    <p>JavaScript</p>
                    <p>87%</p>
                  </div>
                  <div className="bar">
                    <span className="javaScript"></span>
                  </div>
                </div>
                <div className="skill-bar">
                  <div className="info">
                    <p>React, Nodejs, Express</p>
                    <p>83%</p>
                  </div>
                  <div className="bar">
                    <span className="react"></span>
                  </div>
                </div>
              </div>
              <div className="skill-right">
                <h3 className="skill-title">Professional Skills</h3>
                <SkillsSection />
              </div>
            </div>
          </div>
        </div>

        <div className="project-section" id="project">
          <div className="title">
            <h1 className="abt">My Projects</h1>
            <p className="title-p">what i will do for you</p>
          </div>

          <div className="project-show">
            <div className="project">
              <img src={assets.project_1} alt="project" />

              <div className="overlay">
                <div className="content">
                  <h1>Chat Application </h1>
                  <p>
                    Developed a full-stack real-time chat application using
                    React, Node.js, Express, and MongoDB, enabling instant
                    messaging between users. Integrated user authentication,
                    REST APIs, and real-time communication to deliver a smooth
                    chat experience.
                  </p>
                  <p>
                    <b>Tech Stack :</b> React.js, Node.js, Express.js, MongoDB,
                    Socket.io
                  </p>
                  <button>
                    <a
                      href="https://chat-app-plum-eight.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="project">
              <img src={assets.project_2} alt="project" />

              <div className="overlay">
                <div className="content">
                  <h1>Gemini Clone</h1>
                  <p>
                    Developed a Gemini-inspired AI chat application using React,
                    HTML, CSS, and JavaScript that integrates an AI API to
                    generate intelligent responses. Implemented a modern chat
                    interface with dynamic message rendering, state management,
                    and API request limiting to efficiently manage usage and
                    prevent excessive API calls.
                  </p>
                  <p>
                    <b>Tech Stack :</b> React.js, JavaScript, HTML, CSS, AI API
                  </p>
                  <button>
                    <a
                      href="https://gemini-clone-lovat-sigma.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="project">
              <img src={assets.project_3} alt="project" />

              <div className="overlay">
                <div className="content">
                  <h1>E-Commerce Web Application </h1>
                  <p>
                    Built a fully responsive e-commerce web application
                    featuring product listings, product detail pages, and a
                    dynamic shopping cart system. Implemented interactive UI
                    components and optimized the site for seamless user
                    experience across devices.
                  </p>
                  <p>
                    <b>Tech Stack :</b> HTML, CSS, JavaScript
                  </p>

                  <button>
                    <a
                      href="https://js-main-project.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="project">
              <img src={assets.project_4} alt="project" />

              <div className="overlay">
                <div className="content">
                  <h1>Quiz App</h1>
                  <p>
                    Created a responsive quiz application featuring
                    multiple-choice questions, real-time answer validation, and
                    score calculation. Implemented dynamic question rendering
                    and interactive UI using JavaScript.
                  </p>
                  <p>
                    <b>Tech Stack :</b> HTML, CSS, JavaScript
                  </p>
                  <button>
                    <a
                      href="https://quiz-app-ten-flax-63.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="project">
              <img src={assets.project_5} alt="project" />

              <div className="overlay">
                <div className="content">
                  <h1>Industry based </h1>
                  <p>
                    A clean and responsive landing page built using HTML, CSS,
                    and JavaScript.The website includes multiple professionally
                    structured sections.
                  </p>
                  <p>
                    <b>Tech Stack :</b> HTML, CSS, JavaScript
                  </p>
                  <button>
                    <a
                      href="https://santhosh-286.github.io/first-project/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="project">
              <img src={assets.project_1} alt="project" />

              <div className="overlay">
                <div className="content">
                  <h1>Quiz App</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit, corrupti.
                  </p>
                  <button>
                    <a
                      href="https://santhosh-286.github.io/Quiz-app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="contact" id="contact">
          <div className="title">
            <h1 className="abt">Contact Me</h1>
            <p className="title-p">get in touch with me</p>
          </div>
          <div className="contact-form">
            <form onSubmit={onSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Full name"
                  name="name"
                  className="item"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="name"
                  className="item"
                />
              </div>
              <div className="input-box">
                <input
                  type="phone"
                  placeholder="Phone Number"
                  name="name"
                  className="item"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  name="name"
                  className="item"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your message"
                cols={30}
                rows={10}
                className="item"
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer">
            <p>
              Copyright @ 2025 by <span>Santhosh</span> || All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
