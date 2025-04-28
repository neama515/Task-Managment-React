import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import NoFound from './Components/NoFound/NoFound';

function App() {
 

  const router = createBrowserRouter([
   
    { path: "*", element:<NoFound />},
    { path: "/", element: <Layout />, children: [
        { index: true, element: <Home /> },
    ]}
  ]);

  

  
  return (
   
        <RouterProvider router={router} />
       
  );
}

export default App;
