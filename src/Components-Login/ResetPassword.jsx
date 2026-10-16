import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ResetPassword.css";
import whiteShieldIcon from "../assets/Login/shield-white.png";
import arrowRightIcon from "../assets/Login/arrow-right.png";
import LockIcon from "../assets/Login/lock-icon.png";
import passwordRecoveryIcon from "../assets/Login/password-recovery-icon.png";
import passwordSecurity from "../assets/Login/password-security.png";
import passwordSuccess from "../assets/Login/verification-success.png";
import passwordVerification from "../assets/Login/security-verified.png";
import { LogoHeader } from "../Component-Reuseable/LogoHeader";

export const ResetPassword = () => {
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const isLengthValid = Password.length >= 8;

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(Password);

  const isPasswordMatch =
    Password !== "" && confirmPassword !== "" && Password === confirmPassword;

  const isFormValid = isPasswordValid && isPasswordMatch;

  const navigate = useNavigate();

  const handleUpdate = () => {
    if (!Password.trim()) {
      setError("Password is required");
      return;
    }

    if (!isPasswordValid) {
      setError(
        "Password must contain uppercase, lowercase, number and special character",
      );
      return;
    }

    if (!confirmPassword.trim()) {
      setError("Password is required");
      return;
    }

    if (!isPasswordMatch) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    navigate("/components-login/password-reset-success");
  };
  return (
    <div className="ims-reset-password-page">
      <div className="ims-reset-password-left-panel">
       
       <LogoHeader/>

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
          <img
            src={whiteShieldIcon}
            className="ims-reset-password-info-icon"
            alt="shieldicon"
          />

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
          <img
            src={passwordRecoveryIcon}
            className="ims-reset-password-lock"
            alt="Password Recovery Icon"
          />

          <div className="ims-reset-password-header">
            <h2>Set New Password</h2>
            <p>Your new password must be different from previous passwords.</p>
          </div>

          <label className="ims-reset-password-new-password">
            New Password
          </label>

          <div className="ims-reset-password-box">
            <img
              src={LockIcon}
              className="ims-reset-password-lock-icon"
              alt="lock-icon"
            />

            <input
              type="password"
              placeholder="Min. 8 characters"
              value={Password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            />
          </div>

          <label className="ims-reset-password-new-password">
            Confirm New Password
          </label>

          <div className="ims-reset-password-box">
            <img
              src={passwordVerification}
              className="ims-reset-password-guard-icon"
              alt="guard-icon"
            />

            <input
              type="password"
              placeholder="Repeat your password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setError("");
              }}
            />
          </div>

          {error && <p className="ims-reset-password-error">{error}</p>}

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

          <button onClick={handleUpdate} className="ims-reset-password-button">
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
