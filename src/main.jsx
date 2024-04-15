import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Auth } from './pages/Auth.jsx'
import { Login } from './components/organism/Auth/Login.jsx'
import { Register } from './components/organism/Auth/Register.jsx';
import { ForgetPassword } from './components/organism/Auth/ForgetPassword.jsx';
import { ResetPassword } from './components/organism/Auth/ResetPassword.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
    children: [
      {
        path : '',
        element : <Login/>
      },
      {
        path : '/register',
        element : <Register/>
      },
      {
        path : '/forget-password',
        element : <ForgetPassword />
      },
      {
        path : '/reset-password',
        element : <ResetPassword />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
