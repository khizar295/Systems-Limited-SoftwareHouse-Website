import React from 'react'
import 'react-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import Navbar from './Components/Navbar'
import Landingpage from './Components/Landingpage'
import Dynamiclines from './Components/Dynamiclines'
import Insights from './Components/Insights'
import Experience from './Components/Experience'
import Joinus from './Components/Joinus'
import Help from './Components/Help'
import Footer from './Components/Footer'

export default function App() {

  return (
    <>
    <Navbar/>
    <Landingpage/>
    <Dynamiclines/>
    <Insights/>
    <Experience/>
    <Joinus/>
    <Help/>
    <Footer/>
    </>
  )
}
