import React from "react";
import { Link,NavLink, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../constants/constants";

const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const logoSrc = isHome ? 'img/logo1.png' : 'img/logo2.png';
  return (
    <>
      <header className="header py-[10px]">
        <div className="container mx-auto text-white px-[1rem]">
          <div className="innerHeader flex justify-between items-center">
            <Link to="/" className="logoBlock">
              <img src={logoSrc} alt="" />
            </Link>
            <div className="topnav">
              <ul className="flex space-x-6">
                {NAV_ITEMS.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `font-bold  ${
                          isActive ? "text-yellow-400 " : "text-white "
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
