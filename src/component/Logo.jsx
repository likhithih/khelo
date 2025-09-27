import React from "react";

function Logo() {
  const logoStyle = {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
    backgroundColor: "rgba(0, 0, 0, 0.707)",
    height: "150px",
    margin: "-72px 0px 0px 0px",
  };

  return (
    <div style={logoStyle}>
      <h1 style={{ color: "white", marginRight: "20px" }}>SPORT ARENA</h1>
      <img
        src="/logo.png"
        alt="logo"
        style={{ height: "150px", width: "390px", margin: "0px -40px 0px 0px" }}
      />
    </div>
  );
}

export default Logo;
