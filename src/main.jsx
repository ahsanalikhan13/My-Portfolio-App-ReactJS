import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App';
import Contact from "./components/Contact";
import Header from "./components/Header";
import './styles/app.scss';

const router = createBrowserRouter([
    <Header/>,
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

    <RouterProvider router={router} />

  </React.StrictMode>,
)
