import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/Landing.css";
import "../assets/Dynamic.css";

const Dynamiclines = () => {
  const phrases = ["possibilities", "impact", "innovation"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();

    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container my-5">
      <div className="row align-items-start">
        <div className="col-md-6 mb-5">
          <h1 className="fw-normal" style={{ fontSize: "3.5rem", marginTop: "2rem" }}>
            Our Services
          </h1>

          <div className="d-flex align-items-center">
            <h1
              style={{ marginRight: "0.5rem", fontSize: "2.5rem" }}
              className="fw-normal"
              data-aos="slide-right"
            >
              Redefining
            </h1>
            <div
              className="text-slider"
              data-aos="slide-right"
              style={{ height: "50px", overflow: "hidden" }}
            >
              <div
                className="text-slide-track"
                style={{
                  transform: `translateY(-${index * 40}px)`,
                  transition: "transform 0.6s ease-in-out",
                }}
              >
                {phrases.map((phrase, idx) => (
                  <div
                    key={idx}
                    className="slide-text text-dark fw-normal"
                    style={{ fontSize: "2.5rem", height: "50px" }}
                  >
                    {phrase}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h1 className="fw-normal" style={{ fontSize: "3.5rem" }} data-aos="slide-right">
            across the globe
          </h1>

          <button className="mt-4 border-0 bg-transparent">
            <a href="/" className="text-decoration-none text text-warning fs-5">
              GET IN TOUCH <FaArrowRightLong />
            </a>
          </button>
        </div>
        <div className="col-md-6">
          <div
            className="dynamic-box mb-4 p-3 rounded border-bottom"
            data-aos="fade-down"
          >
            <h3 className="fw-normal">AI Transformation</h3>
            <small className="fs-5 d-block">
              We maximize the power and promise of AI to drive
            </small>
            <small className="fs-5 d-block">
              transformative business outcomes through our
            </small>
            <small className="fs-5 d-block">
              comprehensive AI consulting services and solutions
            </small>
            <button className="mt-4 border-0 bg-transparent">
              <a href="/" className="text-decoration-none text text-warning fs-5">
                Learn More <FaArrowRightLong />
              </a>
            </button>
          </div>

          <div
            className="dynamic-box mb-4 p-3 rounded border-bottom"
            data-aos="fade-down"
          >
            <h3 className="fw-normal">Data & Analytics</h3>
            <small className="fs-5 d-block">
              We enable enterprises to transform data into a business
            </small>
            <small className="fs-5 d-block">
              advantage by tapping into the capabilities of ML, advanced
            </small>
            <small className="fs-5 d-block">
              analytics, generative AI, and connected intelligence
            </small>
            <button className="mt-4 border-0 bg-transparent">
              <a href="/" className="text-decoration-none text text-warning fs-5">
                Learn More <FaArrowRightLong />
              </a>
            </button>
          </div>

          <div
            className="dynamic-box mb-4 p-3 pt-4 rounded border-bottom"
            data-aos="fade-up"
          >
            <h3 className="fw-normal">Digital</h3>
            <small className="fs-5 d-block">
              We offer core insights-driven digital transformation
            </small>
            <small className="fs-5 d-block">
              capabilities, modernize key systems to accelerate systems,
            </small>
            <small className="fs-5 d-block">
              and provide a design-led, unified and personalized experience.
            </small>
            <button className="mt-4 border-0 bg-transparent">
              <a href="/" className="text-decoration-none text text-warning fs-5">
                Learn More <FaArrowRightLong />
              </a>
            </button>
          </div>

          <div
            className="dynamic-box mb-4 p-3 pt-4 rounded"
            data-aos="fade-up"
          >
            <h3 className="fw-normal">Cloud</h3>
            <small className="fs-5 d-block">
              We help enterprises scale and adapt to evolving needs within a
            </small>
            <small className="fs-5 d-block">
              secure hybrid or pure cloud environment by leveraging end-
            </small>
            <small className="fs-5 d-block">
              to-end and outcome-based cloud solutions
            </small>
            <button className="mt-4 border-0 bg-transparent">
              <a href="/" className="text-decoration-none text text-warning fs-5">
                Learn More <FaArrowRightLong />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dynamiclines;
