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
import Login from './pages/Login.jsx';
import WishList from './pages/WishList.jsx';
import SingleProductPage from './pages/SingleProductPage.jsx';
import CheckOut from './pages/CheckOut.jsx';

import { ToastContainer } from 'react-toastify';
import OrderConfirmed from './pages/orderConfirmed.jsx';
import CommingSoon from './pages/CommingSoon.jsx';
import CategoryPage from './pages/CategoryPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bags",
        element: <Bags />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/products", // Parent route for individual products
        children: [
          {
            path: ":id", // Dynamic route for individual products using their IDs
            element: <SingleProductPage />,
          },
        ],
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        path: "/orderConfirmed",
        element: <OrderConfirmed />,
      },
      {
        path: "/category/:category",
        element: <CategoryPage />,
      },
      {
        path: "/men",
        element: <CommingSoon />,
      },
      {
        path: "/women",
        element: <CommingSoon />,
      },
      {
        path: "/kids",
        element: <CommingSoon />,
      },
      {
        path: "/home-and-living",
        element: <CommingSoon />,
      },
      {
        path: "/shop",
        element: <CommingSoon />,
      },
      
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router} />
    <ToastContainer />
    </Provider>
  </React.StrictMode>,
)
