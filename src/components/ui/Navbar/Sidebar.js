import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import imgLogo from "../../../assets/perucash-logo-nuevo.png";
import { MenuIcon } from "@heroicons/react/solid";

export const Sidebar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      {/* // Navbar  */}
      <nav className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-2">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo */}
              <div>
                <Link
                  to="/"
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <img
                    className="h-auto w-24 mr-1"
                    src={imgLogo}
                    alt="Perucash casa de prestamos y empenios"
                  />
                </Link>
              </div>

              {/* primary nav */}
              <div className="hidden md:flex space-x-1 items-center">
                <NavLink
                  exact
                  activeClassName="navlink-active"
                  to="/prestamos"
                  className="flex navlink"
                >
                  {" "}
                  Prestamos{" "}
                </NavLink>

                <NavLink
                  exact
                  activeClassName="navlink-active"
                  to="/caja"
                  className="flex navlink"
                >
                  {" "}
                  Caja{" "}
                </NavLink>
              </div>

              {/* secondary nav */}
            </div>
            <div className="hidden md:flex items-center">
              <Link to="/auth/login" className="logoutNavLink">
                Salir
              </Link>
            </div>

            {/* movile menu */}
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button" onClick={handleMenu}>
                <MenuIcon className="w-6 h-6"></MenuIcon>
              </button>
            </div>
          </div>
        </div>
        {menu ? (
          <div className='md:hidden'>
            <NavLink
              to="/prestamos"
              className="block navlink-mobile"
              activeClassName='block navlink-mobile-active'
            >
              Prestamos
            </NavLink>
            <NavLink to="caja" className="block navlink-mobile" activeClassName='navlink-mobile-active'>
              Caja
            </NavLink>
          </div>
        ) : null}
      </nav>
    </>
  );
};
