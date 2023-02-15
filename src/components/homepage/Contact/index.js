import React from "react";

const Contact = (props)=>{
    return (<section id="contact">
    <div className="row justify-content-center text-center mb-5">
      <div className="col-6">
        <h2 className="contact-title title">Let's Talk</h2>
        <div className="intro-title">
          Must explain to you how all this mistaken idea of denouncing
          pleasure born and give you a complete account the system
        </div>
      </div>
    </div>
    <div className="contact-content">
      <div className="form-contact col-12 col-lg-7">
        <h4 className="font-weight-bold text-center mb-5">Get In Touch</h4>
        <form action="" method="POST">
          <div className="row">
            <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
              <input
                type="text"
                className=""
                name="name"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
              <input
                type="text"
                className=""
                name="email"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="form-group">
            <input type="tel" name="phone" placeholder="Your Phone" />
          </div>
          <div className="form-group">
            <select name="service" id="service-input">
              <option value="">Choose a Service</option>
              <option value="Web design">Web Design</option>
              <option value="PHP Developer">PHP Developer</option>
            </select>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              id="message-contact"
              cols="30"
              rows="8"
              placeholder="Message"
            ></textarea>
          </div>
          <button className="btn-submit-contact mt-4" type="submit">
            Submit Now
          </button>
        </form>
      </div>
      <div className="contact__right col-12 col-lg-5">
        <div className="contact-right__item">
          <h4 className="contact-item__title">155 Cau Giay, Ha Noi</h4>
          <div className="d-flex align-items-center">
            <div className="icon icon-address">icon</div>
            <span className="sub-title_contact-title">Office Address</span>
          </div>
        </div>
        <div className="contact-right__item">
          <h4 className="contact-item__title">155 Cau Giay, Ha Noi</h4>
          <div className="d-flex align-items-center">
            <div className="icon icon-address">icon</div>
            <span className="sub-title_contact-title">Office Address</span>
          </div>
        </div>
        <div className="contact-right__item">
          <h4 className="contact-item__title">155 Cau Giay, Ha Noi</h4>
          <div className="d-flex align-items-center">
            <div className="icon icon-address">icon</div>
            <span className="sub-title_contact-title">Office Address</span>
          </div>
        </div>
      </div>
    </div>
  </section>)
}

export default Contact;