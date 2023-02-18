import React from "react";
import "./style.scss";

const Footer = (props) => {
  return (
    <footer>
      <div className="row footer-content">
        <div className="footer-col footer-myself col-3">
          <div className="logo-wrapper">
            <a
              href=""
              className="logo d-flex justify-content-around align-items-center"
            >
              <div className="logo__image mr-2">
                <img src="./public/assets/images/logo.png" alt="logo" />
              </div>
              <span className="logo__text text-light ml-2">Hiep</span>
            </a>
          </div>
          <p className="footer-col__intromyself">
            Welcome and open yourself to your truest love this year with us!
            With the Release Process
          </p>
          <div className="footer-social">
            <a href="" className="footer-social__item">
              {" "}
              icon1{" "}
            </a>
            <a href="" className="footer-social__item">
              {" "}
              icon1{" "}
            </a>
            <a href="" className="footer-social__item">
              {" "}
              icon1{" "}
            </a>
            <a href="" className="footer-social__item">
              {" "}
              icon1{" "}
            </a>
            <a href="" className="footer-social__item">
              {" "}
              icon1{" "}
            </a>
          </div>
        </div>
        <div className="footer-col col-3">
          <h4 className="footer-col__item-title">Navigation</h4>
          <ul className="navigation">
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a className="active">Recent Post</a>
            </li>
          </ul>
        </div>
        <div className="footer-col col-3">
          <h4 className="footer-col__item-title">All Service</h4>
          <ul className="all-service">
            <li>
              <a>Web Design</a>
            </li>
            <li>
              <a>Web developer</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a className="active">Recent Post</a>
            </li>
          </ul>
        </div>
        <div className="footer-col col-3">
          <h4 className="footer-col__item-title">Newsletter</h4>
          <p className="intro">
            Must explain to you how all this mistaken idea pleasure born and
            give you a complete account.
          </p>
          <form action="" className="form-newsletter">
            <div className="box-email">
              <input
                type="email"
                name="newsletter"
                placeholder="Email Address *"
              />
            <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer-bottom text-center p-4">
        <span> Copyright © 2022 Elito. All rights reserved. </span>
      </div>
    </footer>
  );
};

export default Footer;
