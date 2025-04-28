import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import ProfileEdit from "./Pages/ProfileEdit/ProfileEdit";
import ProfilePage from "./Pages/ProfilePage";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import NoFound from "./Components/NoFound/NoFound";
import Usercontext from "./Components/UserContext/UserContext";
import { ToastContainer } from "react-toastify";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Projects from "./Pages/Projects/Projects";
import Board from "./Pages/Board/Board";
import BoardNav from "./Components/BoardNav/BoardNav";

function App() {
  const router = createBrowserRouter([
    { path: "*", element: <NoFound /> },
    {
      path: "/",
      element: <Layout />,
      children: [{ index: true, element: <Home /> }],
    },
    { path: "/signin", element: <SignIn /> },
    { path: "/signup", element: <SignUp /> },
    {
      path: "/profile",
      element: (
        <ProtectedRoute>
          <ProfilePage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/ProfileEdit",
      element: (
        <ProtectedRoute>
          <ProfileEdit />
        </ProtectedRoute>
      ),
    },

    {
      path: "/projects",
      element: (
        <ProtectedRoute>
          <Projects />
        </ProtectedRoute>
      ),
    },
    {
      path: "/Board/:projectId",
      element: (
        <ProtectedRoute>
          <Board />
        </ProtectedRoute>
      ),
    },
    { path: "/boardNav/:projectId", element: <BoardNav /> },
  ]);

  return (
    <Usercontext>
      <RouterProvider router={router} />
      <ToastContainer />
    </Usercontext>
  );
}

export default App;
