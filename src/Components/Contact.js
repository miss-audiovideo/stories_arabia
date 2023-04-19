import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact-section">
        <div className="contact-left">
          <div className="contact-left-heading">
            <h1>Contact Us</h1>
          </div>
          <hr />
          <div className="contact-left-content">
            <p>
              Hello, let’s stay in touch! Feel free to drop us a line anytime.
              We keep our cameras running.
            </p>
          </div>
          {/* <div className="brand-email">
            <i className="fa fa-mail" />
            arabia@gmail.com
          </div>
          <div className="brand-number">
            <i className="fa fa-phone" />
            +966-5-567-567-567
          </div> */}
        </div>
        {/* <div className="contact-right">
          <form className="contact-form">
            <div className="form-group name">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group phone">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter your phone"
              />
            </div>
            <div className="form-group email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group message">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="2"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit">
              Submit
            </button>
          </form>
        </div> */}
      </div>
    </>
  );
};

export default Contact;
