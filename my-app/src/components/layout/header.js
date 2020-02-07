import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1> List </h1>
    </header>
  );
}

const headerStyle = {
  background: "yellow",
  color: "red",
  textAlign: "center",
  padding: "10px"
};

export default Header;
