import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import auth from "../../firebase.int";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [Show, setShow] = useState("false");
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      <nav className="z-5  flex flex-wrap items-center justify-between px-2 py-3 bg-rose-500 mb-3">
        <div
          id="top"
          className="container px-4 mx-auto flex flex-wrap items-center justify-between"
        >
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink
              to="/"
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            >
              Pen of Shadow
            </NavLink>
            <button
              className="hover:bg-red-600 duration-200 text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      opacity: isActive ? ".6" : "",
                    };
                  }}
                  to="/"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <span className="ml-2">Home</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavHashLink
                  style={({ isActive }) => {
                    return {
                      opacity: isActive ? ".6" : "",
                    };
                  }}
                  to="/services#services"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <span className="ml-2">Services</span>
                </NavHashLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      opacity: isActive ? ".6" : "",
                    };
                  }}
                  to="/blogs"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Blogs</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      opacity: isActive ? ".6" : "",
                    };
                  }}
                  to="/about"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <span className="mr-2">About</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavHashLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#ffa8a8" : "",
                    };
                  }}
                  to="/contact#contact"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <span className="mr-2">Contact</span>
                </NavHashLink>
              </li>
              <li className="nav-item">
                {user ? (
                  <button
                    onClick={() => signOut(auth)}
                    className="btn px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug bg-white text-red-500 rounded hover:shadow-lg duration-200"
                  >
                    <span className="mx-2">Log Out</span>
                  </button>
                ) : (
                  <NavLink
                    to={"/login"}
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug bg-white text-red-500 rounded hover:shadow-lg duration-200"
                  >
                    <span className="mx-2">Log In</span>
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
