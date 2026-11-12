// import React from "react";
// import Select from "react-select";
// import { estimatedPrice, productOptions } from "../../View/constantData";

// const ContectUsSection = ({ isShow = true }) => {
//   return (
//     <section className="contactUsSection">
//       <div className="cu-wrapper">
//         {/* ---------- Form ---------- */}
//         <div className="cu-form-side mb-2">
//           <div className="cu-heading">
//             <h3>Send An Enquire</h3>
//             <img src="images/red-underline.png" alt="line" width="120" />
//           </div>

//           <form id="contactForm" name="contactForm" className="cu-form">
//             <div className="cu-grid-2">
//               <div className="cu-group">
//                 <label htmlFor="name">Full Name</label>
//                 <input
//                   type="text"
//                   className="cu-input"
//                   name="name"
//                   id="name"
//                   placeholder="Name"
//                 />
//               </div>

//               <div className="cu-group">
//                 <label htmlFor="email">Email Address</label>
//                 <input
//                   type="email"
//                   className="cu-input"
//                   name="email"
//                   id="email"
//                   placeholder="Email"
//                   required
//                 />
//               </div>

//               <div className="cu-group">
//                 <label htmlFor="category">Product Category</label>
//                 <Select
//                   inputId="category"
//                   classNamePrefix="cu-select"
//                   options={productOptions}
//                   placeholder="Select Product Category"
//                   isSearchable
//                   isClearable
//                 />
//               </div>

//               <div className="cu-group">
//                 <label htmlFor="budget">Estimated Budget</label>
//                 <Select
//                   inputId="budget"
//                   classNamePrefix="cu-select"
//                   options={estimatedPrice}
//                   placeholder="Select Estimated Budget"
//                   isSearchable
//                   isClearable
//                 />
//               </div>
//             </div>

//             <div className="cu-group">
//               <label htmlFor="number">Phone Number</label>
//               <input
//                 type="tel"
//                 inputMode="numeric"
//                 className="cu-input"
//                 name="number"
//                 id="number"
//                 placeholder="Enter Your Phone Number"
//               />
//             </div>

//             <div className="cu-group">
//               <label htmlFor="message">Message</label>
//               <textarea
//                 name="message"
//                 className="cu-input"
//                 id="message"
//                 rows={4}
//                 placeholder="Message"
//                 required
//                 minLength={5}
//               />
//             </div>

//             <button type="submit" className="cu-btn">
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* ---------- Info ---------- */}
//         <div className="cu-info-side">
//           <h3>Let's Create Something Beautiful Together</h3>
//           <p>
//             Share your requirements with us, and our experts will help you find
//             the perfect marble mandir, handicraft, or stone decor for your
//             space.
//           </p>

//           <ul className="customization-features">
//             <li>Custom Marble Designs &amp; Finishes</li>
//             <li>Premium Quality Makrana Marble</li>
//             <li>Expert Craftsmanship &amp; Finishing</li>
//             <li>Custom Sizes, Patterns &amp; Designs</li>
//           </ul>

//           {isShow && (
//             <div className="cu-contact-list">
//               <div className="dbox">
//                 <div className="icon">
//                   <span className="fa fa-phone"></span>
//                 </div>
//                 <a href="tel:+916367877532">+91 6367877532</a>
//               </div>

//               <div className="dbox">
//                 <div className="icon">
//                   <span className="fa fa-paper-plane"></span>
//                 </div>
//                 <a href="mailto:whiteMarbleArt@gmail.com">
//                   whiteMarbleArt@gmail.com
//                 </a>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContectUsSection;

import React, { useEffect, useState } from "react";
import Select from "react-select";
import { estimatedPrice,  productOptions } from "../../View/constantData";
import api from "../../api/axios";
import { getCategories } from "../../api/categoryApi";
import { generateProductOptions } from "../../View/Helper";

const ContectUsSection = ({ isShow = true }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: null,
    budget: null,
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Input fields change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await getCategories();
        
        setCategories(generateProductOptions(result.data ) || []);
      } catch (error) {
        console.error("Category API Error:", error);
      }
    };

    fetchCategories();
  }, []);
  console.log(categories,"---")

  // React Select change
  const handleSelectChange = (selectedOption, fieldName) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: selectedOption,
    }));
  };

  // Submit enquiry
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        product: formData.category?.label || "",
        category: formData.category?.value || "",
        budget: formData.budget?.label || "",
        message: formData.message.trim(),
      };

      const response = await api.post("/enquiries", payload);

      if (response.data.success) {
        setSuccessMessage(
          response.data.message || "Your enquiry has been submitted successfully!"
        );

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          category: null,
          budget: null,
          message: "",
        });
      } else {
        setErrorMessage(
          response.data.message || "Unable to submit your enquiry."
        );
      }
    } catch (error) {
      console.error("Enquiry API Error:", error);

      setErrorMessage(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contactUsSection">
      <div className="cu-wrapper">

        {/* Form */}
        <div className="cu-form-side mb-2">
          <div className="cu-heading">
            <h3>Send An Enquire</h3>
            <img
              src="images/red-underline.png"
              alt="line"
              width="120"
            />
          </div>

          <form
            id="contactForm"
            name="contactForm"
            className="cu-form"
            onSubmit={handleSubmit}
          >
            <div className="cu-grid-2">

              <div className="cu-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  className="cu-input"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="cu-group">
                <label htmlFor="category">Product Category</label>
                <Select
                  inputId="category"
                  classNamePrefix="cu-select"
                  options={categories}
                  placeholder="Select Product Category"
                  isSearchable
                  isClearable
                  value={formData.category}
                  onChange={(option) =>
                    handleSelectChange(option, "category")
                  }
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
                  value={formData.budget}
                  onChange={(option) =>
                    handleSelectChange(option, "budget")
                  }
                />
              </div>
            </div>

            <div className="cu-group">
              <label htmlFor="number">Phone Number</label>
              <input
                type="tel"
                inputMode="numeric"
                className="cu-input"
                name="phone"
                id="number"
                placeholder="Enter Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
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
                value={formData.message}
                onChange={handleChange}
                required
                minLength={5}
              />
            </div>

            {/* Success / Error Message */}
            {successMessage && (
              <p className="text-success mt-2">{successMessage}</p>
            )}

            {errorMessage && (
              <p className="text-danger mt-2">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="cu-btn"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Info */}
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
