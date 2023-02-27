import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './components/home/home'
import LandingPage from './components/landing-page/landing-page'
import { BuildPage } from './components/build-page/build-page'
import Swipe from './components/swipe/swipe'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/swipe" element={<Swipe />}></Route>
            <Route path="/landingPage" element={<LandingPage />}></Route>
            <Route path="/build/:buildType" element={<BuildPage />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  )
}

export default App
