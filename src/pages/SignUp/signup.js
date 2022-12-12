import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
export const SignUp = () => {
  const [Name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function signupHandler() {
    localStorage.setItem(
      "login",
      JSON.stringify({
        isUserLoggedIn: true,
        Name,
        email,
        password
      })
    );
    navigate("/home");
  }
  return (
    <div className="signup">
      <form className="signup-form" onSubmit={() => signupHandler()}>
        <div>
          <label>Name:</label>
          <div className="input-error-div">
            <input
              type="text"
              onChange={(event) => setUserName(event.target.value)}
              placeholder="Enter your name"
            />
          </div>
        </div>

        <div>
          <label> Email-Id:</label>
          <div className="input-error-div">
            <input
              type="email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your Email-ID"
            />
          </div>
        </div>
        <div>
          <label>Password:</label>
          <div className="input-error-div">
            <input
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Password length should be 8(or more)"
            />
          </div>
        </div>
        <button type="submit" className="btn-signIn">
          Sign Up
        </button>
        <br />
        <div className="signUp-footer">
          Already have an account?
          <Link to="/login">
            <span className="signUp">LogIn here</span>
          </Link>
        </div>
      </form>
    </div>
  );
};
