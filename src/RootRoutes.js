import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './Components/HomeScreen'
import LoanPrograms from './Components/LoanPrograms'

function RootRoutes() {
  return (
    <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/loan-programs" element={<LoanPrograms/>} />
    </Routes>
  )
}

export default RootRoutes