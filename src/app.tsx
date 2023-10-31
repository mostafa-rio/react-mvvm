import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'
import './styles/main.css'
import ProductList from './views/productList'
import Product from './views/product'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductList />,
  },
  {
    path: '/details/:id',
    element: <Product />,
  },
])
const App = function () {
  return <RouterProvider router={router} />
}

export default App
