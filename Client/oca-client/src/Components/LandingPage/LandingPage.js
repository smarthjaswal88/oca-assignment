import React, { useState } from "react";
import "./LandingPage.css";
import LoginUser from "../Login/LoginUser";
import SignupForm from "../Signup/SignupUser";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const handleToggle = (login) => {
    setIsLogin(login);
  };

  const handleGuestLogIn = () => {
    navigate("/home");
  };

  return (
    <div className="landing-container">
      <div className="form-container">
        <div className="toggle-button">
          <button
            onClick={() => handleToggle(false)}
            className={`btn ${!isLogin ? "active" : ""}`}
          >
            Sign up
          </button>
          <button
            onClick={() => handleToggle(true)}
            className={`btn ${isLogin ? "active" : ""}`}
          >
            Log in
          </button>
        </div>
        {isLogin ? <LoginUser /> : <SignupForm />}
        <div className="guest-login">
          <button onClick={handleGuestLogIn}>Guest Log in</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
