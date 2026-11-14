import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "./AuthContext";

const INITIAL_FORM = { name: "", email: "", mobile: "", password: "" };

const Register = ({ isOpen, onClose }) => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // mobile me sirf digits allow karo (max 10)
    const next = name === "mobile" ? value.replace(/\D/g, "").slice(0, 10) : value;

    setForm((prev) => ({ ...prev, [name]: next }));
  };

  const handleClose = () => {
    setForm(INITIAL_FORM);
    setError("");
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // basic validation
    if (form.name.trim().length < 2) {
      return setError("Please enter your full name.");
    }
    if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      return setError("Please enter a valid 10-digit mobile number.");
    }
    if (form.password.length < 6) {
      return setError("Password must be at least 6 characters.");
    }

    setLoading(true);

    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        mobile: form.mobile,
        password: form.password, // password ko trim mat karo
      };

      const response = await api.post("/auth/register", payload);

      if (response.data?.success) {
        const data = response.data.data;
        login(data); // { token, user }

        setForm(INITIAL_FORM);
        onClose();

        if (data?.user?.role === "admin") navigate("/admin-dashboard");
      } else {
        setError(response.data?.message || "Unable to register. Please try again.");
      }
    } catch (err) {
      console.error("Register API Error:", err);
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      onClick={handleClose}
    >
      <div
        className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-sm-down"
        style={{ maxWidth: "460px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="modal-content bg-dark text-white border-0"
          style={{ borderRadius: "1rem" }}
        >
          <div className="modal-header border-0 pb-0">
            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Close"
              onClick={handleClose}
            />
          </div>

          <div className="modal-body px-4 px-md-5 pb-4 pt-0">
            <form id="registerForm" name="registerForm" onSubmit={handleSubmit}>
              <div className="text-center">
                <h2 className="fw-bold mb-2 text-uppercase fs-3">Sign Up</h2>
                <p className="text-white-50 mb-4">Create your account to continue.</p>

                {error && (
                  <div className="alert alert-danger py-2" role="alert">
                    {error}
                  </div>
                )}

                <div className="form-floating mb-3 text-start text-dark">
                  <input
                    type="text"
                    id="registerName"
                    name="name"
                    className="form-control"
                    placeholder="Full Name"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    disabled={loading}
                    required
                  />
                  <label htmlFor="registerName">Full Name</label>
                </div>

                <div className="form-floating mb-3 text-start text-dark">
                  <input
                    type="email"
                    id="registerEmail"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    disabled={loading}
                    required
                  />
                  <label htmlFor="registerEmail">Email</label>
                </div>

                <div className="form-floating mb-3 text-start text-dark">
                  <input
                    type="tel"
                    id="registerMobile"
                    name="mobile"
                    className="form-control"
                    placeholder="Mobile Number"
                    autoComplete="tel"
                    inputMode="numeric"
                    maxLength={10}
                    value={form.mobile}
                    onChange={handleChange}
                    disabled={loading}
                    required
                  />
                  <label htmlFor="registerMobile">Mobile Number</label>
                </div>

                <div className="form-floating mb-3 text-start text-dark">
                  <input
                    type="password"
                    id="registerPassword"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    autoComplete="new-password"
                    value={form.password}
                    onChange={handleChange}
                    disabled={loading}
                    required
                  />
                  <label htmlFor="registerPassword">Password</label>
                </div>

                <button
                  className="btn btn-outline-light btn-lg w-100 mt-2 mb-3"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      />
                      Creating account...
                    </>
                  ) : (
                    "Sign Up"
                  )}
                </button>

                <p className="mt-3 mb-0">
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="btn btn-link p-0 align-baseline text-white-50 fw-bold text-decoration-none"
                    onClick={() => {
                      handleClose();
                    //   onSwitchToLogin?.();
                    }}
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
