import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPasswordOtp.css";
import Logo from "../assets/Login/logo.png";
import otpVerification from "../assets/Login/otp-verification.png";
import whiteShieldIcon from "../assets/Login/shield-white.png";
import arrowRightIcon from "../assets/Login/arrow-right.png";
import forgotLockIcon from "../assets/Login/lock-icon.png";
import verificationshield from "../assets/Login/verification-shield.png";

export const ForgotPasswordOtp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }

    setError("");
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      setError("Please enter the complete 6-digit OTP.");
      return;
    }

    navigate("/reset-password");
  };
  return (
    <div className="ims-forgot-password-otp-page">
      <div className="ims-forgot-password-otp-left-panel">
        <div className="ims-forgot-password-otp-logo">
          <div className="ims-forgot-password-otp-logo-box">
            <img src={Logo} alt="Logo" />
          </div>

          <div className="ims-forgot-password-otp-title">
            <h3>Internship Management System</h3>

            <p>
              Learn<span className="ims-forgot-password-otp-title-dot"></span>
              Grow <span className="ims-forgot-password-otp-title-dot"></span>
              Build Your Future
            </p>
          </div>
        </div>

        <div className="ims-forgot-password-otp-heading">
          <h1>
            Verify Identity &amp; Enter
            <br />
            Security Code
          </h1>

          <p>
            A 6-digit one-time password has been transmitted to your registered
            <br />
            institutional credentials.
          </p>
        </div>
        <div className="ims-forgot-password-otp-illustration">
          <img src={otpVerification} alt="otpVerificationImage" />
        </div>

        <div className="ims-forgot-password-otp-info-card">
          <div className="ims-forgot-password-otp-info-icon">
            <img src={whiteShieldIcon} alt="shieldicon" />
          </div>

          <div className="ims-forgot-password-otp-info-content">
            <h5>
              “Credential change verified across university registrars, Dean
              approvals, and
              <br />
              enterprise partner portals.”
            </h5>

            <p>
              Enterprise IAM &amp; Security Operations
              <span>— Zero Trust Protocol Active</span>
            </p>
          </div>
        </div>
      </div>

      <div className="ims-forgot-password-otp-right-panel">
        <div className="ims-forgot-password-otp-section">
          <div className="ims-forgot-password-otp-header">
            <h2>Enter Verification Code</h2>

            <p>
              We've sent a 6-digit code to your registered Email and phone
              number. The code <br />
              will expire in <span>09:59</span> minutes.
            </p>
          </div>

          <div className="ims-forgot-password-otp-boxes">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                value={digit}
                autoFocus={index === 0}
                className="ims-forgot-password-otp-input"
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>

          <button
            onClick={handleVerify}
            className="ims-forgot-password-otp-button"
          >
            Verify and Continue
            <img
              src={arrowRightIcon}
              className="ims-forgot-otp-arrow-icon"
              alt="arrow-icon"
            />
          </button>

          {error && <p className="ims-forgot-password-otp-error">{error}</p>}

          <p className="ims-forgot-password-otp-resend">
            Didn't receive the code?<span> Resend (in 00:55)</span>
          </p>

          <hr className="ims-forgot-password-otp-divider" />

          <div className="ims-forgot-password-otp-footer">
            <img
              src={forgotLockIcon}
              className="ims-forgot-password-otp-lock-icon"
              alt="lock-icon"
            />

            <p>END-TO-END ENCRYPTED</p>

            <img
              src={verificationshield}
              className="ims-forgot-password-otp-guard-icon"
              alt="shield-icon"
            />

            <p>SECURE HANDSHAKE</p>
          </div>
        </div>
      </div>
    </div>
  );
};
