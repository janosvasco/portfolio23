import './App.css'
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'

export default function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />
    }
  ])
  return <RouterProvider router={router} />
}
