import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Error from '../pages/Error';
import Layout from '../components/Layout';

const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));


export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
