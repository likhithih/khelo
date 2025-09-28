
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../component/Logo";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }
    
    // Store user data
    localStorage.setItem("userData", JSON.stringify(formData));
    alert("Registration successful! Redirecting to login...");
    navigate("/login");
  };

  return (
    <div id="container">
      <div id="re_logo">
        <Logo />
      </div>
      <h2>REGISTER</h2>
      <form id="forms" onSubmit={handleSubmit}>
        <label className="lables" htmlFor="name">Name</label>
        <input 
          id="name" 
          type="text" 
          placeholder="ENTER YOUR NAME" 
          value={formData.name}
          onChange={handleChange}
          required 
        />

        <label className="lables" htmlFor="email">Email</label>
        <input 
          id="email" 
          type="email" 
          placeholder="ENTER YOUR EMAIL" 
          value={formData.email}
          onChange={handleChange}
          required 
        />

        <label className="lables" id="password" htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="ENTER YOUR PASSWORD"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label className="lables" htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="CONFIRM YOUR PASSWORD"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <label className="lables" htmlFor="phoneNumber">Phone Number</label>
        <input
          id="phoneNumber"
          type="tel"
          placeholder="ENTER YOUR PHONE NUMBER"
          pattern="[0-9]{10}"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
