import React, { useState } from "react";
import { CiSearch, CiGlobe } from "react-icons/ci";
import { FaArrowDown, FaBars, FaTimes } from "react-icons/fa";
import "../assets/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="navbar-container position-absolute z-1 w-100">
      <div className="border-bottom border-2 border-light container-fluid">
        <nav className="nav d-flex justify-content-between align-items-center mx-5 px-5 main-nav">
          <div className="d-flex align-items-center">
            <h2 className="logo text-light">systems</h2>
            <ul className="nav-links list-unstyled d-flex mb-1 ms-4 d-none d-lg-flex">
              <li><a href="/" className="nav-link-item">Services</a></li>
              <li><a href="/" className="nav-link-item">Industries</a></li>
              <li><a href="/" className="nav-link-item">Insights</a></li>
              <li><a href="/" className="nav-link-item">About</a></li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <ul className="list-unstyled d-flex mb-1 d-none d-lg-flex">
              <li><a href="/" className="nav-link-item">Careers</a></li>
              <li><a href="/" className="nav-link-item">Investors</a></li>
            </ul>
            <button className="icon-btn d-none d-lg-block">
              <a href="/" className="icon-link"><CiSearch /></a>
            </button>
            <button className="icon-btn d-none d-lg-block">
              <a href="/" className="icon-link"><CiGlobe /> <FaArrowDown /></a>
            </button>

            <button className="hamburger-btn d-lg-none text-white fs-3 border-0 bg-transparent" onClick={toggleSidebar}>
              <FaBars />
            </button>
          </div>
        </nav>

        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <div className="sidebar-header d-flex justify-content-between align-items-center">
            <h2 className="text-light">systems</h2>
            <button className="text-white fs-3 border-0 bg-transparent" onClick={toggleSidebar}>
              <FaTimes />
            </button>
          </div>
          <ul className="list-unstyled">
            <li><a href="/" className="sidebar-link">Services</a></li>
            <li><a href="/" className="sidebar-link">Industries</a></li>
            <li><a href="/" className="sidebar-link">Insights</a></li>
            <li><a href="/" className="sidebar-link">About</a></li>
            <li><a href="/" className="sidebar-link">Careers</a></li>
            <li><a href="/" className="sidebar-link">Investors</a></li>
            <li><a href="/" className="sidebar-link">Search <CiSearch /></a></li>
            <li><a href="/" className="sidebar-link">Language <CiGlobe /> <FaArrowDown /></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
