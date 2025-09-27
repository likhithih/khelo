
import React from "react";
import Logo from "../component/Logo";
import "./Register.css";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted ✅");
  };

  return (
    <div id="container">
      <div id="re_logo">
        <Logo />
      </div>
      <h2>REGISTER</h2>
      <form id="forms" onSubmit={handleSubmit}>
        <label className="lables" htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="ENTER YOUR NAME" required />

        <label className="lables" htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="ENTER YOUR EMAIL" required />

        <label className="lables" id="password" htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="ENTER YOUR PASSWORD"
          required
        />

        <label className="lables" htmlFor="confirm_password">Confirm Password</label>
        <input
          id="confirm_password"
          type="password"
          placeholder="CONFIRM YOUR PASSWORD"
          required
        />

        <label className="lables" htmlFor="phone_number">Phone Number</label>
        <input
          id="phone_number"
          type="tel"
          placeholder="ENTER YOUR PHONE NUMBER"
          pattern="[0-9]{10}"
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
