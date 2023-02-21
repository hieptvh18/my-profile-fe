import React from "react";
import ReactDOM from 'react-dom'
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormNewsletter from "./FormNewsletter";
import { faFaceAngry } from "@fortawesome/free-solid-svg-icons";
import Logo from '../../../assets/images/logo.png';
import { faTwitter, faFacebook, faInstagram, faGithub,faGoogle,faSkype, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
        

const Footer = (props) => {
  return (
    <footer>
      <div className="row footer-content">
        <div className="footer-col footer-myself col-4">
          <div className="logo-wrapper">
            <a
              href=""
              className="logo d-flex align-items-center"
            >
              <div className="logo__image mr-2">
                <img src={Logo} alt="logo" />
              </div>
              <span className="logo__text text-light ml-2">Hiep</span>
            </a>
          </div>
          <p className="footer-col__intromyself col-10">
            Welcome and open yourself to your truest love this year with us!
            With the Release Process
          </p>
          <div className="footer-social">
            <a href="" className="footer-social__item" title="facebook">
            <FontAwesomeIcon color="#fff" fontSize={"24px"} icon={faFacebook}/>
            </a>
            <a href="" className="footer-social__item" title="Google">
            <FontAwesomeIcon color="#fff" fontSize={"24px"} icon={faGoogle}/>
            </a>
            <a href="" className="footer-social__item" title="github">
            <FontAwesomeIcon color="#fff" fontSize={"24px"} icon={faGithub}/>
            </a>
            <a href="" className="footer-social__item" title="Twittwer">
            <FontAwesomeIcon color="#fff" fontSize={"24px"} icon={faTwitter}/>
            </a>
            <a href="" className="footer-social__item" title="Skype">
            <FontAwesomeIcon color="#fff" fontSize={"24px"} icon={faSkype}/>
            </a>
          </div>
        </div>
        <div className="footer-col col-3">
          <h4 className="footer-col__item-title">Navigation</h4>
          <ul className="navigation">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#" className="active">Recent Post</a>
            </li>
          </ul>
        </div>
        <div className="footer-col col-2">
          <h4 className="footer-col__item-title">All Service</h4>
          <ul className="all-service">
            <li>
              <a href="#">Web Design</a>
            </li>
            <li>
              <a href="#">Web developer</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#" className="active">Recent Post</a>
            </li>
          </ul>
        </div>
        <div className="footer-col col-3">
          <h4 className="footer-col__item-title">Newsletter</h4>
          <p className="intro">
            Must explain to you how all this mistaken idea pleasure born and
            give you a complete account.
          </p>
          {/* form newsletter */}
          <FormNewsletter/>
        </div>
      </div>
      <div className="footer-bottom text-center p-4">
        <span> Copyright © 2023 Hieptvh. All rights reserved. </span>
      </div>
    </footer>
  );
};

export default Footer;
