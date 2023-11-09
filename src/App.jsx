import "./App.css";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App2 from "./pages/Tetris/App2";
import Layout from "./components/Sections/Layout";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
    {
      path: "/tetris",
      element: <App2 />,
    },
  ]);
  return <RouterProvider router={router} />;
}
