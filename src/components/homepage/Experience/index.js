import React from "react";


const Experience = (props) =>{
    return ( <section id="my-experiences" className="mb-5 mt-5">
    <div className="row justify-content-center">
      <div className="col-6 text-center">
        <h2 className="my-experiences__title title">My Work Experience</h2>
        <p className="mt-4 intro-title">
          Must explain to you how all this mistaken idea of denouncing
          pleasure born and give you a complete account the system
        </p>
      </div>
    </div>
    <div className="my-experiences__list mt-5">
      <div
        className="exp-item d-flex justify-content-between align-items-center mb-4"
      >
        <div className="year-range">2015-2016</div>
        <div className="exp-icon">@</div>
        <div className="exp-detail">
          <h4 className="font-weight-bold">Fresher Php developer</h4>
          <span className="exp-address text-danger">Ha noi - Vietnam</span>
        </div>
        <div className="see-more">
          <a href="" className="go-to">Go to detail</a>
        </div>
      </div>
      <div
        className="exp-item d-flex justify-content-between align-items-center mb-4"
      >
        <div className="year-range">2015-2016</div>
        <div className="exp-icon">@</div>
        <div className="exp-detail">
          <h4 className="font-weight-bold">Fresher Php developer</h4>
          <span className="exp-address text-danger">Ha noi - Vietnam</span>
        </div>
        <div className="see-more">
          <a href="" className="go-to">Go to detail</a>
        </div>
      </div>
      <div
        className="exp-item d-flex justify-content-between align-items-center mb-4"
      >
        <div className="year-range">2015-2016</div>
        <div className="exp-icon">@</div>
        <div className="exp-detail">
          <h4 className="font-weight-bold">Fresher Php developer</h4>
          <span className="exp-address text-danger">Ha noi - Vietnam</span>
        </div>
        <div className="see-more">
          <a href="" className="go-to">Go to detail</a>
        </div>
      </div>
      <div
        className="exp-item d-flex justify-content-between align-items-center mb-4"
      >
        <div className="year-range">2015-2016</div>
        <div className="exp-icon">@</div>
        <div className="exp-detail">
          <h4 className="font-weight-bold">Fresher Php developer</h4>
          <span className="exp-address text-danger">Ha noi - Vietnam</span>
        </div>
        <div className="see-more">
          <a href="" className="go-to">Go to detail</a>
        </div>
      </div>
    </div>
  </section>)
}

export default Experience;