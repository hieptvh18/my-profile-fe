import React from "react";
import "./style.scss";
import Slider from "react-slick";

const RecentWork = (props) => {
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <section id="recent-work">
      <div className="recent-work__top d-flex justify-content-center">
        <div className="recent-work__top-left">
          <h2 className="title">Recent Work.</h2>
          <p className="intro-title">
            Must explain to you how all this mistaken idea pleasure born and
            give you a complete account.
          </p>
        </div>
        <div className="recent-work__right">
          <div className="icon-recent">icon</div>
        </div>
      </div>
      <div className="recent-work__detail">
        {/* <Slider {...settings}> */}

          <div className="recent-item">
            <div className="box-img-recent">
              <img
                className="img-recent-work"
                src="https://elito-next.netlify.app/images/project/img-2.jpg"
                alt="recent work"
              />
            </div>
            <h4 className="work-name">
              Follio - Multipurpose Portfolio HTML5 Template
            </h4>
            <span className="work-sub-name">Web developer</span>
          </div>
          <div className="recent-item">
            <div className="box-img-recent">
              <img
                className="img-recent-work"
                src="https://elito-next.netlify.app/images/project/img-2.jpg"
                alt="recent work"
              />
            </div>
            <h4 className="work-name">
              Follio - Multipurpose Portfolio HTML5 Template
            </h4>
            <span className="work-sub-name">Web developer</span>
          </div>
          <div className="recent-item">
            <div className="box-img-recent">
              <img
                className="img-recent-work"
                src="https://elito-next.netlify.app/images/project/img-2.jpg"
                alt="recent work"
              />
            </div>
            <h4 className="work-name">
              Follio - Multipurpose Portfolio HTML5 Template
            </h4>
            <span className="work-sub-name">Web developer</span>
          </div>
        {/* </Slider> */}
      </div>
    </section>
  );
};

export default RecentWork;
