import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Section1 from "./pages/Home/Section1";
import Section2 from "./pages/Home/Section2";

function App() {
  return (
    <Router>
      <Routes>
        
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Section1 />} />
        <Route path="/ourmenu" element={<Section2 />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        

      </Routes>
    </Router>
  );
}

export default App;
