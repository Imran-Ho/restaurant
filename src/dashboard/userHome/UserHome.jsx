import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const UserHome = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>
        Hi, welcome{" "}
        <span className="text-2sl text-red-500">
          {user ? user?.displayName : "Back"}
        </span>
      </h1>
    </div>
  );
};

export default UserHome;
