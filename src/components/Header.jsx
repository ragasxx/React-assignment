import React from "react";
import "../App.css";

const Header = () => {
  return (
    <div className="header">
      <div className="heading">
        <h2>
          Hello, <span>Brooklyn Simmons</span>
        </h2>
        <h3>
          Welcome to <span>spot trading</span>
        </h3>
      </div>
      <button className="header_btn">Start Trading</button>
    </div>
  );
};

export default Header;
