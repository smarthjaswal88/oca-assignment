import React, { useState } from "react";
import { useToast } from "../../hooks/useToast";
import "react-toastify/dist/ReactToastify.css";
import "./LoginUser.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function LoginUser() {
  const { showSuccess, showError } = useToast();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      username: formData.username,
      passwrd: formData.password,
    };

    try {
      const response = await fetch(
        "http://localhost:8000/routes/login_user.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const result = await response.json();
      handleUserLogin(result);
    } catch (error) {
      handleUserLogin({
        status: "error",
        errors: { general: "Something went wrong!" },
      });
    }
  };

  const handleUserLogin = (response) => {
    if (response.status === "error") {
      let allErrors = "";

      if (response.errors && typeof response.errors === "object") {
        allErrors = Object.values(response.errors).join(" | ");
      } else if (typeof response.message === "string") {
        allErrors = response.message;
      } else {
        allErrors = "An unknown error occurred.";
      }

      showError(allErrors);
    } else if (response.status === "success") {
      showSuccess(response.message);

      setTimeout(() => {
        navigate("/home");
      }, 1500);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label>Enter Email id</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <div>
          <label>Enter Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Login
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

export default LoginUser;
