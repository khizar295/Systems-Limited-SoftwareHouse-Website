import React, { useState } from "react";
import { CiSearch, CiGlobe } from "react-icons/ci";
import { FaArrowDown, FaBars, FaTimes } from "react-icons/fa";
import Image1 from "../assets/navbar1.jpg";
import "../assets/Navbar.css";
import { FaArrowRightLong } from "react-icons/fa6";

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
              <li className="nav-item-with-mega">
                <a href="/" className="nav-link-item">
                  Services
                </a>
                <div className="mega-menu row h-100">
                  <div className="mega-menu-section col-md-3 bg-secondary px-5 py-3 w-100">
                    <h2 className="fw-bold">Services</h2>
                    <div className="navbar-image-wrapper rounded-4 w-100 h-50">
                      <img
                        src={Image1}
                        alt=""
                        className="navbar-image w-100 h-100 rounded-4"
                      />
                    </div>
                    <p className="text-dark fw-bold mt-3">
                      Why data standards matter & why <br /> they're important
                    </p>
                    <button className="bg-transparent border-0 nav-btn">
                      <a
                        href="/"
                        className="text-decoration-none text-warning border-bottom border-warning p-2  fs-6"
                      >
                        Learn More <FaArrowRightLong />
                      </a>
                    </button>
                  </div>
                  <div className="mega-menu-section col-md-3">
                    <h6>Mobile Apps</h6>
                    <ul>
                      <li>
                        <a href="/">iOS Development</a>
                      </li>
                      <li>
                        <a href="/">Android Development</a>
                      </li>
                      <li>
                        <a href="/">React Native</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-section col-md-3">
                    <h6>Cloud & DevOps</h6>
                    <ul>
                      <li>
                        <a href="/">AWS Services</a>
                      </li>
                      <li>
                        <a href="/">Docker & Kubernetes</a>
                      </li>
                      <li>
                        <a href="/">CI/CD Pipelines</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item-with-mega">
                <a href="/" className="nav-link-item">
                  Industries
                </a>
                <div className="mega-menu">
                  <div className="mega-menu-section">
                    <h6>Web Development</h6>
                    <ul>
                      <li>
                        <a href="/">React Development</a>
                      </li>
                      <li>
                        <a href="/">Next.js Projects</a>
                      </li>
                      <li>
                        <a href="/">WordPress</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-section">
                    <h6>Mobile Apps</h6>
                    <ul>
                      <li>
                        <a href="/">iOS Development</a>
                      </li>
                      <li>
                        <a href="/">Android Development</a>
                      </li>
                      <li>
                        <a href="/">React Native</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-section">
                    <h6>Cloud & DevOps</h6>
                    <ul>
                      <li>
                        <a href="/">AWS Services</a>
                      </li>
                      <li>
                        <a href="/">Docker & Kubernetes</a>
                      </li>
                      <li>
                        <a href="/">CI/CD Pipelines</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item-with-mega">
                <a href="/" className="nav-link-item">
                  Insights
                </a>
                <div className="mega-menu">
                  <div className="mega-menu-section">
                    <h6>Web Development</h6>
                    <ul>
                      <li>
                        <a href="/">React Development</a>
                      </li>
                      <li>
                        <a href="/">Next.js Projects</a>
                      </li>
                      <li>
                        <a href="/">WordPress</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-section">
                    <h6>Mobile Apps</h6>
                    <ul>
                      <li>
                        <a href="/">iOS Development</a>
                      </li>
                      <li>
                        <a href="/">Android Development</a>
                      </li>
                      <li>
                        <a href="/">React Native</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-section">
                    <h6>Cloud & DevOps</h6>
                    <ul>
                      <li>
                        <a href="/">AWS Services</a>
                      </li>
                      <li>
                        <a href="/">Docker & Kubernetes</a>
                      </li>
                      <li>
                        <a href="/">CI/CD Pipelines</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item-with-mega">
                <a href="/" className="nav-link-item">
                  About
                </a>
                <div className="mega-menu">
                  <div className="mega-menu-section">
                    <h6>Web Development</h6>
                    <ul>
                      <li>
                        <a href="/">React Development</a>
                      </li>
                      <li>
                        <a href="/">Next.js Projects</a>
                      </li>
                      <li>
                        <a href="/">WordPress</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-section">
                    <h6>Mobile Apps</h6>
                    <ul>
                      <li>
                        <a href="/">iOS Development</a>
                      </li>
                      <li>
                        <a href="/">Android Development</a>
                      </li>
                      <li>
                        <a href="/">React Native</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-section">
                    <h6>Cloud & DevOps</h6>
                    <ul>
                      <li>
                        <a href="/">AWS Services</a>
                      </li>
                      <li>
                        <a href="/">Docker & Kubernetes</a>
                      </li>
                      <li>
                        <a href="/">CI/CD Pipelines</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <ul className="list-unstyled d-flex mb-1 d-none d-lg-flex">
              <li className="nav-item-with-mega">
                <a href="/" className="nav-link-item">
                  Careers
                </a>
                <div className="mega-menu">
                  <div className="mega-menu-section">
                    <h6>Web Development</h6>
                    <ul>
                      <li>
                        <a href="/">React Development</a>
                      </li>
                      <li>
                        <a href="/">Next.js Projects</a>
                      </li>
                      <li>
                        <a href="/">WordPress</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-section">
                    <h6>Mobile Apps</h6>
                    <ul>
                      <li>
                        <a href="/">iOS Development</a>
                      </li>
                      <li>
                        <a href="/">Android Development</a>
                      </li>
                      <li>
                        <a href="/">React Native</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-section">
                    <h6>Cloud & DevOps</h6>
                    <ul>
                      <li>
                        <a href="/">AWS Services</a>
                      </li>
                      <li>
                        <a href="/">Docker & Kubernetes</a>
                      </li>
                      <li>
                        <a href="/">CI/CD Pipelines</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item-with-mega">
                <a href="/" className="nav-link-item">
                  Investors
                </a>
                <div className="mega-menu">
                  <div className="mega-menu-section">
                    <h6>Web Development</h6>
                    <ul>
                      <li>
                        <a href="/">React Development</a>
                      </li>
                      <li>
                        <a href="/">Next.js Projects</a>
                      </li>
                      <li>
                        <a href="/">WordPress</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-section">
                    <h6>Mobile Apps</h6>
                    <ul>
                      <li>
                        <a href="/">iOS Development</a>
                      </li>
                      <li>
                        <a href="/">Android Development</a>
                      </li>
                      <li>
                        <a href="/">React Native</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-section">
                    <h6>Cloud & DevOps</h6>
                    <ul>
                      <li>
                        <a href="/">AWS Services</a>
                      </li>
                      <li>
                        <a href="/">Docker & Kubernetes</a>
                      </li>
                      <li>
                        <a href="/">CI/CD Pipelines</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <button className="icon-btn d-none d-lg-block">
              <a href="/" className="icon-link">
                <CiSearch />
              </a>
            </button>
            <button className="icon-btn d-none d-lg-block">
              <a href="/" className="icon-link">
                <CiGlobe /> <FaArrowDown />
              </a>
            </button>

            <button
              className="hamburger-btn d-lg-none text-white fs-3 border-0 bg-transparent"
              onClick={toggleSidebar}
            >
              <FaBars />
            </button>
          </div>
        </nav>

        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <div className="sidebar-header d-flex justify-content-between align-items-center">
            <h2 className="text-light">systems</h2>
            <button
              className="text-white fs-3 border-0 bg-transparent"
              onClick={toggleSidebar}
            >
              <FaTimes />
            </button>
          </div>
          <ul className="list-unstyled">
            <li>
              <a href="/" className="sidebar-link">
                Services
              </a>
            </li>
            <li>
              <a href="/" className="sidebar-link">
                Industries
              </a>
            </li>
            <li>
              <a href="/" className="sidebar-link">
                Insights
              </a>
            </li>
            <li>
              <a href="/" className="sidebar-link">
                About
              </a>
            </li>
            <li>
              <a href="/" className="sidebar-link">
                Careers
              </a>
            </li>
            <li>
              <a href="/" className="sidebar-link">
                Investors
              </a>
            </li>
            <li>
              <a href="/" className="sidebar-link">
                Search <CiSearch />
              </a>
            </li>
            <li>
              <a href="/" className="sidebar-link">
                Language <CiGlobe /> <FaArrowDown />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
