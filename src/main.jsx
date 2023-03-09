import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App';
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import './styles/app.scss';
import Header from "./components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:'/contact',
    element:<Contact/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster/>
    <RouterProvider
    router={router} />

  </React.StrictMode>,
)
