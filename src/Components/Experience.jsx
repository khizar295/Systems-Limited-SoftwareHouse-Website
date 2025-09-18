import React from "react";
import "../assets/Experience.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Img1 from "../assets/aws.png";
import Img2 from "../assets/salesforce.png";
import Img3 from "../assets/cloudera.png";
import Img4 from "../assets/Leapwork.png";
import Img5 from "../assets/Atlassian.png";
import Img6 from "../assets/Informatica.png";
import Img7 from "../assets/Formpipe.png";
import Img8 from "../assets/Sprinklr.png";
import Img9 from "../assets/Microsoft.png";
import Img10 from "../assets/IBM.png";
import Img11 from "../assets/temenos.png";
import Img12 from "../assets/Sap.png";

export default function Experience() {
  return (
    <div>
      <div className="exp-cont d-flex flex-wrap justify-content-around">
        <div
          className="exp-in1"
          style={{ marginLeft: "-300px", marginRight: "-300px" }}
        >
          <h1
            className="fw-normal"
            style={{ marginTop: "100px", fontSize: "3rem" }}
          >
            Translating <br /> technology into a <br /> positive impact
          </h1>
          <p className="mt-4" style={{ fontSize: "1.2rem" }}>
            Our approach allows us to deliver exceptional experiences <br />{" "}
            that drive growth and success for all stakeholders. Let’s rise{" "}
            <br /> to new heights with the power of digital transformation.
          </p>
          <button className="bg-transparent border-0 exp-btn">
            <a
              href="/"
              className="text-decoration-none text-warning border-bottom border-warning p-2  fs-5"
            >
              Learn More <FaArrowRightLong />
            </a>
          </button>
        </div>
        <div className="exp-in2 border-start" style={{ marginLeft: "-400px" }}>
          <div
            className="exp-in2-1 d-flex flex-wrap justify-content-between"
            style={{
              marginTop: "90px",
              marginLeft: "70px",
              marginRight: "-250px",
            }}
          >
            <div>
              <h1 style={{ fontSize: "4rem" }}>48+</h1>
              <small>
                Years of continual <br /> excellence
              </small>
            </div>
            <div className="style-7700" style={{ marginLeft: "100px" }}>
              <h1 style={{ fontSize: "4rem" }}>7700+</h1>
              <small>
                Change makers driving <br /> resolution
              </small>
            </div>
          </div>
          <div
            className="exp-in2-2 d-flex flex-wrap justify-content-between"
            style={{
              marginTop: "100px",
              marginLeft: "70px",
              marginRight: "-250px",
            }}
          >
            <div>
              <h1 style={{ fontSize: "4rem" }}>16+</h1>
              <small>
                Countries with our <br /> presence and <br /> clientele
              </small>
            </div>
            <div>
              <h1 style={{ fontSize: "4rem" }}>300+</h1>
              <small>
                Active clients across the <br /> globe
              </small>
            </div>
          </div>
        </div>
      </div>
      <h2 style={{ marginTop: "-230px" }} className="text-center">
        We rethink business growth for you through our collective <br />{" "}
        experience with strategic partner ecosystem.
      </h2>

      <div className="experience-carousel mt-5">
        <Swiper
  modules={[Autoplay]}
  spaceBetween={30}
  breakpoints={{
    0: {
      slidesPerView: 2,
    },
    425: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  }}
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
>
  {[
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
    Img12,
  ].map((img, idx) => (
    <SwiperSlide key={idx}>
      <img
        src={img}
        alt={`Slide ${idx + 1}`}
        className="carousel-img"
      />
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </div>
  );
}
