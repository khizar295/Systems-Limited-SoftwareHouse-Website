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
    AOS.init({
      duration: 1000,
      once: true,
    });

    AOS.refresh();

    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="d-flex justify-content-around mt-5"
      style={{ height: "200vh", padding: "0 2rem" }}
    >
      <div style={{ marginTop: "9rem" }}>
        <h1 style={{ fontSize: "4rem" }} className="fw-normal">
          Our Services
        </h1>

        <div className="d-flex align-items-center">
          <h1
            style={{ marginRight: "0.5rem", fontSize: "3rem" }}
            className="fw-normal"
            data-aos="slide-right"
          >
            Redefining
          </h1>
          <div
            className="text-slider"
            data-aos="slide-right"
            style={{ height: "60px", overflow: "hidden" }}
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
                  style={{ fontSize: "3rem", height: "50px" }}
                >
                  {phrase}
                </div>
              ))}
            </div>
          </div>
        </div>

        <h1
          style={{ fontSize: "4rem" }}
          className="fw-normal"
          data-aos="slide-right"
        >
          across the globe
        </h1>

        <button className="mt-5 border-0 bg-transparent">
          <a href="/" className="text-decoration-none text text-warning fs-5">
            GET IN TOUCH <FaArrowRightLong />
          </a>
        </button>
      </div>
      <div>
        <div
          className="lines-in2-1 mb-4 dynamic-box p-3 rounded border-bottom"
          data-aos="fade-down"
        >
          <h3 className="fw-normal">AI Transformation</h3>
          <small className="fs-5">
            We maximize the power and promise of AI to drive
          </small>
          <br />
          <small className="fs-5">
            transformative business outcomes through our
          </small>
          <br />
          <small className="fs-5">
            comprehensive AI consulting services and solutions
          </small>
          <br />
          <button className="mt-4 border-0 bg-transparent">
            <a href="/" className="text-decoration-none text text-warning fs-5">
              Learn More <FaArrowRightLong />
            </a>
          </button>
        </div>
        <div
          className="lines-i52-2 mt-4 dynamic-box p-3 rounded border-bottom"
          data-aos="fade-down"
        >
          <h3 className="fw-normal">Data & Analytics</h3>
          <small className="fs-5">
            We enable enterprises to transform data into a business
          </small>
          <br />
          <small className="fs-5">
            advantage by tapping into the capabilities of ML, advanced
          </small>
          <br />
          <small className="fs-5">
            analytics, generative AI, and connected intelligence
          </small>
          <br />
          <button className="mt-4 border-0 bg-transparent">
            <a href="/" className="text-decoration-none text text-warning fs-5">
              Learn More <FaArrowRightLong />
            </a>
          </button>
        </div>
        <div
          className="lines-in2-1 mt-5 dynamic-box p-3 pt-5 rounded border-bottom"
          data-aos="fade-up"
        >
          <h3 className="fw-normal">Digital</h3>
          <small className="fs-5">
            We offer core insights-driven digital transformation
          </small>
          <br />
          <small className="fs-5">
            capabilities, modernize key systems to accelerate systems,
          </small>
          <br />
          <small className="fs-5">
            and provide a design-led, unified and personalized experience.
          </small>
          <br />
          <button className="mt-4 border-0 bg-transparent">
            <a href="/" className="text-decoration-none text text-warning fs-5">
              Learn More <FaArrowRightLong />
            </a>
          </button>
        </div>
        <div
          className="lines-in2-2 mt-5 dynamic-box p-3 pt-5 rounded"
          data-aos="fade-up"
        >
          <h3 className="fw-normal">Cloud</h3>
          <small className="fs-5">
            We help enterprises scale and adapt to evolving needs within a
          </small>
          <br />
          <small className="fs-5">
            secure hybrid or pure cloud environment by leveraging end-
          </small>
          <br />
          <small className="fs-5">
            to-end and outcome-based cloud solutions
          </small>
          <br />
          <button className="mt-4 border-0 bg-transparent">
            <a href="/" className="text-decoration-none text text-warning fs-5">
              Learn More <FaArrowRightLong />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dynamiclines;
