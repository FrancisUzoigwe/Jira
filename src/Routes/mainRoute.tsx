import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Block/Layout";
import Error from "../Error/Error";
import LandingPage from "../Pages/LandingPage";
import HomeScreen from "../Pages/HomeScreen";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
        path: "/",
      },
      {
        path: "/home",
        element: <HomeScreen />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
