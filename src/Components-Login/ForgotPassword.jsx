import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
import Logo from "../assets/Login/logo.png";
import whiteShieldIcon from "../assets/Login/shield-white.png";
import arrowRightIcon from "../assets/Login/arrow-right.png";
import accountRecovery from "../assets/Login/account-recovery.png";
import passwordRecoveryIcon from "../assets/Login/password-recovery-icon.png";
import emailVerificationIcon from "../assets/Login/email-verification-icon.png";
import smsVerificationIcon from "../assets/Login/sms-verification-icon.png";
import backArrowIcon from "../assets/Login/back-arrow-icon.png";

export const ForgotPassword = () => {
  const [selected, setSelected] = useState("email");
  const navigate = useNavigate();

  const handleSend = () => {
    navigate("/forgot-passwordotp", {
      state: {
        method: selected,
      },
    });
  };
  return (
    <div className="ims-forgot-password-page">
      <div className="ims-forgot-password-left-panel">
        <div className="ims-forgot-password-logo">
          <div className="ims-forgot-password-logo-box">
            <img src={Logo} alt="Logo" />
          </div>

          <div className="ims-forgot-password-title">
            <h3>Internship Management System</h3>

            <p>
              Learn<span className="ims-forgot-password-title-dot"></span>
              Grow <span className="ims-forgot-password-title-dot"></span>
              Build Your Future
            </p>
          </div>
        </div>

        <div className="ims-forgot-password-heading">
          <h1>
            Secure Account Recovery &amp;
            <br />
            Identity Protection
          </h1>

          <p>
            Quickly regain access to your verified internship credentials,
            university approvals,
            <br />
            and active corporate placements.
          </p>
        </div>
        <div className="ims-forgot-password-illustration">
          <img src={accountRecovery} alt="accountRecoveryImage" />
        </div>

        <div className="ims-forgot-password-info-card">
          <div className="ims-forgot-password-info-icon">
            <img src={whiteShieldIcon} alt="shieldicon" />
          </div>

          <div className="ims-forgot-password-info-content">
            <h5>
              All password reset requests are cryptographically signed and
              logged according to institutional FERPA &amp; SOC-2 compliance
              standards.
            </h5>

            <p>
              Campus Identity &amp; Access Management (IAM) Protocol
              <span className="ims-forgot-password-info-dot"></span>
              <span className="ims-forgot-password-info-text"> Verified Institutional Security</span>
            </p>
          </div>
        </div>
      </div>
      <div className="ims-forgot-password-right-panel">
        <div className="ims-forgot-password-form">
          <div className="ims-forgot-password-header">
            <div className="ims-forgot-password-lock">
              <img
                src={passwordRecoveryIcon}
                className="ims-forgot-password-header-lock"
                alt="forgotlock-icon"
              />
            </div>
            <h2>Forgot Password?</h2>

            <p className="ims-forgot-password-text">
              Choose your preferred method to receive a one-time verification
              code.
            </p>

            <h5>Verification Method</h5>
          </div>

          <div
            className={`ims-forgot-password-method-card ${
              selected === "email"
                ? "ims-active"
                : "ims-inactive"
            }`}
            onClick={() => setSelected("email")}
          >
            <div className="ims-forgot-password-mail-icon-box">
              <img src={emailVerificationIcon} alt="mail-icon" />
            </div>

            <div className="ims-forgot-password-method-info">
              <h4>Email Address</h4>
              <p>Send code to j**n@g***l.com</p>
            </div>

            <input
              type="radio"
              name="forgot"
              checked={selected === "email"}
              onChange={() => setSelected("email")}
              className="ims-forgot-password-radio"
            />
          </div>

          <div
           className={`ims-forgot-password-method-card ${
              selected === "mobile"
                ? "ims-active"
                : "ims-inactive"
            }`}
            onClick={() => setSelected("mobile")}
          >
            <div className="ims-forgot-password-mobile-icon-box">
              <img src={smsVerificationIcon} alt="sms-icon" />
            </div>

            <div className="ims-forgot-password-method-info">
              <h4>SMS / Text Message</h4>
              <p>Send code to +91 9•••• •5678</p>
            </div>

            <input
              type="radio"
              name="forgot"
              checked={selected === "mobile"}
              onChange={() => setSelected("mobile")}
              className="ims-forgot-password-radio"
            />
          </div>

          <button className="ims-forgot-password-send-button" onClick={handleSend}>
            Send Verification Code
            <img src={arrowRightIcon} className="ims-forgot-password-right-arrow" alt="rightarrow" />
          </button>

          <div className="ims-forgot-password-right-footer">
            <img src={backArrowIcon} className="ims-forgot-password-back-arrow" alt="backarrow" />

            <Link to="/">Back to Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
