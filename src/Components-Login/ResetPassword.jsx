import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ResetPassword.css";
import Logo from "../assets/Login/logo.png";
import whiteShieldIcon from "../assets/Login/shield-white.png";
import arrowRightIcon from "../assets/Login/arrow-right.png";
import LockIcon from "../assets/Login/lock-icon.png";
import passwordRecoveryIcon from "../assets/Login/password-recovery-icon.png";
import passwordSecurity from "../assets/Login/password-security.png";
import passwordSuccess from "../assets/Login/verification-success.png";
import passwordVerification from "../assets/Login/security-verified.png";

export const ResetPassword = () => {
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isLengthValid = Password.length >= 8;

  const isPasswordMatch =
    Password !== "" && confirmPassword !== "" && Password === confirmPassword;

  const isFormValid = isLengthValid && isPasswordMatch;

  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate("");
  };

  return (
    <div className="ims-reset-password-page">
      <div className="ims-reset-password-left-panel">
        <div className="ims-reset-password-logo">
          <div className="ims-reset-password-logo-box">
            <img src={Logo} alt="Logo" />
          </div>

          <div className="ims-reset-password-title">
            <h3>Internship Management System</h3>

            <p>
              Learn
              <span className="ims-reset-password-title-dot"></span>
              Grow
              <span className="ims-reset-password-title-dot"></span>
              Build Your Future
            </p>
          </div>
        </div>

        <div className="ims-reset-password-heading">
          <h1>Set a Strong Master Password</h1>

          <p>
            Protect your internship credentials, academic clearance records, and
            enterprise
            <br />
            communication channels.
          </p>
        </div>

        <div className="ims-reset-password-illustration">
          <img src={passwordSecurity} alt="passwordSecurityImage" />
        </div>

        <div className="ims-reset-password-info-card">
          <div className="ims-reset-password-info-icon">
            <img src={whiteShieldIcon} alt="shieldicon" />
          </div>

          <div className="ims-reset-password-info-content">
            <h5>
              “Automated credential audit enforces strict NIST 800-63B password
              guidelines and institutional
              <br />
              SSO policies.”
            </h5>

            <p>
              Dr. Elena Vance — Dean of Experiential Education &amp; IAM
              Security Lead
            </p>
          </div>
        </div>
      </div>

      <div className="ims-reset-password-right-panel">
        <div className="ims-reset-password-form">
          <div className="ims-reset-password-lock">
            <img
              src={passwordRecoveryIcon}
              className="ims-reset-password-header-lock"
              alt="Password Recovery Icon"
            />
          </div>

          <div className="ims-reset-password-header">
            <h2>Set New Password</h2>
            <p>Your new password must be different from previous passwords.</p>
          </div>

          <label className="ims-reset-password-new-password">
            New Password
          </label>

          <div className="ims-reset-password-password-box">
            <img
              src={LockIcon}
              className="ims-reset-password-lock-icon"
              alt="lock-icon"
            />

            <input
              type="password"
              placeholder="Min. 8 characters"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <label className="ims-reset-password-new-password">
            Confirm New Password
          </label>

          <div className="ims-reset-password-password-box">
            <img
              src={passwordVerification}
              className="ims-reset-password-guard-icon"
              alt="guard-icon"
            />

            <input
              type="password"
              placeholder="Repeat your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="ims-reset-password-validation-box">
            <div className="ims-reset-password-validation-item">
              {isLengthValid ? (
                <img
                  src={passwordSuccess}
                  alt="success-icon"
                  className="ims-reset-password-validation-icon"
                />
              ) : (
                <span className="ims-reset-password-validation-circle"></span>
              )}

              <span>At least 8 characters</span>
            </div>

            <div className="ims-reset-password-validation-item">
              {isPasswordMatch ? (
                <img
                  src={passwordSuccess}
                  alt="success-icon"
                  className="ims-reset-password-validation-icon"
                />
              ) : (
                <span className="ims-reset-password-validation-circle"></span>
              )}

              <span>Passwords match</span>
            </div>
          </div>

          <button
            onClick={handleUpdate}
            className="ims-reset-password-button"
            disabled={!isFormValid}
          >
            Update Password
            <img
              src={arrowRightIcon}
              className="ims-reset-password-arrow-icon"
              alt="arrow-icon"
            />
          </button>

          <Link to="/" className="ims-reset-password-back-link">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};
