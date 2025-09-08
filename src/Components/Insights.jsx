import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRightLong } from "react-icons/fa6";
import Image1 from "../assets/insight-1.jpg";
import Image2 from "../assets/insight-2.jpg";
import Image3 from "../assets/insight-3.jpg";
import Image4 from "../assets/insight-4.jpg";
import Image5 from "../assets/insight-5.jpg";
import Image6 from "../assets/insight-6.jpg";

export default function Insights() {
    useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });

  AOS.refresh();
}, []);
  return (
    <div className="insight-cont pt-5">
      <h1
        className="text-light text-center mt-2 fw-normal mb-5"
        style={{ fontSize: "2.2rem" }}
      >
        Featured Insights
      </h1>
      <div
        className="insight-cont-img d-grid text-center"
        style={{ gridTemplateColumns: "auto auto auto" }}
      >
        <div className="insight-item">
          <img src={Image1} alt="Insight 1" />
          <div className="overlay-text-1">NEWSROOM</div>
          <div className="overlay-text-1-2">Systems Limited in <br /> partnership with <br /> boston Health AI <br /> powers the launch <br /> of Hami.</div>
          <div className="overlay-text-1-3">
            Systems Limited has partnered <br /> with Boston Health AI and C10 <br /> Labs to Launch Hami, the <br /> world's first AI-powered <br /> physician assistant.
          </div>
          <button className="overlay-text-1-4 btn">Read More <FaArrowRightLong /></button>
        </div>

        <div className="insight-item">
          <img src={Image2} alt="Insight 1" />
          <div className="overlay-text-1">NEWSROOM</div>
          <div className="overlay-text-1-2">Systems Limited <br /> wins Forbes Asia's <br /> Best Under a Billion <br /> 2024 <br /> 2024.</div>
          <div className="overlay-text-1-3">
            Leading the way, year after <br /> year_Systems wins<br /> Forbes Asia's best under a <br /> Billions 2024<br /> for fifth time.
          </div>
          <button className="overlay-text-1-4 btn">Explore <FaArrowRightLong /></button>
        </div>
        <div className="insight-item">
          <img src={Image3} alt="Insight 1" />
          <div className="overlay-text-1">NEWSROOM</div>
          <div className="overlay-text-1-2">Systems Limited <br /> MEA wins the <br /> 2024/2025 Microsoft <br /> Business Aplioations  <br /> Inner Circle Award.</div>
          <div className="overlay-text-1-3">
            Systems Limited MEA is proud to <br /> announce its 2024-2025 Microsoft <br /> Business Applications Inner Circle <br /> Award, honoring its peroformance <br /> and innovative solutions.
          </div>
          <button className="overlay-text-1-4 btn">Read More <FaArrowRightLong /></button>
        </div>


       <div className="insight-item">
          <img src={Image4} alt="Insight 1"  className="mt-5"/>
          <div className="overlay-text-2">NEWSROOM</div>
          <div className="overlay-text-2-2">Mashreq and Systems <br /> Limited Expand Strategic <br /> Partnership to <br /> Advance Digital<br /> Banking.</div>
          <div className="overlay-text-2-3">Systems Limited and Mashreq have <br /> renewed and Expanded their <br /> Strategic Partnership, Building <br /> on two years of successfull <br /> collaboration for Digitalization.</div>
          <button className="overlay-text-2-4 btn">Read More <FaArrowRightLong /></button>
        </div>
        <div className="insight-item">
          <img src={Image5} alt="Insight 1"  className="mt-5"/>
          <div className="overlay-text-2">NEWSROOM</div>
          <div className="overlay-text-2-2">Enhancing <br /> enterprise mobility <br /> through <br /> Customer - Inclusive<br /> App</div>
          <div className="overlay-text-2-3">System's mobile data lets <br /> customers manage accounts and <br /> transaction with 24/7 support. With <br /> over 2 million downloads, its simple,<br /> secure interface drives success.</div>
          <button className="overlay-text-2-4 btn">Download Now <FaArrowRightLong /></button>
        </div>
        <div className="insight-item">
          <img src={Image6} alt="Insight 1"  className="mt-5"/>
          <div className="overlay-text-2">NEWSROOM</div>
          <div className="overlay-text-2-2">AI is taking <br /> over Banking <br /> Faster <br /> than your<br /> think.</div>
          <div className="overlay-text-2-3">AI is transforming banking _ <br /> Boosting efficiency, cutting costs<br /> and personalizing experiences. With <br /> generative AI, the future is here. Read <br /> to see hot it is reshaping industry.</div>
          <button className="overlay-text-2-4 btn">Read More <FaArrowRightLong /></button>
        </div>
      </div>
    </div>
  );
}
