import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Classes from "../pages/Classes";
import FAQ from "../pages/FAQ";
import Blog from "../pages/Blog";
import CourseDetail from "../pages/CourseDetail";
import Checkout from "../pages/Checkout";
import PrivateRoutes from "./PrivateRoutes";
import Sidebar from "../pages/Sidebar";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: () => fetch("https://back-end-zeta-three.vercel.app/sidebar"),
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sidebar",
        element: <Sidebar />,
      },
      {
        path: "/courses",
        loader: () => fetch("https://back-end-zeta-three.vercel.app/courses"),
        element: <Classes />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/courses/:id",
        loader: (params) =>
          fetch(`https://back-end-zeta-three.vercel.app/courses/${params.id}`),
        element: <CourseDetail />,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoutes>
            <Checkout />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
