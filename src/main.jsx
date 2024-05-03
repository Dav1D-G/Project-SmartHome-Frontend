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
<<<<<<< HEAD
import { MenuDevice } from "./components/organism/Home/MenuDevice.jsx";
import { RegisterDevice } from "./components/organism/Home/RegisterDevice.jsx";
import { MainPage } from "./components/organism/Home/MainPage.jsx";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Info } from "./components/organism/Auth/Info.jsx";
import { VerifyUser } from "./components/organism/Auth/VerifyUser.jsx";
=======
import { Main } from "./components/organism/Home/Main.jsx";
import { RegisterDevice } from "./components/organism/Home/RegisterDevice.jsx";
import { SelectDevice } from "./components/organism/Home/SelectDevice.jsx";
>>>>>>> 8e5c1af935bd2cef93e5ebe70d8db49361ad35d3

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
<<<<<<< HEAD
      {
        path :'/info-register',
        element : <Info page="registerUser" url="/"/>
      },
      {
        path :'/info-forget-password',
        element : <Info page="forgetPassword" url="/"/>
      },
      {
        path :'/info-reset-password',
        element : <Info page="resetPassword" url="/"/>
      },
      {
        path :'/info-verify-user',
        element : <Info page="verifiedUser" url="/"/>
      },
      {
        path : '/verify-user',
        element : <VerifyUser />
      }
=======
>>>>>>> 8e5c1af935bd2cef93e5ebe70d8db49361ad35d3
    ],
  },
  {
    path: "/homepage",
    element: <Homepage />,
    children: [
      {
        path: "",
<<<<<<< HEAD
        element: <MainPage />,
      },
      {
        path: "register-device",
        element: <RegisterDevice />,
      },
      {
        path :'info-register-device',
        element : <Info page="registerDevice" url="/homepage"/>
      },
      {
        path: "menu-devices",
        element: <MenuDevice />,
      },
      
=======
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
>>>>>>> 8e5c1af935bd2cef93e5ebe70d8db49361ad35d3
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
<<<<<<< HEAD
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
=======

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
>>>>>>> 8e5c1af935bd2cef93e5ebe70d8db49361ad35d3
  </React.StrictMode>
);
