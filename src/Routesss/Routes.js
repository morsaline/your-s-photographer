import { createBrowserRouter } from "react-router-dom";
import ErroreElement from "../ErroreElemnt/ErroreElement";
import Main from "../LayOutt/Main";
import AddService from "../pagess/AddService/AddService";
import Blog from "../pagess/Blog/Blog";
import Home from "../pagess/Home/Home";
import Login from "../pagess/Login/Login";
import SignUp from "../pagess/Login/SignUp";
import MyReviews from "../pagess/MyReviews/MyReviews";
import UpdateReview from "../pagess/MyReviews/UpdateReview";
import Service from "../pagess/Servicee/Service";
import ServiceD from "../pagess/Servicee/ServiceD";
import PrivateRoute from "../PrivateRouter/PrivateRoute";
// import Checkout from "../pagess/Checkout/Checkout";
// import Home from "../pagess/Home/Home/Home";
// import Login from "../pagess/Login/Login";
// import SignUp from "../pagess/Login/SignUp";
// import Main from "../pagess/Main/Main";
// import Orders from "../pagess/Orders/Orders";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    // errorElement: <ErroreElement></ErroreElement>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://youteber-server.vercel.app/home"),
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/service/:id",
        element: <ServiceD></ServiceD>,
        loader: ({ params }) => {
          return fetch(
            `https://youteber-server.vercel.app/services/${params.id}`
          );
        },
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/update/:id",
        element: <UpdateReview></UpdateReview>,
        loader: ({ params }) =>
          fetch(`https://youteber-server.vercel.app/reviews/${params.id}`),
      },
    ],
  },
]);
export default router;
