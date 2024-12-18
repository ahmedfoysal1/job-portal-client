import { useContext } from "react";
import AuthContext from "../context/Authcontext/Authcontext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  console.log(location)

  if (loading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }
  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={location?.pathname}></Navigate>;
};

export default PrivateRoute;