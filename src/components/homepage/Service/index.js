import React from "react";


const Service = (props) =>{
    return (<section id="service" className="mt-2 mb-5">
    <div className="row justify-content-center">
      <div className="service-title col-6">
        <h2 className="title">Popular Services</h2>
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
            <img src="" alt="" />
          </div>
          <h4 className="service-item__title">Graphic Design</h4>
          <p className="service-item__desc">
            Explain to you how all this mistaken idea of denouncing
            pleasure born and give you complete account the system.
          </p>
          <button className="learn-more-service-item">
            <span>Learn more</span>
          </button>
        </div>
        <div className="item">
          <div className="service-item-icon">
            <img src="" alt="" />
          </div>
          <h4 className="service-item__title">Graphic Design</h4>
          <p className="service-item__desc">
            Explain to you how all this mistaken idea of denouncing
            pleasure born and give you complete account the system.
          </p>
          <button className="learn-more-service-item">
            <span>Learn more</span>
          </button>
        </div>
        <div className="item">
          <div className="service-item-icon">
            <img src="" alt="" />
          </div>
          <h4 className="service-item__title">Graphic Design</h4>
          <p className="service-item__desc">
            Explain to you how all this mistaken idea of denouncing
            pleasure born and give you complete account the system.
          </p>
          <button className="learn-more-service-item">
            <span>Learn more</span>
          </button>
        </div>
      </div>
    </div>
  </section>)
}


export default Service;