import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
import { FaArrowDown } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className='position-absolute z-1 bg-transparent w-100'>
        <div className='border-bottom border-2 border-light container-fluid'>
      <nav className='nav d-flex justify-content-between align-items-center mx-5 px-5'>
        <div className="d-flex align-items-center">
        <h2 className='logo text-light'>systems</h2>
        <ul className='list-unstyled d-flex mb-1 ms-4'>
           <li><a href="" className='text-decoration-none m-2 p-3 text-light'>Services</a></li>
           <li><a href="" className='text-decoration-none m-2 p-3 text-light'>Industries</a></li>
           <li><a href="" className='text-decoration-none m-2 p-3 text-light'>Insights</a></li>
           <li><a href="" className='text-decoration-none m-2 p-3 text-light'>About</a></li>
        </ul>
      </div>
      <div className="d-flex align-items-center">
        <ul className='list-unstyled d-flex mb-1'>
            <li><a href="" className='text-decoration-none m-2 p-3 text-light'>Careers</a></li>
            <li><a href="" className='text-decoration-none m-2 p-3 text-light'>Investors</a></li>
        </ul>
        <button className='border-0 bg-transparent border-start border-end border-2 border-light fs-2 pb-2'><a href="/" className='text-decoration-none mx-2 px-1 text-light'><CiSearch/></a></button>
        <button className='border-0 bg-transparent fs-5 ms-2'><a href="/" className='text-decoration-none m-2 text-light'><CiGlobe /><FaArrowDown /></a></button>
      </div>
      </nav>
    </div>
    </div>
  )
}
