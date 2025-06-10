import { createBrowserRouter, type RouteObject } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import { lazy, Suspense } from "react";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const ProductList = lazy(() => import("../pages/Productlist"));
const ProductDetail = lazy(() => import("../pages/Productdetail"));
const Contact = lazy(() => import("../pages/Contact"));

// Fallback component
const Loading = () => (
  <div className="fixed bg-[rgba(0,0,0.5)] text-white inset-0 text-center flex items-center justify-center">
    LOADING...
  </div>
);

// Define a TypeScript interface for route items
interface AppChildRoute {
  path?: string;
  index?: boolean;
  element: React.ReactNode;
}

// Typed child routes array
const childRoutes: AppChildRoute[] = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "productlist",
    element: <ProductList />,
  },
  {
    path: "productlist/:id", // fixed typo from "productlis"
    element: <ProductDetail />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
];

// Wrap routes with <Suspense>
const wrappedChildRoutes: RouteObject[] = childRoutes.map((route) => ({
  ...route,
  element: <Suspense fallback={<Loading />}>{route.element}</Suspense>,
}));

// Final app router
const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: wrappedChildRoutes,
  },
]);

export default AppRoutes;
