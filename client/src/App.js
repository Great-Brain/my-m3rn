import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DA from "./pages/DA";
import RIO from "./pages/IOViewer";
import Nav from "./pages/components/Nav";

//const path = require('path');
// Common packages: jQuery, Bootstrap
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.js';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<DA />} />
        <Route path="/2" element={<RIO />} />
      </Routes>
    </Router>
  );
};

export default App;
