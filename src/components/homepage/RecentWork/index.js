import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTabletScreenButton,
  faChevronRight,
  faDisplay
} from "@fortawesome/free-solid-svg-icons";
import { Zoom } from "react-reveal";


const RecentWork = (props) => {
  return (
    <section id="recent-work">
      <Zoom>
        <div className="recent-work__detail">
          <div className="recent-item">
            <div className="recent-item__work-icon">
              <FontAwesomeIcon icon={faTabletScreenButton} />
            </div>
            <div className="recent-item__title">Magento Developer</div>
            <p className="recent-item__count-project">+10 project</p>
            <div className="recent-item__see-project">
              <a href="#">See Project</a>{" "}
              <FontAwesomeIcon icon={faChevronRight} color={"#fff"} />
            </div>
          </div>
          <div className="recent-item active">
            <div className="recent-item__work-icon">
              <FontAwesomeIcon icon={faDisplay} />
            </div>
            <div className="recent-item__title">Laravel Developer</div>
            <p className="recent-item__count-project">+10 project</p>
            <div className="recent-item__see-project">
              <a href="#">See Project</a>{" "}
              <FontAwesomeIcon icon={faChevronRight} color={"#fff"} />
            </div>
          </div>
          <div className="recent-item">
            <div className="recent-item__work-icon">
              <FontAwesomeIcon icon={faDisplay} />
            </div>
            <div className="recent-item__title">Web Backend Developer</div>
            <p className="recent-item__count-project">+10 project</p>
            <div className="recent-item__see-project">
              <a href="#">See Project</a>{" "}
              <FontAwesomeIcon icon={faChevronRight} color={"#fff"} />
            </div>
          </div>
        </div>
      </Zoom>
    </section>
  );
};

export default RecentWork;
