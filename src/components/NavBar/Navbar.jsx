import { NavLink, useNavigate } from "react-router-dom";
import "./style.css";
export const Navbar = () => {
  let { isUserLoggedIn } = JSON.parse(localStorage?.getItem("login")) ?? false;
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <div className="nav-left">
        <span>Ekart</span>
      </div>
      <div className="nav-right">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/wishlist">Wishlist</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        {!isUserLoggedIn ? (
          <NavLink to="/login">Login</NavLink>
        ) : (
          <button
            onClick={() => {
              localStorage.removeItem("login");
              navigate("/login");
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};
