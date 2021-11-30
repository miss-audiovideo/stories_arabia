import React from "react";
import "./NavMenu.css";

const NavMenu = () => {
  return (
    <div className="NavMenu">
      <div className="navmenu-brand">
        <h1>Arabia</h1>
      </div>
      <div className="navmenu-center">
        <ul>
          <li>Services</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Projects</li>
        </ul>
      </div>
      <div className="navmenu-last">
        <i>Ham</i>
      </div>
    </div>
  );
};

export default NavMenu;
