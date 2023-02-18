import React from "react";
import './style.scss';

const NewsWidget = (props) => {
    return (  <section id="myblog" className="pb-5">
    <div className="row justify-content-center text-center mb-5">
      <div className="col-6">
        <h2 className="contact-title title">Lastest News</h2>
        <div className="intro-title">
          Must explain to you how all this mistaken idea of denouncing
          pleasure born and give you a complete account the system
        </div>
      </div>
    </div>
    <div className="blog-list">
      <div className="blog-item">
        <div className="img-blog">
          <img src="./public/assets/images/blog1.jpg" alt="blog" />
        </div>
        <span className="blog-created">13 Dec 2022</span>
        <h3 className="blog-title">The title blog</h3>
        <a href="" className="blog-detail-btn">POST DETAILS</a>
      </div>
      <div className="blog-item">
        <div className="img-blog">
          <img src="./public/assets/images/blog1.jpg" alt="blog" />
        </div>
        <span className="blog-created">13 Dec 2022</span>
        <h3 className="blog-title">The title blog</h3>
        <a href="" className="blog-detail-btn">POST DETAILS</a>
      </div>
      <div className="blog-item">
        <div className="img-blog">
          <img src="./public/assets/images/blog1.jpg" alt="blog" />
        </div>
        <span className="blog-created">13 Dec 2022</span>
        <h3 className="blog-title">The title blog</h3>
        <a href="" className="blog-detail-btn">POST DETAILS</a>
      </div>
      <div className="blog-item">
        <div className="img-blog">
          <img src="./public/assets/images/blog1.jpg" alt="blog" />
        </div>
        <span className="blog-created">13 Dec 2022</span>
        <h3 className="blog-title">The title blog</h3>
        <a href="" className="blog-detail-btn">POST DETAILS</a>
      </div>
    </div>
  </section>)
}

export default NewsWidget;