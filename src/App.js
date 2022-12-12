import { useEffect, useState } from "react";
import "./styles.css";
import { Navbar } from "./components/NavBar/Navbar";
import { Route, Routes } from "react-router";
import { Home } from "./pages/Home/Home";
import { Toast } from "./components/Tost/tost";
import { Products } from "./pages/Products/products";
import { Cart } from "./pages/Cart/cart";
import { Wishlist } from "./pages/Wishlist/wishlist";
import { PrivateRoute } from "./pages/PrivateRoutes/privateRoute";
import { Login } from "./pages/Login/login";
import { SignUp } from "./pages/SignUp/signup";
export default function App() {
  const [toast, setToast] = useState({
    flag: false,
    message: ""
  });
  useEffect(() => {
    setTimeout(() => {
      setToast({
        flag: false,
        message: ""
      });
    }, 2000);
  }, [setToast]);
  return (
    <div className="App">
      <Navbar />
      {toast.flag && <Toast message={toast.message} />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/products"
          element={<Products setToast={setToast} />}
        ></Route>
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist setToast={setToast} />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart setToast={setToast} />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}
