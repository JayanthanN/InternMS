import React from "react";
import "./LogoHeader.css";
import logo from "../assets/Registration/Logo.png";

export const LogoHeader = () => {
  return (
    <div className="ims-logo-header">
      <img src={logo} className="ims-logo-header-icon" alt="Logo" />

      <div className="ims-logo-header-content">
        <h3 className="ims-logo-header-title">
          Internship Management System
        </h3>

        <p className="ims-logo-header-tagline">
          Learn &bull; Grow &bull; Build Your Future
        </p>
      </div>
    </div>
  );
};
