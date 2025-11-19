import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Maintenance from "./pages/Maintenance/Maintenance";
import ComingSoon from "./pages/ComingSoon1/ComingSoon";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<ComingSoon />} />
            <Route path="/maintenance-page" element={<Maintenance />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
