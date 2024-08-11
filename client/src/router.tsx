import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import Login from "./components/User/Login";
import Posts from "./components/Post/Posts";
import LandingPage from "./components/LandingPage";
import Register from "./components/User/Register";
import PostDetail from "./components/Post/PostDetail";
import Blog from "./components/Post/Blog";
import { isAuthenticated } from "./helperFunctions";
import Dashboard from "./components/User/Dashboard";
import PostTable from "./components/Post/PostTable";



const router = createBrowserRouter([
  {
    path: "/",
    element: isAuthenticated() ? <App /> : <LandingPage />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/posts",
        element: <PostTable />,
      },
    ],
  },
  {
    path: "/home",
    element: <Blog />,
    children: [
      {
        path: "/home/posts/",
        element: <Posts />,
      },
      {
        path: "/home/posts/:id",
        element: <PostDetail />,
      },
      {
        path: "/home/posts/categories/:categoryId",
        element: <Posts />,
      },
    ],
  },
  {
    path: "/users/login",
    element: isAuthenticated() ? <Navigate to="/" /> : <Login />,
  },
  {
    path: "/users/register",
    element: isAuthenticated() ? <Navigate to="/" /> : <Register />,
  },
]);

export default router;
