import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../../hook/useCart";
import useAdmin from "../../hook/useAdmin";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/menu"}>Menu</Link>
      </li>
      <li>
        <Link to={"/order/salad"}>Order</Link>
      </li>
      {/* condition added 
      // user ? condition ? double true : one true : false // nested ternary conditional
      */}
      {user && isAdmin && (
        <li>
          <Link to={"/dashboard/adminHome"}>Dashboard</Link>
        </li>
      )}

      {user && !isAdmin && (
        <li>
          <Link to={"/dashboard/userHome"}>Dashboard</Link>
        </li>
      )}
      <li>
        <Link to="/dashboard/cartItem">
          <button className="btn btn-sm">
            <FaCartPlus className="text-2xl text-blue-500"></FaCartPlus>
            <div className="badge badge-secondary">{cart.length}</div>
          </button>
        </Link>
      </li>

      <li></li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 opacity-80 max-w-full bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-36 p-2 shadow bg-black"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Simple Restaurant</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button onClick={handleLogOut} className="btn btn-sm btn-error">
                Log Out
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-sm border-t-orange-700">
                <Link to={"/login"}>Login</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
