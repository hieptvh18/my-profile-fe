import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import "./style.scss";
import Typed from "react-typed";

const BannerHome = (props) => {
  

  return (
    <section className="banner row align-items-center mb-4">
      <div className="banner__left col-12 col-sm-12 col-md-6 col-lg-6">
        <div className="banner__left-introduce">
          <h2 className="hello animate__animated">
            Hello Guys,
          </h2>
          {/* animate__animated animate__backInLeft */}
          <h2 className="im">
            I'm <Typed
            className="typing"
                strings={["Hiep Tran Van"]}
                startDelay={200}
                typeSpeed={80}
                backSpeed={60}
                // backDelay={100}
                smartBackspace={true}
                loop={true}
                showCursor={true}
                cursorChar={"!"}
              />
          </h2>
          <h4 className="job animate__animated animate__backInLeft animate__delay-1s mt-4 mb-4">
            IT nhung khong biet cai Win =))
          </h4>
          <p className="intro col-6 col-md-6 col-lg-9">
            Must explain to how all this mistaken idea denouncing pleasure pain
            the system and expound the actua.
          </p>
          <button className="hire-me">
            <FontAwesomeIcon className="icon-hireme" icon={faArrowRight} />
            <span className="hireme-text" style={{ marginLeft: "5px" }}>
              Hire me
            </span>
          </button>
        </div>
      </div>
      <div className="banner__right col-12 col-sm-12 col-md-6 col-lg-6">
        <div className="my-avatar">
          <img
            src="https://camo.githubusercontent.com/97d0c0c4209208d8ec9573c7e213e05872a9f59b703868647b559b77af601cc6/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f65382f66342f35332f65386634353334363961336563393765636433353464663436356437333931332e676966"
            alt=""
          />

          <div className="my-avatar__item item1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              title="ReactJs"
              alt=""
            />
          </div>
          <div className="my-avatar__item item2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png"
              title="Laravel"
              alt=""
            />
          </div>
          <div className="my-avatar__item item3">
            <img
              src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/204_Magento-512.png"
              title="PHP Magento 2"
              alt=""
            />
          </div>
          <div className="my-avatar__item item4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
              title="Angular logo"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerHome;
