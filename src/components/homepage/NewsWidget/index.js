import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesSquare } from "@fortawesome/free-solid-svg-icons";

const NewsWidget = (props) => {
  return (
    <div id="myblog-wrapper">
      <section id="myblog" className="myblog pb-5">
        <div className="myblog-top mb-5">
          <h2 className="myblog-title">Lastest From My Blog</h2>
          <div className="myblog-category-wrapper">
            <ul className="myblog-category">
              <li>
                <a href="#" className="link active">
                  All
                </a>
              </li>
              <li>
                <a href="#" className="link">
                  Devloper
                </a>
              </li>
              <li>
                <a href="#" className="link">
                  Design
                </a>
              </li>
              <li>
                <a href="#" className="link">
                  Life
                </a>
              </li>
              <li>
                <a href="#" className="link">
                  Management
                </a>
              </li>
              <li>
                <a href="#" className="link">
                  Menu
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="blog-list">
          <div className="blog-item">
            <div className="img-blog">
              <img
                src="https://assets.materialup.com/uploads/6ab5f964-2a06-4913-9826-0c928a9dd091/preview.png"
                alt="blog"
              />
            </div>
            <div className="blog-item__content">
              <div className="blog-item__tag">
                <span className="tag__category">Design</span>
                <span className="tag__created-at"><FontAwesomeIcon icon={faTimesSquare} /> 13 Jan 2022</span>
                              </div>

              <h3 className="blog-title">The title blog</h3>
              <a href="" className="blog-detail-btn">
                Read More
              </a>
            </div>
          </div>
          <div className="blog-item">
            <div className="img-blog">
              <img
                src="https://assets.materialup.com/uploads/013c048d-b659-4bb9-9ec2-bd2e9355ef63/preview.png"
                alt="blog"
              />
            </div>
            <div className="blog-item__content">
              <div className="blog-item__tag">
                <span className="tag__category">Design</span>
                <span className="tag__created-at">
                  <FontAwesomeIcon icon={faTimesSquare} /> 13 Jan 2022
                </span>
              </div>

              <h3 className="blog-title">The title blog</h3>
              <a href="" className="blog-detail-btn">
                Read More
              </a>
            </div>
          </div>
          <div className="blog-item">
            <div className="img-blog">
              <img
                src="https://assets.materialup.com/uploads/0c074539-1537-4a54-8958-05a1e7ba3fd8/preview.png"
                alt="blog"
              />
            </div>
            <div className="blog-item__content">
              <div className="blog-item__tag">
                <span className="tag__category">Design</span>
                <span className="tag__created-at">
                  <FontAwesomeIcon icon={faTimesSquare} /> 13 Jan 2022
                </span>
              </div>
              <h3 className="blog-title">The title blog</h3>
              <a href="" className="blog-detail-btn">
                Read More
              </a>
            </div>
          </div>
          <div className="blog-item">
            <div className="img-blog">
              <img
                src="https://assets.materialup.com/uploads/0c074539-1537-4a54-8958-05a1e7ba3fd8/preview.png"
                alt="blog"
              />
            </div>
            <div className="blog-item__content">
              <div className="blog-item__tag">
                <span className="tag__category">Design</span>
                <span className="tag__created-at">
                  <FontAwesomeIcon icon={faTimesSquare} /> 13 Jan 2022
                </span>
              </div>

              <h3 className="blog-title">The title blog</h3>
              <a href="" className="blog-detail-btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsWidget;
