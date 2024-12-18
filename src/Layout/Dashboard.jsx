import { FaCalendar, FaCartPlus, FaHome } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="bg-orange-600 w-64 min-h-screen ">
        <ul className="menu">
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
