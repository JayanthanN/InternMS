import React from 'react'
import "./ForgotPasswordOtp.css"
import Logo from "../assets/Login/logo.png";
import otpVerification from "../assets/Login/otp-verification.png";

export const ForgotPasswordOtp = () => {
  return (
    <div className= "ForgotPasswordOtp">

        <div className= "ForgotOtpLeftPanel">

             <div className="ForgotOtpSection">
                      <div className="ForgotOtpLogo">
                        <img src={Logo} alt="Logo" />
                      </div>
            
                      <div className="ForgotOtpTitle">
                        <h3>Internship Management System</h3>
            
                        <p>
                          Learn<span className="ForgotOtpTitleDot"></span>
                          Grow <span className="ForgotOtpTitleDot"></span>
                          Build Your Future
                        </p>
                      </div>
                    </div>

                     <div className="ForgotOtpHeading">
                              <h1>
                               Verify Identity & Enter
                               <br/>
                               Security Code
                              </h1>
                    
                              <p>
                                A 6-digit one-time password has been transmitted to your registered
                                <br/>
                                institutional credentials.
                              </p>
                            </div>
                            <div className="ForgotOtpIllustration">
                              <img src={otpVerification} alt="otpVerificationImage" />
                            </div>
                    
        </div>
      
    </div>
  )
}
