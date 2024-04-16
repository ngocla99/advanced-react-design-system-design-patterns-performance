import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { booksRoute } from "./components/books";
import { loader } from "./components/main-loader";
import Nav from "./components/nav";

const Club = lazy(() => import("./components/club"));
const Main = lazy(() => import("./components/main"));

const router = createBrowserRouter([
  {
    element: <Nav />,
    children: [
      { index: true, loader: loader, element: <Main /> },
      { path: "/books", ...booksRoute },
      { path: "/club", element: <Club /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
