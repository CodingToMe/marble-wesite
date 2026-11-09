
import React, { useState } from "react";
import Select from "react-select";
import { estimatedPrice } from "../../View/constantData";

const OrderModal = ({ isOpen, onClose, productData }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      productId: productData?.id,
      productName: productData?.title,
      category: productData?.category,
      name: formData.get("name"),
      email: formData.get("email"),
      estimatedBudget: formData.get("estimatedBudget"),
      phone: formData.get("number"),
      message: formData.get("message"),
    };

    console.log(payload, "Order Payload");

    try {
      setLoading(true);

      const response = await fetch("YOUR_API_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit order");
      }

      const result = await response.json();

      console.log(result, "API Response");

      alert("Your order request submitted successfully!");

      form.reset();
      onClose();

    } catch (error) {
      console.error("Order API Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal fade show"
      style={{
        display: "block",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
      tabIndex={-1}
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">
              Order {productData?.title}
            </h5>

            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            />
          </div>

          <div className="modal-body">
            <form
              id="contactForm"
              name="contactForm"
              onSubmit={handleSubmit}
            >
              <div className="row">

                {/* Category */}
                <div className="col-md-6 mb-3">
                  <label className="label">Category</label>
                  <input
                    type="text"
                    className="form-control"
                    value={productData?.category || ""}
                    disabled
                  />
                </div>

                {/* Product Code */}
                <div className="col-md-6 mb-3">
                  <label className="label">Product Code</label>
                  <input
                    type="text"
                    className="form-control"
                    value={productData?.id || ""}
                    disabled
                  />
                </div>

                {/* Full Name */}
                <div className="col-md-6 mb-3">
                  <label className="label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="col-md-6 mb-3">
                  <label className="label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>

                {/* Estimated Budget */}
                <div className="col-md-12 mb-3">
                  <label className="label">Estimated Budget</label>

                  <Select
                    className="cl-form-control"
                    options={estimatedPrice}
                    placeholder="Select Estimated Budget"
                    isSearchable
                    isClearable
                    name="estimatedBudget"
                  />
                </div>

                {/* Phone */}
                <div className="col-md-12 mb-3">
                  <label className="label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="number"
                    placeholder="Enter Your Phone Number"
                    required
                  />
                </div>

                {/* Message */}
                <div className="col-md-12 mb-3">
                  <label className="label">Message</label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows={4}
                    placeholder="Enter Your Message"
                    minLength={5}
                    required
                  />
                </div>

              </div>
            </form>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
              disabled={loading}
            >
              Close
            </button>

            <button
              type="submit"
              form="contactForm"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Order"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OrderModal;
