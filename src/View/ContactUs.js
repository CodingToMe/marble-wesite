import React from "react";
import { ContactUsCard } from "../commanComponents";
import { ContectUsSection } from "../Components/Dashboard";

const ContactUs = () => {
  return (
    <div>
      <div className="about-us">
        <img
          className="banner"
          src="images/bg3.jpg"
          alt="Snow"
          width={"100%"}
          height={"470px"}
        />

        <div className="centered">
          <div className="content">
            <h1 className="title">
              Let’s build something in
              <span style={{ color: "#ff4000" }}> Marble </span>
            </h1>
            <p className="para">
              {/* <span style={{color:"#ffff"}} >White Marble Art </span> */}
              Whether it's a marble temple, fountain, or handcrafted decor,
              share your ideas with us, and we'll get back to you with design
              options, sizes, and a quote.
            </p>
          </div>
        </div>
      </div>
      <div className=" rootpage">
        <div className="contactUsSection  ">
          <div className="a1-section mt-4 text-center">
            <ContectUsSection isShow={false} />
          </div>
        </div>
      </div>
      <div className="contact-us-card">
      <div className="wrap contact-info-cards">
        {/* Call Us */}
        <div className="contact-info-card">
          <div className="contact-info-icon">
            <i className="bi bi-telephone"></i>
          </div>
          <h3>Call Us</h3>
          <p>
            <a href="tel:+916367877532">+91 6367877532</a>
          </p>
        </div>

        {/* WhatsApp */}
        <div className="contact-info-card">
          <div className="contact-info-icon">
            <i className="bi bi-whatsapp"></i>
          </div>
          <h3>WhatsApp</h3>
          <p>
            <a
              href="https://wa.me/916367877532"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat With Us
            </a>
          </p>
        </div>

        {/* Email */}
        <div className="contact-info-card">
          <div className="contact-info-icon">
            <i className="bi bi-envelope"></i>
          </div>
          <h3>Email</h3>
          <p>
            <a href="mailto:whitemarbleart@gmail.com">whitemarbleart@gmail.com</a>
          </p>
        </div>

        {/* Workshop */}
        <div className="contact-info-card">
          <div className="contact-info-icon">
            <i className="bi bi-geo-alt"></i>
          </div>
          <h3>Visit Workshop</h3>
          <p>Makrana, Rajasthan, India</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactUs;
