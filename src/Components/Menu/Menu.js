import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PROFILE from "../../.profile";
import './Menu.css'

export default function Menu() {
  const { profile } = PROFILE;
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <nav className="navBar">
      <button onClick={handleToggle}>
        {navbarOpen ? (
          <div className="notHamburger">
            <span className="close-x"></span>
          </div>
        ) : (
          <div className="hamburger">
            <span /> <span /> <span />
          </div>
        )}
      </button>{" "}
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        <li>
          <NavLink
            to={"/"}
            activeclassname="active-link"
            onClick={() => closeMenu()}
            className="navlinkA"
          >
            Home
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/loan-programs"
            activeclassname="active-link"
            onClick={() => closeMenu()}
            className="navlinkA"
          >
            Loan Programs
          </NavLink>
        </li> */}
        <li>
          <a
            href="https://nexamortgage.com/privacy-policy/"
            activeclassname="active-link"
            onClick={() => closeMenu()}
            target="_blank"
            rel="noreferrer"
            className="navlinkA"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          {profile.map((p) => (
            <a
              className="applyNowNavMenu navlinkA"
              key={p.id}
              href={p.loanLink}
              activeclassname="active-link"
              onClick={() => closeMenu()}
              target="_blank"
              rel="noreferrer"
              
            >
              Apply Now
            </a>
          ))}
        </li>
      </ul>{" "}
    </nav>
  );
}