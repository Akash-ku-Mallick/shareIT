import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// styles from local files
import './index.css'

// pages from local files
import Home from './pages/home.jsx';
import Welcome from './components/welcome.jsx';
import Send from './components/send.jsx';
import Receive from './components/receive.jsx';
import Files from './components/files.jsx';
import History from './components/history.jsx';
import Error from './components/error.jsx';

// routes 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Welcome />,
        errorElement: <Error />,
        index: true,
      },
      {
        path: "send",
        element: <Send />,
        errorElement: <Error />,
        index: true,
      },
      {
        path: "recive",
        element: <Receive />,
        errorElement: <Error />,
      },
      {
        path: "files",
        element: <Files />,
        errorElement: <Error />,
      },
      {
        path: "history",
        element: <History />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);


// render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
