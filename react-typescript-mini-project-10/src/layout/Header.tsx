import React from "react";
import { NAV_LINKS } from "../constants/constants";
import { NavLink, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <header className="header bg-black py-[20px] text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">{isHome ? "myShop1" : "myShop2"}</h1>
        <nav>
          <ul className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-white font-bold transition  ${
                      isActive ? "text-yellow-400 font-semibold" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
