import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesSquare } from "@fortawesome/free-solid-svg-icons";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import "swiper/css/pagination";
import { Pagination } from "swiper";

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
          <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
            spaceBetween={50}
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            // responsive
            breakpoints={{
              390:{
                slidesPerView:1,
              },
              576: {
                // width: 576,
                slidesPerView: 2,
              },
              768: {
                // width: 768,
                slidesPerView: 3,
              },
              1200: {
                // width: 768,
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
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
                    <span className="tag__created-at">
                      <FontAwesomeIcon icon={faTimesSquare} /> 13 Jan 2022
                    </span>
                  </div>

                  <h3 className="blog-title">Become fullstack developer</h3>
                  <a href="" className="blog-detail-btn">
                    Read More
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
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

                  <h3 className="blog-title">Become fullstack developer</h3>
                  <a href="" className="blog-detail-btn">
                    Read More
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
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
                  <h3 className="blog-title">Become fullstack developer</h3>
                  <a href="" className="blog-detail-btn">
                    Read More
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
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

                  <h3 className="blog-title">Become fullstack developer</h3>
                  <a href="" className="blog-detail-btn">
                    Read More
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
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

                  <h3 className="blog-title">Become fullstack developer</h3>
                  <a href="" className="blog-detail-btn">
                    Read More
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default NewsWidget;
