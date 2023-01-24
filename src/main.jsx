import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
