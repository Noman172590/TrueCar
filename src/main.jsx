import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import AddProduct from "./Components/AddProduct/AddProduct.jsx";
import Register from "./Components/Register/Register.jsx";
import MyCart from "./Components/My Cart/MyCart";
import LogIn from "./Components/Login/LogIn";
import BrandProduct from "./Components/BrandProduct/BrandProduct";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import UpdateProduct from "./Components/UpdateProduct/UpdateProduct";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        )
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/home/:name",
        element: <BrandProduct></BrandProduct>,
        loader: () => fetch("https://server-site-taupe.vercel.app/products"),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-site-taupe.vercel.app/products/${params.id}`),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-site-taupe.vercel.app/products/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
