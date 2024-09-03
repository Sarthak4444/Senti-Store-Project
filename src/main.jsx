import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './Components/Pages/Home'
import Store from './Components/Pages/Store'
import Product from './Components/Pages/Product'
import Categories from './Components/Pages/Categories'
import Wishlist from './Components/Pages/Wishlist'
import Cart from './Components/Pages/Cart'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/store',
        element: <Store />,
      },
      {
        path: '/product',
        element: <Product />,
      },
      {
        path: '/categories',
        element: <Categories />,
      },
      {
        path: '/wishlist',
        element: <Wishlist />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    
    ],
  },
])

const root = createRoot(document.querySelector('#root'))

root.render(<RouterProvider router={router} />)