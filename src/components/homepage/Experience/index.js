import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Experience = (props) => {
  return (
    <div id="my-experiences-wrapper">
      <section id="my-experiences" className="mb-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-6 text-center">
            <h2 className="my-experiences__title title">My Work Experience</h2>
            <p className="mt-4 intro-title">
            Have experience working for manufacturing and outsourcing companies.
            </p>
          </div>
        </div>
        <div className="my-experiences__list mt-5">
          <div className="exp-item d-flex justify-content-between align-items-center mb-4">
            <div className="year-range">05-07/2022</div>
            <div className="exp-icon">
              <FontAwesomeIcon fontSize={"25px"} color="#fff" icon={faCode} />
            </div>
            <div className="exp-detail">
              <h4 className="font-weight-bold">Intern Magento 2 Developer</h4>
              <span className="exp-address text-danger">Ha noi - Dong Da</span>
            </div>
            <div className="see-more">
              <a href="" className="go-to">
                Go to detail
              </a>
            </div>
          </div>
          <div className="exp-item d-flex justify-content-between align-items-center mb-4">
            <div className="year-range">07-09/2022</div>
            <div className="exp-icon">
              <FontAwesomeIcon fontSize={"25px"} color="#fff" icon={faCode} />
            </div>
            <div className="exp-detail">
              <h4 className="font-weight-bold">Fresher Magento 2 Developer</h4>
              <span className="exp-address text-danger">Ha noi - Dong Da</span>
            </div>
            <div className="see-more">
              <a href="" className="go-to">
                Go to detail
              </a>
            </div>
          </div>
          <div className="exp-item d-flex justify-content-between align-items-center mb-4">
            <div className="year-range">09/2022 - 08/2023</div>
            <div className="exp-icon">
              <FontAwesomeIcon fontSize={"25px"} color="#fff" icon={faCode} />
            </div>
            <div className="exp-detail">
              <h4 className="font-weight-bold">Magento 2 Developer</h4>
              <span className="exp-address text-danger">Ha noi - Dong Da</span>
            </div>
            <div className="see-more">
              <a href="" className="go-to">
                Go to detail
              </a>
            </div>
          </div>
          <div className="exp-item d-flex justify-content-between align-items-center mb-4">
            <div className="year-range">08-10/2023</div>
            <div className="exp-icon">
              <FontAwesomeIcon fontSize={"25px"} color="#fff" icon={faCode} />
            </div>
            <div className="exp-detail">
              <h4 className="font-weight-bold">Laravel Developer</h4>
              <span className="exp-address text-danger">Ha noi - Cau Giay</span>
            </div>
            <div className="see-more">
              <a href="" className="go-to">
                Go to detail
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
