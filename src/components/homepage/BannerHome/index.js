import React from "react";
import 'animate.css';

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
            <span>Hire me</span>
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="banner__right col-12 col-sm-12 col-md-6 col-lg-6">
        <div className="my-avatar">
          <img src="https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2l0ZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
          <div className="my-avatar__item item1">
            <img src="../../assets/images/photoshop.svg" alt="" />
          </div>
          <div className="my-avatar__item item2">
            <img src="../../assets/images/illustrator.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerHome;
