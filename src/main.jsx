import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Components/Pages/Home";
import Store from "./Components/Pages/Store";
import Product from "./Components/Pages/Product";
import Wishlist from "./Components/Pages/Wishlist";
import Cart from "./Components/Pages/Cart";
import About from "./Components/Pages/About";
import cartReducer from "./Redux/CartSlices";
import wishlistReducer from "./Redux/WishlistSlices";
import { Provider } from "react-redux";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/:product",
        element: <Product />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = createRoot(document.querySelector("#root"));

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
