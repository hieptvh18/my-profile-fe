import React from "react";

const RecentWork = (props) => {
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
        <div className="recent-item">
          <div className="box-img-recent">
            <img
              className="img-recent-work"
              src="./public/assets/images/img-2.jpg"
              alt="recent work"
            />
          </div>
          <h2 className="work-name">
            Follio - Multipurpose Portfolio HTML5 Template
          </h2>
          <span>Web developer</span>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
