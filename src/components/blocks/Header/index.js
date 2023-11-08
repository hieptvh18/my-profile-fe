import "./style.scss";
import React, { useState } from "react";
import { useEffect } from "react";
import "primeicons/primeicons.css";
import logo from "../../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  // handle scroll header fixed
  const [activeNavbar, setActiveNavbar] = useState(false);

  const clickBars = () =>{
    setActiveNavbar(true);
  }

  const clickCloseBars = () =>{
    setActiveNavbar(false);
  }

  return (
    <div className="header-wrapper">
      <header
        className="d-flex justify-content-between align-items-center"
        id="header"
      >
        <div className="logo-wrapper">
          <a
            href=""
            className="logo d-flex justify-content-around align-items-center"
          >
            <div className="logo__image mr-2">
              <img src={logo} alt="logo" />
            </div>
            <span className="logo__text text-light ml-2">Hiep</span>
          </a>
        </div>
        <div className={activeNavbar ? "navbar active" : "navbar"}>
          <ul className="d-flex justify-content-between">
            <li>
              <a className="text-light active" href="">
                Home
              </a>
            </li>
            <li>
              <a className="text-light" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="text-light" href="#service">
                Service
              </a>
            </li>
            <li>
              <a className="text-light" href="#my-experiences">
                Experience
              </a>
            </li>
            <li>
              <a className="text-light" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a className="text-light" href="#myblog">
                My Blog
              </a>
            </li>
          </ul>
          <div className="close" onClick={clickCloseBars}></div>
        </div>
        <div className="resume-download">
          <button id="btn-dl-resume">
            <a
            href="https://firebasestorage.googleapis.com/v0/b/resume-react-8e97f.appspot.com/o/Tran-Van-Hoang-Hiep_Junior-PHP-Developer.pdf?alt=media&token=e0066a56-80d2-4352-a5d2-bc4b988fd5c9&_gl=1*v0uyit*_ga*OTQwOTgwODkzLjE2OTYyMTE5MDk.*_ga_CW55HF8NVT*MTY5OTQzNjAzMy4yMi4xLjE2OTk0MzYyODMuNDEuMC4w"
            download="Example-PDF-document"
            target="_blank"
            rel="noreferrer"
             className="mr-2" style={{ marginRight: "2px" }}>
              Resume
            </a>
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
          <div className="navbar-responsive" onClick={clickBars} ></div>
        </div>
      </header>
    </div>
  );
};

export default Header;
