import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./Components-Login/Login";
import { ForgotPassword } from "./Components-Login/ForgotPassword";
import { OtpForgotPassword } from "./Components-Login/OtpForgotPassword";
import { ResetPassword } from "./Components-Login/ResetPassword";
import { PasswordResetSuccess } from "./Components-Login/PasswordResetSuccess";

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
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
