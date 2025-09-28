import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../component/Logo";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      localStorage.setItem("name", username);
      localStorage.setItem("password", password);
      navigate("/home");
    } else if (!username) {
      alert("Please enter a username.");
    } else {
      alert("Please enter a password.");
    }
  };

  return (
    <div id="container">
            <Logo/>
        <div><h2>LOGIN</h2></div>
        <div id="main">
        <form id="form">
            <label className="login_lables" id="username" htmlFor="username">USERNAME</label>
          <input
            id="username_in"
            type="text"
            placeholder="ENTER USERNAME"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
            <label className="login_lables" htmlFor="password" id="password">PASSWORD</label>
          <input
            type="password"
            placeholder="ENTER PASSWORD"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" id="loginBtn" onClick={handleLogin}>
            LOGIN</button>
            <Link to ="/register" id="register">REGISTER</Link>
        </form>
         </div>
    </div>

  );
}

export default Login;
