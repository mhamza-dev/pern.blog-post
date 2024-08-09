import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import Login from "./components/UserAuth/Login";
import Posts from "./components/Post/Posts";
import LandingPage from "./components/LandingPage";
import Register from "./components/UserAuth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/users/login",
        element: <Login />,
      },
      {
        path: "/users/register",
        element: <Register />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/categories/:categoryId/posts",
        element: <Posts />,
      },
    ],
  },
]);


export default router;