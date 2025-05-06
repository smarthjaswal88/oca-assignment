import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { useToast } from "../../hooks/useToast";
import "react-toastify/dist/ReactToastify.css";
import "./SignupUser.css";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const { showSuccess, showError } = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    passwrd: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8000/routes/signup_user.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      processSignupResponse(result);
    } catch (error) {
      processSignupResponse({
        status: "error",
        errors: { general: "Something went wrong!" },
      });
    }
  };

  const processSignupResponse = (response) => {
    if (response.status === "error") {
      const allErrors = Object.values(response.errors || {}).join(" | ");
      showError(allErrors);
    } else if (response.status === "success") {
      showSuccess(response.message);
      setFormData({ username: "", email: "", passwrd: "" });
      setTimeout(() => {
        navigate("/home");
      }, 1500);
    }
  };

  return (
    <div className="main-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div>
          <label>Enter Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label>Enter Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label>Enter Password</label>
          <input
            type="password"
            name="passwrd"
            placeholder="Password"
            value={formData.passwrd}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <button type="submit" className="submit-btn">
          Sign Up
        </button>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
}

export default SignupForm;
