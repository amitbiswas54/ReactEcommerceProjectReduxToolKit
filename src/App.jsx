import ProductCard from "./components/ProductCard";
import CartList from "./components/CartList";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      children: [
        {
          index: true,
          Component: ProductCard,
        },
        {
          path: "cartlist",
          Component: CartList,
        },
      ],
    },
  ],
  {
    basename: "/ReactEcommerceProjectReduxToolKit",
  }
);


  return (
    <>
     <RouterProvider router={router} /> 
  
    </>
  );
}

export default App;
