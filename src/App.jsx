import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout';


export default function App() {
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />
  }
]);
  return <RouterProvider router={router} />;
}


