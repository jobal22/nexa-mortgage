import React from 'react'
import { BrowserRouter, Link, Route } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import ScrollToTop from './helper/ScrollToTop';
import RootRoutes from './RootRoutes';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className='grid-container'>
        <Header />
        <main>
          <RootRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App