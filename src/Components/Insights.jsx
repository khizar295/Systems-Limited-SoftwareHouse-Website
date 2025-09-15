import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRightLong } from "react-icons/fa6";
import Image1 from "../assets/insight-1.jpg";
import Image2 from "../assets/insight-2.jpg";
import Image3 from "../assets/insight-3.jpg";
import Image4 from "../assets/insight-4.jpg";
import Image5 from "../assets/insight-5.jpg";
import Image6 from "../assets/insight-6.jpg";
import "../assets/Insight.css";

export default function Insights() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  const insights = [
    {
      image: Image1,
      title: "NEWSROOM",
      headline: "Systems Limited in partnership with Boston Health AI powers the launch of Hami.",
      description: "Systems Limited has partnered with Boston Health AI and C10 Labs to launch Hami, the world's first AI-powered physician assistant.",
      buttonText: "Read More",
    },
    {
      image: Image2,
      title: "NEWSROOM",
      headline: "Systems Limited wins Forbes Asia's Best Under a Billion 2024",
      description: "Leading the way, year after year — Systems wins Forbes Asia's Best Under a Billion 2024 for the fifth time.",
      buttonText: "Explore",
    },
    {
      image: Image3,
      title: "NEWSROOM",
      headline: "Systems Limited MEA wins the 2024/2025 Microsoft Business Applications Inner Circle Award.",
      description: "Systems Limited MEA is proud to announce its 2024-2025 Microsoft Business Applications Inner Circle Award, honoring its performance and innovative solutions.",
      buttonText: "Read More",
    },
    {
      image: Image4,
      title: "NEWSROOM",
      headline: "Mashreq and Systems Limited Expand Strategic Partnership to Advance Digital Banking.",
      description: "Systems Limited and Mashreq have renewed and expanded their strategic partnership, building on two years of successful collaboration for digitalization.",
      buttonText: "Read More",
    },
    {
      image: Image5,
      title: "NEWSROOM",
      headline: "Enhancing enterprise mobility through Customer-Inclusive App.",
      description: "System's mobile data lets customers manage accounts and transactions with 24/7 support. With over 2 million downloads, its simple, secure interface drives success.",
      buttonText: "Download Now",
    },
    {
      image: Image6,
      title: "NEWSROOM",
      headline: "AI is taking over Banking Faster than you think.",
      description: "AI is transforming banking — boosting efficiency, cutting costs, and personalizing experiences. With generative AI, the future is here.",
      buttonText: "Read More",
    },
  ];

  return (
    <div className="insight-cont pt-5">
      <h1 className="text-light text-center mt-2 fw-normal mb-5" style={{ fontSize: "2.2rem" }}>
        Featured Insights
      </h1>

      <div className="container">
        <div className="row">
          {insights.slice(0, 3).map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="insight-item">
                <img src={item.image} alt={`Insight ${index + 1}`} />
                <div className="overlay-text-1">{item.title}</div>
                <div className="overlay-text-1-2">{item.headline}</div>
                <div className="overlay-text-1-3">{item.description}</div>
                <button className="overlay-text-1-4 btn">
                  {item.buttonText} <FaArrowRightLong />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          {insights.slice(3, 6).map((item, index) => (
            <div className="col-md-4 mb-4" key={index + 3}>
              <div className="insight-item">
                <img src={item.image} alt={`Insight ${index + 4}`} />
                <div className="overlay-text-1">{item.title}</div>
                <div className="overlay-text-1-2">{item.headline}</div>
                <div className="overlay-text-1-3">{item.description}</div>
                <button className="overlay-text-1-4 btn">
                  {item.buttonText} <FaArrowRightLong />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
