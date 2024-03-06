import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import myntraStore from './store/index.js';
import { Provider } from 'react-redux';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home.jsx';
import Bags from './pages/Bags.jsx';

const router = createBrowserRouter([
  { path: "/", element: <App />, children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/bags",
      element: <Bags />,
    }
  ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
