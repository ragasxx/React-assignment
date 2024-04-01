import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

import { sideNavItems } from "../config/sideNavItems";
import { NavLink } from "react-router-dom";
import "../App.css";

const SideNav = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container">
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidenav">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Carbon
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggleSideNav} />
          </div>
        </div>
        {sideNavItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassname="active"
          >
            <div
              style={{ fontSize: isOpen ? "1.2rem" : "1.5rem" }}
              className="icon"
            >
              {item.icon}
            </div>
            <div
              className="link_text"
              style={{ display: isOpen ? "block" : "none" }}
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main className="main">{children}</main>
    </div>
  );
};

export default SideNav;
