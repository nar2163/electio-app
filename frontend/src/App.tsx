import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home/home'
import './App.css'
import MainPage from './components/main-page/main-page'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/mainPage" element={<MainPage />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  )
}

export default App
