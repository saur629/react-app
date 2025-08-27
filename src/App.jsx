// src/App.jsx
// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/about/information/Login/";
import Website from "./components/about/information/Website/";
import Home from "./components/about/information/Home/";
import Footer from "./components/about/information/Footer/"
import About from  "./components/about/information/About/";
import Contact from "./components/about/information/Contact/";


function App() {
  return (
    <div className="App">
     {/* <h1>Hello World!</h1>
      //<h2>Welcome To Vite App</h2> */}
      
    <Router>
      <Website />
      <main className="flex-grow p-6">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/website" element={<Website/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
      </Routes>
      </main>
      <Footer />
    </Router>
  
     
      {/* <Login />  */}
      
    </div>
  );
}

export default App;
