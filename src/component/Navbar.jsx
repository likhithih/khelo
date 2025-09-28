import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    backgroundColor: "red",
    borderRadius: "20px",
    padding: "8px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "80px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "black",
        color: "white",
        height: "60px",
        alignItems: "center",
      }}
    >
      <div style={navStyle}><Link to="/home" style={linkStyle}>Home</Link></div>
      <div style={navStyle}><Link to="/about" style={linkStyle}>About</Link></div>
      <div style={navStyle}><Link to="/booking" style={linkStyle}>Booking</Link></div>
      <div style={navStyle}><Link to="/menu" style={linkStyle}>Menu</Link></div>
      <div style={navStyle}><Link to="/contact" style={linkStyle}>Contact</Link></div>
    </div>
  );
}

export default Navbar;
