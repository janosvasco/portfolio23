import "./App.css";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App2 from "./pages/Tetris/App2";
import Sections from "./components/Sections/Sections";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Sections />,
    },
    {
      path: "/tetris",
      element: <App2 />,
    },
  ]);
  return <RouterProvider router={router} />;
}
