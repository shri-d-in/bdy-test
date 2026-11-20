import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Gallery from "./pages/Gallery";

import Surprise from "./pages/Surprise";

import Tired from "./pages/Tired";
import NoTired from "./pages/NoTired";

function App() {
  return (
    <Router>
      {/* <Navbar />  */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/surprise" element={<Surprise />} />
        <Route path="/tired" element={<Tired />} />
        <Route path="/notired" element={<NoTired />} />
      </Routes>
    </Router>
    {/* Footer: Created by ChatGPT - © 2026 */}
  );
}

export default App;
