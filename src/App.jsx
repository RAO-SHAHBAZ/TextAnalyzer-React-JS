import React from 'react'
import Navbar from './Components/Navbar'
import Maintool from './Components/Maintool'
export default function App() {
  return (
    <div>
      <Navbar  logoheading = "RAO SHAHBAZ TOOL"/>
      <div className="container">
        <h1 className="text-center my-3" >
          Best Text Analyzer Tool
        </h1>
        <Maintool/>
      </div>
    </div>

  )
}
