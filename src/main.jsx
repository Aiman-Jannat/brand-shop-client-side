import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home.jsx';
import Error from './components/Pages/Error.jsx';
import AddProduct from './components/Pages/AddProduct.jsx';
import MyCart from './components/Pages/MyCart.jsx';
import Login from './components/Pages/Login.jsx';
import Registration from './components/Pages/Registration.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Product from './components/Pages/Product.jsx';
import UpdateProduct from './components/Pages/UpdateProduct.jsx';
import Details from './components/Pages/Details.jsx';
import PrivateRoute from './components/route/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/brand.json'),
        
      },
      {
        path:'/addProduct',
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path:'/myCart',
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/carts')
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Registration></Registration>
      },
      {
        path:'/home/:id',
        element:<Product></Product>,
        loader:()=>fetch('http://localhost:5000/users')
      },
      {
        path:'/update/:id',
        element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`)
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`)
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
