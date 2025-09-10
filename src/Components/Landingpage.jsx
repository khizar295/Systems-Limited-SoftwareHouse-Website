import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import vid1 from "../assets/1.mp4";
import vid2 from "../assets/2.mp4";
import vid3 from "../assets/3.mp4";
import "../assets/Landing.css";

export default function Landingpage() {
  const slides = [
    {
      video: vid1,
      heading: "We reimagine",
      heading2: "tomorrow",
      subheading:
        "Driving growth and molding the future through transformative change",
      buttonText: "Get in Touch",
    },
    {
      video: vid2,
      heading: "AI that dares",
      heading2: "to disrupt",
      subheading: "Hyper-personalized at the pace of your thoughts",
      buttonText: "Learn More",
    },
    {
      video: vid3,
      heading: "Join the Movement",
      subheading: "Be a part of something big",
      buttonText: "Sign Up",
    },
  ];

  return (
    <div
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
      className="position-relative z-0"
    >
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        style={{ width: "100%", height: "100%" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <video
                src={slide.video}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                autoPlay
                muted
                loop
                playsInline
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "35%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "start",
                  color: "white",
                  zIndex: 10,
                  padding: "0 1rem",
                }}
              >
                <h1 style={{ fontSize: "6rem", marginBottom: "1rem" }}>
                  {slide.heading}
                </h1>
                <h1 style={{ fontSize: "6rem", marginBottom: "1rem" }}>
                  {slide.heading2}
                </h1>
                <h1 style={{ fontSize: "6rem", marginBottom: "1rem" }}>
                  {slide.heading3}
                </h1>
                <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
                  {slide.subheading}
                </p>
                <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
                  {slide.subheading2}
                </p>
                <button
                  style={{
                    padding: "0.75rem 1.5rem",
                    fontSize: "1.5rem",
                    border: "2px solid white",
                    backgroundColor: "transparent",
                    borderRadius: "5px",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
