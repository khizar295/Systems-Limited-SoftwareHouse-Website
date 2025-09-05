import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const Dynamiclines = () => {
  const phrases = ['possibilities', 'impact', 'innovation'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='d-flex justify-content-around align-items-center' style={{ height: '100vh', padding: '0 2rem' }}>
      <div>
        <h1 style={{ fontSize: '4rem' }} className='fw-normal'>Our Services</h1>

        <div className="d-flex align-items-center">
          <h1 style={{ marginRight: '0.5rem', fontSize: '3rem'}} className='fw-normal'>Redefining</h1>

          {/* Slide container */}
          <div className="text-slider">
            <div
              className="text-slide-track"
              style={{ transform: `translateY(-${index * 60}px)` }}
            >
              {phrases.map((phrase, idx) => (
                <div key={idx} className="slide-text text-dark fw-normal" style={{fontSize: '3rem'}}>{phrase}</div>
              ))}
            </div>
          </div>
        </div>
        <h1 style={{ fontSize: '4rem' }} className='fw-normal'>across the globe</h1>
        <button className='mt-5 border-0 bg-transparent'><a href="/" className='text-decoration-none text text-warning fs-5'>GET IN TOUCH <FaArrowRightLong /></a></button>
      </div>

      <div>
        <div className="lines-in2-1 mb-4">
          <h3  className='fw-normal'>AI Transformation</h3>
          <small className='fs-5'>We maximize the power and promise of AI to drive</small><br />
          <small className='fs-5'>transformative business outcomes through our</small><br />
          <small className='fs-5'>comprehensive AI consulting services and solutions</small><br />
          <button className='mt-4 border-0 bg-transparent'><a href="/" className='text-decoration-none text text-warning fs-5'>Learn More <FaArrowRightLong /></a></button>
        </div>
        <br />
        <br />
        <div className="lines-i52-2 mt-4">
          <h3 className='fw-nor5al'>Data & Analytics</h3>
          <small className='fs-5'>We enable enterprises to transform data into a business</small><br />
          <small className='fs-5'>advantage by tapping into the capabilities of ML, advanced</small><br />
          <small className='fs-5'>analytics, generative AI, and connected intelligence</small><br />
          <button className='mt-4 border-0 bg-transparent'><a href="/" className='text-decoration-none text text-warning fs-5'>Learn More <FaArrowRightLong /></a></button>
        </div>
      </div>
    </div>
  );
};

export default Dynamiclines;
