import "./App.css";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App2 from "./pages/Tetris/App2";
import Layout from "./components/Sections/Layout";
import App3 from "./pages/OXO/App3";
import InvestmentCalc from "./pages/Investment-Calculator/src/InvestmentCalc";
import QuizLayout from "./pages/Quiz/QuizLayout";
import ErrorPage from "./pages/Error";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/tetris",
      element: <App2 />,
    },
    {
      path: "/oxo",
      element: <App3 />,
    },
    {
      path: "/investment",
      element: <InvestmentCalc />,
    },
    {
      path: "/quiz",
      element: <QuizLayout />,
    },
    {
      path: "/error",
      element: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}
