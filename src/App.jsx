import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./Components-Login/Login";
import { ForgotPassword } from "./Components-Login/ForgotPassword";
import { ForgotPasswordOtp } from "./Components-Login/ForgotPasswordOtp"; 

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


]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
