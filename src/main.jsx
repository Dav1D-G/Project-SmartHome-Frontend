import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth } from "./pages/Auth.jsx";
import { Login } from "./components/organism/Auth/Login.jsx";
import { Register } from "./components/organism/Auth/Register.jsx";
import { ForgetPassword } from "./components/organism/Auth/ForgetPassword.jsx";
import { ResetPassword } from "./components/organism/Auth/ResetPassword.jsx";
import { Homepage } from "./pages/Homepage.jsx";
import { Main } from "./components/organism/Home/Main.jsx";
import { RegisterDevice } from "./components/organism/Home/RegisterDevice.jsx";
import { SelectDevice } from "./components/organism/Home/SelectDevice.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "/homepage",
    element: <Homepage />,
    children: [
      {
        path: "",
        element: <SelectDevice />,
      },
      {
        path: "/homepage/RegisterDevice",
        element: <RegisterDevice />,
      },
      {
        path: "/homepage/Main",
        element: <Main />,
      },
      // {
      //   path : '',
      //   element : <Sensor/>
      // },
      // {
      //   path : '',
      //   element : <Gate/>
      // },
      // {
      //   path : '',
      //   element : <Lock/>
      // },
      // {
      //   path : '',
      //   element : <Light/>
      // },
    ],
  },
  // {
  //   path : '*',
  //   element : <NotFound /> TO DO!!!
  // }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
