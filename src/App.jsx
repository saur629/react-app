// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/about/information/Login/";
import Website from "./components/about/information/Website/";
import Home from "./components/about/information/Home/";
import Footer from "./components/about/information/Footer/";
import About from "./components/about/information/About/";
import Contact from "./components/about/information/Contact/";
import LimitedCounter from "./components/about/information/LimitedCounter";
import { useEffect, useState } from "react";

function App() {
     <div className="App">
      <h1>Limited Counter Example</h1>
      <LimitedCounter />
    </div>

  return (
    <div className="App">
      <Router>
        <Website />
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/website" element={<Website />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/limitedcounter" element={<LimitedCounter />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
