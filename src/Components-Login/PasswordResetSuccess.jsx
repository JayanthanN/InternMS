import React from "react";
import { useNavigate } from "react-router-dom";
import "./PasswordResetSuccess.css";
import whiteShieldIcon from "../assets/Login/shield-white.png";
import passwordResetSuccess from "../assets/Login/password-reset-success.png";
import recoveryCompleteIcon from "../assets/Login/recovery-complete-icon.png";
import recoverySuccessIcon from "../assets/Login/reset-success.png";
import { LogoHeader } from "../Component-Reuseable/LogoHeader";

export const PasswordResetSuccess = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };
  return (
    <div className="ims-reset-success-page">
      <div className="ims-reset-success-left-panel">
       
       <LogoHeader/>

        <div className="ims-reset-success-heading">
          <h1>
            Account Secured &amp; Access <br />
            Restored
          </h1>

          <p>
            Quickly regain access to your verified internship credentials,
            university approvals,
            <br />
            and active corporate placements.
          </p>
        </div>

        <div className="ims-reset-success-illustration">
          <img src={passwordResetSuccess} alt="passwordResetSuccessImage" />
        </div>

        <div className="ims-reset-success-info-card">
    
            <img src={whiteShieldIcon} 
             className="ims-reset-success-info-icon"
             alt="shieldicon" />
  

          <div className="ims-reset-success-info-content">
            <h5>
              “Credential change verified across university registrars, Dean
              approvals, and
              <br />
              enterprise partner portals.”
            </h5>

            <p>
              Enterprise IAM & Security Operations
              <span>— Zero Trust Protocol Active</span>
            </p>
          </div>
        </div>
      </div>

      <div className="ims-reset-success-right-panel">
        <div className="ims-reset-success-form">
         
            <img src={recoverySuccessIcon}
            className="ims-reset-success-icon"
             alt="recoverySuccessIcon" />
        

          <div className="ims-reset-success-header">
            <div className="ims-reset-success-subtitle">
             
                <img src={recoveryCompleteIcon}className="ims-reset-success-subtitle-icon" alt="recoveryCompleteIcon" />
              

              <p>
                RECOVERY COMPLETED <span></span> 256-BIT ENCRYPTED
              </p>
            </div>

            <h2>Password Reset Successful!</h2>
          </div>

          <p className="ims-reset-success-description">
            Your account credentials have been securely updated. All <br/>active
            enterprise and university sessions have been refreshed.
          </p>

          <button onClick={handleLogin} className="ims-reset-success-button">
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};
