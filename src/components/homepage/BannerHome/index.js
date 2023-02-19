import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import 'animate.css';
import './style.scss';

const BannerHome = (props) => {
  return (
    <section className="banner row align-items-center mb-4">
      <div className="banner__left col-12 col-sm-12 col-md-6 col-lg-6">
        <div className="banner__left-introduce">
          <h2 className="hello text-warning animate__animated animate__tada animate__delay-3s animate__infinite infinite animate__slower 2s">
            Hello,
          </h2>
          <h1 className="im animate__animated animate__backInLeft">
            Im Hiep Tran.
          </h1>
          <h4 className="job animate__animated animate__backInLeft animate__delay-1s mt-4 mb-4">
            Backend/Fontend Developer
          </h4>
          <p className="intro col-6 col-md-6 col-lg-9">
            Must explain to how all this mistaken idea denouncing pleasure pain
            the system and expound the actua.
          </p>
          <button className="hire-me">
            <FontAwesomeIcon className="icon-hireme" icon={faArrowRight} />
            <span className="hireme-text" style={{"marginLeft":"5px"}}>Hire me</span>
          </button>
        </div>
      </div>
      <div className="banner__right col-12 col-sm-12 col-md-6 col-lg-6">
        <div className="my-avatar">
          <img src="https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2l0ZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt=""  />
          <div className="my-avatar__item item1">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" title="ReactJs" alt="" />
          </div>
          <div className="my-avatar__item item2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png" title="Laravel" alt="" />
          </div>
          <div className="my-avatar__item item3">
            <img src="https://www.nicepng.com/png/detail/222-2229785_magento-2-logo-magento-2-logo-png.png" title="PHP Magento 2" alt="" />
          </div>
          <div className="my-avatar__item item4">
            <img src="https://www.pngitem.com/pimgs/m/520-5202823_nodejs-node-js-logo-png-transparent-png.png" title="NodeJs" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerHome;
