import {
  FaCalendar,
  FaCartPlus,
  FaHome,
  FaPhone,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { FaBookOpen, FaList } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hook/useAdmin";

const Dashboard = () => {
  // TODO: get isAdmin value from the database.
  const [isAdmin] = useAdmin();
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
                <NavLink to="/dashboard/manageBooking">
                  <FaBookOpen></FaBookOpen>
                  Manage Bookings
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
                <NavLink to="/dashboard/cartHome">
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cartItem">
                  <FaCartPlus></FaCartPlus>
                  My cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cartCalender">
                  <FaCalendar></FaCalendar>
                  My Booking
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
