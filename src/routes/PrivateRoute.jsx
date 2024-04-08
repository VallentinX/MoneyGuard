import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const PrivateRoute = ({ children }) => {
  const isLogin = useSelector(selectIsLoggedIn);
  if (isLogin) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
