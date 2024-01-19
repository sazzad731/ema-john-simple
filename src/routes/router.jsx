import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Shop from '../components/Shop/Shop'
import OrderReview from "../components/OrderReview/OrderReview";
import { productsAndCardLoader } from "../loaders/productsAndCardLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/orders",
        loader: () => fetch("products.json"),
        element: <Shop />,
      },
      {
        path: "/order-review",
        loader: productsAndCardLoader,
        element: <OrderReview />,
      },
    ],
  },
]);