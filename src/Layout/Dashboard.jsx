import {
  FaCalendar,
  FaCartPlus,
  FaHome,
  FaList,
  FaPhone,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";

import { TiThMenu } from "react-icons/ti";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hook/useAdmin";
import useCart from "../hook/useCart";

const Dashboard = () => {
  // TODO: get isAdmin value from the database.
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="bg-orange-600 w-64 min-h-screen ">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItem">
                  <FaList></FaList>
                  Manage Items
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cartItem">
                  <FaCartPlus></FaCartPlus>
                  My cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentDetails">
                  <FaCalendar></FaCalendar>
                  Payment Details
                </NavLink>
              </li>
            </>
          )}
          {/* shared navnar */}
          <div className="divider">Main Page</div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <TiThMenu></TiThMenu>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <FaPhone></FaPhone>
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="bg-slate-300 flex-auto p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
