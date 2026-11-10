import React from "react";
import Select from "react-select";
import { estimatedPrice, productOptions } from "../../View/constantData";

const ContectUsSection = ({ isShow = true }) => {
  return (
    <section className="contactUsSection">
      <div className="cu-wrapper">
        {/* ---------- Form ---------- */}
        <div className="cu-form-side mb-2">
          <div className="cu-heading">
            <h3>Send An Enquire</h3>
            <img src="images/red-underline.png" alt="line" width="120" />
          </div>

          <form id="contactForm" name="contactForm" className="cu-form">
            <div className="cu-grid-2">
              <div className="cu-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  className="cu-input"
                  name="name"
                  id="name"
                  placeholder="Name"
                />
              </div>

              <div className="cu-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  className="cu-input"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="cu-group">
                <label htmlFor="category">Product Category</label>
                <Select
                  inputId="category"
                  classNamePrefix="cu-select"
                  options={productOptions}
                  placeholder="Select Product Category"
                  isSearchable
                  isClearable
                />
              </div>

              <div className="cu-group">
                <label htmlFor="budget">Estimated Budget</label>
                <Select
                  inputId="budget"
                  classNamePrefix="cu-select"
                  options={estimatedPrice}
                  placeholder="Select Estimated Budget"
                  isSearchable
                  isClearable
                />
              </div>
            </div>

            <div className="cu-group">
              <label htmlFor="number">Phone Number</label>
              <input
                type="tel"
                inputMode="numeric"
                className="cu-input"
                name="number"
                id="number"
                placeholder="Enter Your Phone Number"
              />
            </div>

            <div className="cu-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                className="cu-input"
                id="message"
                rows={4}
                placeholder="Message"
                required
                minLength={5}
              />
            </div>

            <button type="submit" className="cu-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* ---------- Info ---------- */}
        <div className="cu-info-side">
          <h3>Let's Create Something Beautiful Together</h3>
          <p>
            Share your requirements with us, and our experts will help you find
            the perfect marble mandir, handicraft, or stone decor for your
            space.
          </p>

          <ul className="customization-features">
            <li>Custom Marble Designs &amp; Finishes</li>
            <li>Premium Quality Makrana Marble</li>
            <li>Expert Craftsmanship &amp; Finishing</li>
            <li>Custom Sizes, Patterns &amp; Designs</li>
          </ul>

          {isShow && (
            <div className="cu-contact-list">
              <div className="dbox">
                <div className="icon">
                  <span className="fa fa-phone"></span>
                </div>
                <a href="tel:+916367877532">+91 6367877532</a>
              </div>

              <div className="dbox">
                <div className="icon">
                  <span className="fa fa-paper-plane"></span>
                </div>
                <a href="mailto:whiteMarbleArt@gmail.com">
                  whiteMarbleArt@gmail.com
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContectUsSection;