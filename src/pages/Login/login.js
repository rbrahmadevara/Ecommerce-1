import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
export const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");
  const navigate = useNavigate();
  function loginHandler() {
    if (!localStorage.getItem("login")) {
      alert("User doesn't exists,SignUp to continue ");
      // navigate("/login");
    } else {
      let { email, password } = JSON.parse(localStorage.getItem("login"));
      if (userName === email && userPassword === password) {
        navigate("/products");
      }
    }
  }
  return (
    <div>
      <form className="loginCard" onSubmit={() => loginHandler()}>
        <div>
          <label> UserName : </label>
          <input
            type="text"
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <div>
          <label>Password : </label>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="btn-logIn">LogIn</button>
        {/* <button className="btn-logIn">LogIn With Test Credentials</button> */}
        <div>
          New user?
          <Link to="/signUp">
            <span className="signUp">SignUp</span>
          </Link>
        </div>
      </form>
    </div>
  );
};
