// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Works from "./components/portfolio";
import ServicesPage from "../src/components/services";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<Works />} />
      <Route path="/services" element={<ServicesPage />} />
      {/* fallback */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
