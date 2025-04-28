import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import NoFound from './Components/NoFound/NoFound';
import Usercontext from "./Components/UserContext/UserContext";
import { ToastContainer } from "react-toastify";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function App() {
 

  const router = createBrowserRouter([
   
    { path: "*", element:<NoFound />},
    { path: "/", element: <Layout />, children: [
        { index: true, element: <Home /> },
    ]},
    { path: "/signin", element: <SignIn /> },
    { path: "/signup", element: <SignUp /> },
    
  ]);

  

  
  return (
   
    <Usercontext>
    <RouterProvider router={router} />
    <ToastContainer />
  </Usercontext>
       
  );
}

export default App;
