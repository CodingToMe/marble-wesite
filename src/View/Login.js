import React, { useState } from "react";
import api from "../api/axios";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Login = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage,setSuccessMessage]=useState("")
  const { login } = useAuth();
  const navigate =useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setForm((prev) => ({ ...prev, [name]: value }));

  };
    const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setError("");

    try {
      const payload = {
       
        email: form.email.trim(),
        password: form.password.trim(),
 
      };

      const response = await api.post("/auth/login", payload);

      if (response.data.success) {
        setSuccessMessage(
          response.data.message || "Your enquiry has been submitted successfully!"
        );
        console.log(response.data)

        login(response.data?.data)
        if (response?.data?.data.user.role === "admin") navigate("/admin-dashboard");
        onClose()
    
        // Reset form
        setForm({
          name: "",
          email: "",
         
        });
      } else {
        setError(
          response.data.message || "Unable to submit your enquiry."
        );
      }
    } catch (error) {
      console.error("Enquiry API Error:", error);

      setError(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
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
      onClick={onClose}
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
              onClick={onClose}
            />
          </div>

          <div className="modal-body px-4 px-md-5 pb-4 pt-0">
            <form id="loginForm" name="loginForm" onSubmit={handleSubmit}>
              <div className="text-center">
                <h2 className="fw-bold mb-2 text-uppercase fs-3 fs-md-2">
                  Login
                </h2>
                <p className="text-white-50 mb-4">
                  Please enter your login and password!
                </p>
                {error && (
                  <div className="alert alert-danger py-2" role="alert">
                    {error}
                  </div>
                )}

                <div className="form-floating mb-3 text-start text-dark">
                  <input
                    type="email"
                    id="typeEmailX"
                    className="form-control"
                    placeholder="Email"
                    autoComplete="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    // disabled={loading}
                    required
                  />
                  <label htmlFor="typeEmailX">Email</label>
                </div>

                <div className="form-floating mb-3 text-start text-dark">
                  <input
                    type="password"
                    id="typePasswordX"
                    className="form-control"
                    placeholder="Password"
                    autoComplete="current-password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    disabled={loading}
                    required
                  />
                  <label htmlFor="typePasswordX">Password</label>
                </div>

                {/* <p className="small mb-4">
              <a className="text-white-50" href="#!">
                Forgot password?
              </a>
            </p> */}

                <button
                  className="btn btn-outline-light btn-lg w-100 w-sm-auto px-5 mt-3 mb-3"
                  type="submit"
                >
                  Login
                </button>
                {successMessage && (
                  <div className="alert alert-success py-2" role="alert">
                    {successMessage}
                  </div>
                )}

                {/* <div className="d-flex justify-content-center gap-4 mt-4">
              <a href="#!" className="text-white">
                <i className="fab fa-facebook-f fa-lg" />
              </a>
              <a href="#!" className="text-white">
                <i className="fab fa-twitter fa-lg" />
              </a>
              <a href="#!" className="text-white">
                <i className="fab fa-google fa-lg" />
              </a>
            </div> */}

                <p className="mt-4 mb-0">
                  Don't have an account?{" "}
                  <a href="#!" className="text-white-50 fw-bold">
                    Sign Up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
