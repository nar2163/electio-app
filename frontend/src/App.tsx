import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home/home'
import './App.css'
import MainPage from './components/main-page/main-page'
import LandingPage from './components/landing-page/landing-page'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/mainPage" element={<MainPage />}></Route>
            <Route path="/landingPage" element={<LandingPage />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  )
}

export default App
