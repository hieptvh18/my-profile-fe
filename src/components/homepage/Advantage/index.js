import React from "react";
import "./style.scss";

const Advantage = (props) => {
  return (
    <div id="about-wrapper">
      <section id="about" className="row mt-5 align-items-center">
        <div className="about__left col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="about__left-experience">
            <h1 className="experience__title">
              <div className="month">1.5</div>
              <p>year of Experience</p>
            </h1>
            <div className="experience__detail">
              <div>Outsource & Product company.</div>
              <span>100%</span>
            </div>
          </div>
        </div>
        <div className="about__right col-12 col-sm-12 col-md-6 col-lg-6">
          <h2 className="title-advantage">My Advantage</h2>
          <p className="about__right-intro-advantage intro-title">
            Have Backend PHP programming skills and experience and have basic knowledge of other programming languages ​​and frameworks such as: Reactjs, Vuejs, Nodejs Express.
          </p>
          <div className="about__right-advantage-items">
            <div className="items">
              <div className="item">
                <div className="item-percent">100%</div>
                <div className="item-title">PHP Language</div>
              </div>
            </div>
            <div className="items">
              <div className="item">
                <div className="item-percent">90%</div>
                <div className="item-title">Javascript Language</div>
              </div>
            </div>
            <div className="items">
              <div className="item">
                <div className="item-percent">40%</div>
                <div className="item-title">NodeJs Framework</div>
              </div>
            </div>
            <div className="items">
              <div className="item">
                <div className="item-percent">30%</div>
                <div className="item-title">ReactJs Framework</div>
              </div>
            </div>
            <div className="items">
              <div className="item">
                <div className="item-percent">100%</div>
                <div className="item-title">Magento 2</div>
              </div>
            </div>
            <div className="items">
              <div className="item">
                <div className="item-percent">100%</div>
                <div className="item-title">Laravel Framework</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advantage;
