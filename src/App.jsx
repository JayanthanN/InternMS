import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./Components-Login/Login";
import { ForgotPassword } from "./Components-Login/ForgotPassword";
import { OtpForgotPassword } from "./Components-Login/OtpForgotPassword";
import { ResetPassword } from "./Components-Login/ResetPassword";
import { PasswordResetSuccess } from "./Components-Login/PasswordResetSuccess";
import { HRRegistration } from "./Components-Registration/HRRegistration";
import { AdminRegistration } from "./Components-Registration/AdminRegistration";
import { RegistrationOTP } from "./Components-Registration/RegistrationOTP";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/components-login/forgot-password",
    element: <ForgotPassword />,
  },

  {
    path: "/components-login/otp-forgot-password",
    element: <OtpForgotPassword />,
  },

  {
    path: "/components-login/reset-password",
    element: <ResetPassword />,
  },

  {
    path: "/components-login/password-reset-success",
    element: <PasswordResetSuccess />,
  },

  {
    path: "/components-registration/hr-registration",
    element: <HRRegistration />,
  },

  {
    path: "/components-registration/admin-registration",
    element: <AdminRegistration/>

  },

  {
    path: "/components-registration/registration-otp",
    element: <RegistrationOTP/>

  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;



