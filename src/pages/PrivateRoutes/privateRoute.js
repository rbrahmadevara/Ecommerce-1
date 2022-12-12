import { Navigate } from "react-router-dom";
export { PrivateRoute };
function PrivateRoute({ children }) {
  let { isUserLoggedIn } = JSON.parse(localStorage?.getItem("login")) ?? false;

  return isUserLoggedIn ? children : <Navigate to="/login" />;
}
