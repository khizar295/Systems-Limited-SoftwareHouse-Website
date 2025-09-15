import React from "react";
import "../assets/Footer.css";
import "react-icons";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="footer-cont ps-5 pt-5">
      <div className="footer-in-cont container row ms-3">
        <div className="col-md-5">
          <h3 className="fw-bold">Services</h3>
          <div className="d-flex mt-4">
            <div className="footer-first-1">
              <div>
                <h5 className="fw-bold">Digital</h5>
                <button>
                  <a href="">Digital Cunsulting & Strategy</a>
                </button>{" "}
                <br />
                <button>
                  <a href="">Digital Commerce</a>
                </button>{" "}
                <br />
                <button>
                  <a href="">Business Applications</a>
                </button>
              </div>
              <div className="mt-4">
                <h5 className="fw-bold">Data & Analytics</h5>
                <button>
                  <a href="">Data Modernization</a>
                </button>{" "}
                <br />
                <button>
                  <a href="">Advanced Analytics</a>
                </button>{" "}
                <br />
                <button>
                  <a href="">Connected Intelligence</a>
                </button>{" "}
                <br />
                <button>
                  <a href="">Data Management</a>
                </button>{" "}
                <br />
                <button>
                  <a href="">Generative AI</a>
                </button>
              </div>
            </div>
            <div className="footer-first-2">
              <div>
                <h5 className="fw-bold">Cloud</h5>
                <button>
                  <a href="">Cloud Operations & Migration</a>
                </button>{" "}
                <br />
                <button>
                  <a href="">Cloud Applications</a>
                </button>{" "}
                <br />
                <button>
                  <a href="">Development & Integration</a>
                </button>{" "}
                <br />
                <button>
                  <a href="">Managed Services</a>
                </button>
              </div>
              <div className="mt-3">
                <h5>
                  <button>
                    <a href="" className="fw-bold">
                      Digital Infrastructure Services
                    </a>
                  </button>
                </h5>
              </div>
              <div>
                <h5>
                  <button>
                    <a href="" className="fw-bold">
                      Security
                    </a>
                  </button>
                </h5>
              </div>
              <div>
                <h5>
                  <button>
                    <a href="" className="fw-bold">
                      Emerging Technologies
                    </a>
                  </button>
                </h5>
              </div>
              <div>
                <h5>
                  <button>
                    <a href="" className="fw-bold">
                      Business Process Services
                    </a>
                  </button>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-4">
              <h3 className="fw-bold">Industries</h3>
              <div className="mt-4">
                <button>
                  <a href="">Communications</a>
                </button>{" "}
                <br />
                <button>
                  <a href="">Banking & Financial Services</a>
                </button>{" "}
                <br />
                <button>
                  <a href="">Public Sector</a>
                </button>{" "}
                <br />
                <button>
                  <a href="">Health</a>
                </button>{" "}
                <br />
                <button>
                  <a href="">Retail</a>
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <h3 className="fw-bold">Insights</h3>
              <div className="mt-4">
                <button>
                  <a href="">Case Studies</a>
                </button>{" "}
                <br />
                <button>
                  <a href="">Newsroom</a>
                </button>{" "}
                <br />
                <button>
                  <a href="">Whitepapers / EBooks</a>
                </button>{" "}
                <br />
                <button>
                  <a href="">Blogs</a>
                </button>{" "}
                <br />
              </div>
            </div>
            <div className="col-md-4">
              <h3 className="fw-bold">Quick Links</h3>
              <div className="mt-4">
                <button>
                  <a href="">Who we are</a>
                </button>{" "}
                <br />
                <button>
                  <a href="">Careers</a>
                </button>{" "}
                <br />
                <button>
                  <a href="">Our Leadership</a>
                </button>{" "}
                <br />
                <button>
                  <a href="">Investor Relation</a>
                </button>{" "}
                <br />
                <button>
                  <a href="">Financial Reports</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4 ms-4">
        <div className="col-md-8 mt-4">
          <h3 className="fw-normal">Subscribe</h3>
          <p>Stay updated on how future of technology is shaping.</p>
          <input
            type="text"
            placeholder="Enter your email here"
            style={{ height: "50px", width: "45%", marginRight: "10px" }}
            className="bg-transparent border-dark border-1"
          />{" "}
          <button
            type="submit"
            className="footer-btn border-dark border-1"
            style={{ height: "50px", width: "100px", marginTop: "-7px" }}
          >
            <a href="" className="text-decoration-none">
              Submit
            </a>
          </button>
        </div>
        <div className="col-md-4 fs-2 mt-5 pt-5 ps-5">
          <FaLinkedin className="mx-2 social-icon rounded-50" />
          <FaFacebook className="mx-2 social-icon" />
          <FaInstagramSquare className="mx-2 social-icon" />
          <FaYoutube className="mx-2 social-icon" />
          <FaSquareXTwitter className="mx-2 social-icon" />
        </div>
      </div>
      <div
        className="row border-top border-dark mt-5 p-3 footer-last-row"
        style={{ marginLeft: "-50px" }}
      >
        <div className="col-md-8">
          <button className="social-icon bg-transparent border-dark mx-4">
            <a href="" className="text-decoration-none text-dark">
              Privacy Policy
            </a>
          </button>
          <button className="social-icon bg-transparent border-dark mx-4">
            <a href="" className="text-decoration-none text-dark">
              Terms & Conditions
            </a>
          </button>
          <button className="social-icon bg-transparent border-dark mx-4">
            <a href="" className="text-decoration-none text-dark">
              Sitemap
            </a>
          </button>
          <button className="social-icon bg-transparent border-dark mx-4">
            <a href="" className="text-decoration-none text-dark">
              Cookie Policy
            </a>
          </button>
        </div>
        <div className="col-md-4 ps-5">
            <small className="ms-5">© 2025 Systems Ltd. All Rights Reserved.</small>
        </div>
      </div>
    </div>
  );
}
