import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import './style.scss';

const Service = (props) =>{
    return (<section id="service" className="">
    <div className="row justify-content-center">
      <div className="service-title col-6">
        <h2 className="title text-center">Popular Services</h2>
        <p className="service-title__desc text-center intro-title">
          Must explain to you how all this mistaken idea of denouncing
          pleasure born and give you a complete account the system
        </p>
      </div>
    </div>
    <div className="service-tab">
      <ul className="service-tab__nav d-flex justify-content-center mt-5">
        <li className="service-nav__item mr-4">
          <a className="active nav-link">Design</a>
        </li>
        <li className="service-nav__item mr-4">
          <a className="nav-link">Development</a>
        </li>
        <li className="service-nav__item mr-4">
          <a className="nav-link">Marketing</a>
        </li>
      </ul>

      <div className="service-tab__items d-flex justify-content-between">
        <div className="item">
          <div className="service-item-icon">
          <FontAwesomeIcon fontSize={"50px"} color="#fff" icon={faCode} />
          </div>
          <h4 className="service-item__title mt-4">Graphic Design</h4>
          <p className="service-item__desc">
            Explain to you how all this mistaken idea of denouncing
            pleasure born and give you complete account the system.
          </p>
          <button className="learn-more-service-item">
            <FontAwesomeIcon icon={faArrowRight}/>
            <span>Learn more</span>
          </button>
        </div>
        <div className="item">
          <div className="service-item-icon">
            <FontAwesomeIcon fontSize={"50px"} color="#fff" icon={faCode} />
          </div>
          <h4 className="service-item__title mt-4">Graphic Design</h4>
          <p className="service-item__desc">
            Explain to you how all this mistaken idea of denouncing
            pleasure born and give you complete account the system.
          </p>
          <button className="learn-more-service-item">
            <FontAwesomeIcon icon={faArrowRight}/>
            <span>Learn more</span>
          </button>
        </div>
        <div className="item">
          <div className="service-item-icon">
          <FontAwesomeIcon fontSize={"50px"} color="#fff" icon={faCode} />
          </div>
          <h4 className="service-item__title mt-4">Graphic Design</h4>
          <p className="service-item__desc">
            Explain to you how all this mistaken idea of denouncing
            pleasure born and give you complete account the system.
          </p>
          <button className="learn-more-service-item">
            <FontAwesomeIcon icon={faArrowRight}/>
            <span>Learn more</span>
          </button>
        </div>
      </div>
    </div>
  </section>)
}


export default Service;