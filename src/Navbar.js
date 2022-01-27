import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const active = (active) => {
    return active ? "navbar--active" : "";
  };

  return (
    <div>
      <nav className="navbar">
        <ul className="navbar__list">
          <li>
            <NavLink to="/" className={({ isActive }) => active(isActive)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={({ isActive }) => active(isActive)}>
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              className={({ isActive }) => active(isActive)}
            >
              orders
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;