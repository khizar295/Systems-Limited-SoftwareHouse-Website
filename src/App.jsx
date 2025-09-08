import React from 'react'
import 'react-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import Navbar from './Components/Navbar'
import Landingpage from './Components/Landingpage'
import Dynamiclines from './Components/Dynamiclines'
import Insights from './Components/Insights'

export default function App() {

  return (
    <>
    <Navbar/>
    <Landingpage/>
    <Dynamiclines/>
    <Insights/>
    </>
  )
}
