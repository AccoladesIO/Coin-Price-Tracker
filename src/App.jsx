import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Stats from './components/Stats'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact
            element={
              <>
                <Navbar />
                <Hero />
              </>
            } />
          <Route path='/stats'
            element={
              <>
                <Navbar />
                <Stats />
              </>
            } />
          <Route path='*' element={
            <Error />
          } />
        </Routes>
      </Router>

    </>
  )
}

export default App
