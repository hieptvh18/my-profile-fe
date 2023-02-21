import './style.scss';
import React from "react";
import { useEffect } from 'react';
import "primeicons/primeicons.css";
import logo from "../../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  // handle scroll header fixed
  useEffect(()=>{
    window.onscroll = function(){
      const headerEl = document.querySelector('.header-wrapper');
      if(window.pageYOffset > headerEl.offsetTop){
        headerEl.classList.add('fixed');
      }else{
        headerEl.classList.remove('fixed');
      }   
    }
  },[])

  return (
    <header className="d-flex justify-content-between align-items-center" id='header'>
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
      <div className="navbar">
        <ul className="d-flex justify-content-between">
          <li>
            <a className="p-2 text-light active" href="">
              Home
            </a>
          </li>
          <li>
            <a className="p-2 text-light" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="p-2 text-light" href="#service">
              Service
            </a>
          </li>
          <li>
            <a className="p-2 text-light" href="#my-experiences">
              Experience
            </a>
          </li>
          <li>
            <a className="p-2 text-light" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a className="p-2 text-light" href="#myblog">
              My Blog
            </a>
          </li>
        </ul>
      </div>
      <div className="resume-download">
        <button id="btn-dl-resume">
          <span className="mr-2" style={{"marginRight":"2px"}}>Resume</span>
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </div>
    </header>
  );
};

export default Header;
