import React from "react";
import s from "./Header.module.css"; //Созданние класса для использования компонентного CSS
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className={s.header}>
      <nav>
        <ul>
          <NavLink activeClassName={s.activeLink} to="/profile">
            <li>Profile</li>
          </NavLink>
          <NavLink activeClassName={s.activeLink} to="/messages">
            <li>Messages</li>
          </NavLink>
          <NavLink activeClassName={s.activeLink} to="/settings">
            <li>Settings</li>
          </NavLink>
          <NavLink activeClassName={s.activeLink} to="/about">
            <li>About</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
