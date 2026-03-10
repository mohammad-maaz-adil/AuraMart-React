import React, { lazy, Suspense } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";

const Cart = lazy(()=> import("./components/Cart"))

const Applayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/cart",
          element: 
          <Suspense fallback={<Shimmer/>} ><Cart /></Suspense>,
        },
        {
          path: "/restaurant/:resId",
          element: <RestaurantMenu />,
        }
      ],
      errorElement: <Error />,
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById("Parent"));
root.render(<RouterProvider router={appRouter} />);