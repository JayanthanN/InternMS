import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./Components-Login/Login";
import { ForgotPassword } from "./Components-Login/ForgotPassword";
import { ForgotPasswordOtp } from "./Components-Login/ForgotPasswordOtp";
import { ResetPassword } from "./Components-Login/ResetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },

  {
    path: "/forgot-passwordotp",
    element: <ForgotPasswordOtp />,
  },

  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
