import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Logo from "../assets/Login/logo.png";
import growthIcon from "../assets/Login/growth-icon.png";
import shieldIcon from "../assets/Login/shield-icon.png";
import whiteShieldIcon from "../assets/Login/shield-white.png";
import mailIcon from "../assets/Login/mail-icon.png";
import lockIcon from "../assets/Login/lock-icon.png";
import eyeIcon from "../assets/Login/eye-icon.png";
import arrowRightIcon from "../assets/Login/arrow-right.png";
import googleLogo from "../assets/Login/google-logo.png";
import internshipIllustration from "../assets/Login/internship-illustration.png";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)
    ) {
      newErrors.password =
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log({
        email,
        password,
      });

      navigate();
    }
  };

  return (
    <div className="ims-login-page">
      <div className="ims-login-left-container">
        <div className="ims-login-logo">
          <div className="ims-login-logo-box">
            <img src={Logo} alt="Logo" />
          </div>

          <div className="ims-login-title">
            <h3>Internship Management System</h3>

            <p>
              Learn<span className="ims-login-title-dot"></span>
              Grow <span className="ims-login-title-dot"></span>
              Build Your Future
            </p>
          </div>
        </div>

        <div className="ims-login-heading">
          <h1>
            Connecting academic talent with
            <br />
            career-defining corporate internships
          </h1>

          <p>
            The verified enterprise portal synchronizing university dean
            approvals, experiential learning hours, <br />and Fortune 500 mentorship
            agreements
          </p>
        </div>

        <div className="ims-login-statistics">
          <div className="ims-login-stat-card">
            <h2>14,200+</h2>
            <span>ACTIVE INTERNS</span>
            <div className="ims-login-stat-icon">
              <img
                src={growthIcon}
                alt="growthIcon"
                className="ims-login-growth-icon"
              />
              <p className="ims-login-stat-growth">+24% YoY</p>
            </div>
          </div>

          <div className="ims-login-stat-card">
            <h2>98.4%</h2>
            <span>CREDIT VERIFIED</span>
            <div className="ims-login-stat-icon">
              <img
                src={shieldIcon}
                alt="shieldIcon"
                className="ims-login-shield-icon"
              />
              <p className="ims-login-stat-approved">Deans Approved</p>
            </div>
          </div>

          <div className="ims-login-stat-card">
            <h2>14,200+</h2>
            <span>ACTIVE INTERNS</span>
            <div className="ims-login-stat-icon">
              <img
                src={growthIcon}
                alt="growthIcon"
                className="ims-login-growth-icon"
              />
              <p className="ims-login-stat-growth">+24% YoY</p>
            </div>
          </div>
        </div>

        <div className="ims-login-illustration">
          <img src={internshipIllustration} alt="internshipImage" />
        </div>

        <div className="ims-login-info-card">
          <div className="ims-login-info-icon">
            <img src={whiteShieldIcon} alt="shieldicon" />
          </div>

          <div className="ims-login-info-content">
            <h5>
              “Automated audit trails cut academic credit clearance time from 14
              days to under 48 hours.”
            </h5>

            <p>
              Dr. Elena Vance —
              <span>
                Dean of Experiential Education, Northeastern Consortium
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="ims-login-right-container">
        <form className="ims-login-form" onSubmit={handleSubmit}>
          <h1 className="ims-login-header">Welcome Back</h1>

          <p className="ims-login-text">Manage your career journey.</p>

          <label className="ims-login-mail">Email Address</label>

          <div className="ims-login-email-box">
            <img src={mailIcon}
             className="ims-login-mail-icon" 
             alt="mail-icon" />

            <input
              type="email"
              placeholder="Enter Email Address"
            className={`ims-login-mail-input ${
            errors.email ? "ims-login-error-input" : ""
          }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {errors.email && <p className="ims-login-error">{errors.email}</p>}

          <div className="ims-login-password-top">
            <label className="ims-login-password">Password</label>

            <Link to="/forgot-password" className="ims-login-forgot-password">
              Forgot Password?
            </Link>
          </div>

          <div className="ims-login-password-box">
            <img src={lockIcon}
             className="ims-login-lock-icon" 
             alt="lock-icon" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className={`ims-login-password-input ${
            errors.password ? "ims-login-error-input" : ""
          }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <img
              src={eyeIcon}
              className="ims-login-eye-icon"
              alt="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          {errors.password && <p className="ims-login-error">{errors.password}</p>}

          <div className="ims-login-checkbox">
            <input type="checkbox" />
            <p>Keep me signed in</p>
          </div>

          <button className="ims-login-sign-in-button" type="submit">
            Sign In
            <img src={arrowRightIcon}
             className="ims-login-arrow-icon" 
             alt="arrow-icon" />
          </button>

          <div className="ims-login-divider">
            <hr />
            <p>OR CONTINUE WITH</p>
            <hr />
          </div>

          <div className="ims-login-google-section">
            <button type="button"
             className="ims-login-google-button">

              <img src={googleLogo} 
              className="ims-login-google-icon" 
              alt="google-icon" />
              Google
            </button>

            <p className="ims-login-create-account">
              Don't have an account?
              <Link to="/" className="ims-login-create-account-link">
                Create Account
              </Link>
            </p>
          </div>

          <footer className="ims-login-footer">
            <Link to="/">Help</Link>
            <span className="ims-login-dot"></span>

            <Link to="/">Privacy</Link>
            <span className="ims-login-dot"></span>

            <Link to="/">Terms</Link>
          </footer>
        </form>
      </div>
    </div>
  );
};
