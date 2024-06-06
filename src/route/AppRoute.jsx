import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../layout/Layout";
import QuoteList from "../copmonents/quote/QuoteList";
import QuoteForm from "../copmonents/quote/QuoteForm";
import SingilQuote from "../copmonents/quote/SingilQuote";

const AppRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "/",
          element: <Navigate to="/quotes" />,
        },

        {
          path: "/quotes",
          element: <QuoteList />,
        },

        {
          path: "/add-quote",
          element: <QuoteForm />,
        },
        {
          path:'/quotes/:quoteId',
          element:<SingilQuote />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;
