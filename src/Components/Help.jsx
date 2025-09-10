import React from "react";
import "../assets/Help.css";

export default function Help() {
  return (
    <div className="help-cont text-center">
      <h1 className="fw-normal" style={{ fontSize: "3.5rem" }}>
        How can we help you?
      </h1>
      <p className="fs-4">
        Are you ready to push boundaries and explore new frontiers of
        innovation?
      </p>
      <button
        className="btn btn-dark rounded-0 help-btn mt-3"
        style={{ padding: "10px 45px" }}
      >
        <a href="/" className="text-decoration-none text-light">
          LET'S WORK TOGETHER
        </a>
      </button>
    </div>
  );
}
