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
import CartHome from "./dashboard/CartHome/CartHome";
import CartCalender from "./dashboard/cartCalender/CartCalender";
import AllUsers from "./dashboard/allUsers/AllUsers";
import AddItems from "./Pages/AddItems/AddItems";
import AdminRoute from "./Pages/PrivateRoute/AdminRoute";
import ManageItem from "./dashboard/manageItem/ManageItem";

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
        path: "cartHome",
        element: <CartHome></CartHome>,
      },
      {
        path: "cartItem",
        element: <CartItem></CartItem>,
      },
      {
        path: "cartCalender",
        element: <CartCalender></CartCalender>,
      },
      // Admin Role Users only.
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
    ],
  },
]);
