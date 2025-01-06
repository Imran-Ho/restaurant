import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Order from "./Pages/Order/Order";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Secret from "./Shared/Secret/Secret";
import Dashboard from "./Layout/Dashboard";
import CartItem from "./dashboard/cart/CartItem";
import CartCalender from "./dashboard/cartCalender/CartCalender";
import AllUsers from "./dashboard/allUsers/AllUsers";
import AddItems from "./Pages/AddItems/AddItems";
import AdminRoute from "./Pages/PrivateRoute/AdminRoute";
import ManageItem from "./dashboard/manageItem/ManageItem";
import UpdateItem from "./dashboard/updateItem/UpdateItem";
import Payment from "./dashboard/payment/Payment";
import PaymentDetails from "./dashboard/paymentDetails/PaymentDetails";
import AdminHome from "./dashboard/adminHome/AdminHome";
import UserHome from "./dashboard/userHome/UserHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "cartItem",
        element: <CartItem></CartItem>,
      },
      {
        path: "cartCalender",
        element: <CartCalender></CartCalender>,
      },
      {
        path: "paymentDetails",
        element: <PaymentDetails></PaymentDetails>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      // Admin Role Users only.
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "manageItem",
        element: (
          <AdminRoute>
            <ManageItem></ManageItem>
          </AdminRoute>
        ),
      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://fake-restaurent-server.vercel.app/menu/${params.id}`),
      },
    ],
  },
]);
