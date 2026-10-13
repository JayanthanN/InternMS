import React from "react";
import "./RegistrationHeader.css";
import logo from "../assets/Registration/Logo.png";

export const RegistrationHeader = () => {
  return (
    <div className="ims-registration-logo">
      <img src={logo} className="ims-registration-logo-icon" alt="Logo" />

      <div className="ims-registration-title">
        <h3 className="ims-registration-header">
          Internship Management System
        </h3>

        <p className="ims-registration-text">
          Learn &bull; Grow &bull; Build Your Future
        </p>
      </div>
    </div>
  );
};
