import React from "react";
import Select from "react-select";

const ContectUsSection = ({isShow =true}) => {
  const productOptions = [
    { value: "marble-mandir", label: "Marble Mandir" },
    { value: "fountain", label: "Marble Fountain" },
    { value: "home-decor", label: "Home Decor" },
    { value: "tulsi-pot", label: "Tulsi Pot" },
    { value: "marble-slab", label: "Marble Slab" },
    { value: "kitchenware-dining", label: "Kitchenware & Dining" },
    { value: "candle-warmer-lamp", label: "Candle Warmer Lamp" },
  ];
  const estimatedPrice = [
    { value: "1-2-lakh", label: "₹1 – ₹2 Lakh" },
    { value: "2-3-lakh", label: "₹2 – ₹3 Lakh" },
    { value: "3-5-lakh", label: "₹3 – ₹5 Lakh" },
    { value: "5-10-lakh", label: "₹5 – ₹10 Lakh" },
    { value: "10-15-lakh", label: "₹10 – ₹15 Lakh" },
    { value: "15-20-lakh", label: "₹15 – ₹20 Lakh" },
    { value: "20-25-lakh", label: "₹20 – ₹25 Lakh" },
    { value: "above-25-lakh", label: "Above ₹25 Lakh" },
  ];
  return (
    <div>
      <section className="ftco-section">
        <div className="cl-container">
          <div className="cl-row cl-justify-content-center">
            <div className="cl-col-md-12">
              <div className="wrapper">
                <div className="cl-row cl-no-gutters">
                  <div className="cl-col-lg-8 cl-col-md-7 cl-order-md-last cl-d-flex cl-align-items-stretch">
                    <div
                      className="contact-wrap cl-w-100 cl-p-md-5 cl-p-4"
                      style={{ textAlign: "start" }}
                    >
                      <div className="contact-heading">
                        <h3 className="cl-mb-4">Send An Enquire</h3>
                        <img
                          src="images/red-underline.png"
                          alt="line"
                          width={"120px"}
                        />
                      </div>

                      <form
                        id="contactForm"
                        name="contactForm"
                        className="contactForm"
                      >
                        <div className="cl-row">
                          <div className=" row cl-col-md-12">
                            <div className="col-md-6">
                              <div className="cl-form-group">
                                <label className="label" htmlFor="name">
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="name"
                                  id="name"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="cl-form-group">
                                <label className="label" htmlFor="email">
                                  Email Address
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Email"
                                  required=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className=" row cl-col-md-12">
                            <div className="col-md-6">
                              <div className="cl-form-group">
                                <label className="label" htmlFor="name">
                                  Product Category
                                </label>
                                <Select
                                  className="cl-form-control"
                                  options={productOptions}
                                  placeholder="Select Product Category"
                                  isSearchable
                                  isClearable
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="cl-form-group">
                                <label className="label" htmlFor="email">
                                  Estimated Budget
                                </label>
                                <Select
                                  className="cl-form-control"
                                  options={estimatedPrice}
                                  placeholder="Select Estimated Budget"
                                  isSearchable
                                  isClearable
                                />
                              </div>
                            </div>
                          </div>
                          <div className="cl-col-md-12">
                            <div className="cl-form-group">
                              <label className="label" htmlFor="subject">
                                Phone Number
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                name="number"
                                id="number"
                                placeholder="Enter Your Phone Number"
                              />
                            </div>
                          </div>
                          <div className="cl-col-md-12">
                            <div className="cl-form-group">
                              <label className="label" htmlFor="#">
                                Message
                              </label>
                              <textarea
                                name="message"
                                className="cl-form-control"
                                id="message"
                                cols={30}
                                rows={4}
                                placeholder="Message"
                                required=""
                                minLength={5}
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="cl-col-md-12">
                            <div className="cl-form-group">
                              <input
                                type="submit"
                                defaultValue="Send Message"
                                className="cl-btn cl-btn-primary"
                              />
                              <div className="submitting btn btn-danger" />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="cl-col-lg-4 cl-col-md-5 cl-d-flex cl-align-items-stretch bg-texture">
                    <div className="info-wrap cl-w-100 cl-p-md-3 cl-p-4" style={{    marginTop: "25px"}}>
                      <h3>Let's Create Something Beautiful Together</h3>
                      <p className="cl-mb-4">
                        Share your requirements with us, and our experts will
                        help you find the perfect marble mandir, handicraft, or
                        stone decor for your space.
                      </p>

                      <ul class="customization-features">
                        <li>Custom Marble Designs &amp; Finishes</li>
                        <li>Premium Quality Makrana Marble</li>
                        <li>Expert Craftsmanship &amp; Finishing</li>
                        <li>Custom Sizes, Patterns &amp; Designs</li>
                      </ul>
                      {isShow && <div>
                      {/* <div className="dbox cl-w-100 cl-d-flex cl-align-items-start">
                        <div className="icon cl-d-flex cl-align-items-center cl-justify-content-center">
                          <span className="fa fa-map-marker"></span>
                        </div>
                        <div className="text cl-pl-3">
                          <p>
                            <span>Address:</span> 198 West 21th Street, Suite
                            721 New York NY 10016
                          </p>
                        </div>
                      </div> */}
                      <div className="dbox cl-w-100 cl-d-flex cl-align-items-center">
                        <div className="icon cl-d-flex cl-align-items-center cl-justify-content-center">
                          <span className="fa fa-phone"></span>
                        </div>
                        <div className="text cl-pl-3">
                          <p>
                            {/* <span>Phone:</span>{" "} */}
                            <a href="tel://916367877532">+91 6367877532</a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox cl-w-100 cl-d-flex cl-align-items-center">
                        <div className="icon cl-d-flex cl-align-items-center cl-justify-content-center">
                          <span className="fa fa-paper-plane"></span>
                        </div>
                        <div className="text cl-pl-3">
                          <p>
                            {/* <span>Email:</span>{" "} */}
                            <a href="mailto:whiteMarbleArt@gmail.com">
                              whiteMarbleArt@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                      {/* <div className="dbox cl-w-100 cl-d-flex cl-align-items-center">
                        <div className="icon cl-d-flex cl-align-items-center cl-justify-content-center">
                          <span className="fa fa-globe"></span>
                        </div>
                        <div className="text cl-pl-3">
                          <p>
                            <span>Website</span> <a href="#">yoursite.com</a>
                          </p>
                        </div>
                      </div> */}
                      </div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContectUsSection;
