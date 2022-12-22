import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DA from "./pages/DA";
import RIO from "./pages/IOViewer";
import Nav from "./pages/components/Navbar/Nav";
import AppModal from "./pages/components/Navbar/AppModal";
import ProvisionAccountModal from ".//pages/components/Navbar/provisionAccountModal";
import Help from ".//pages/components/Navbar/Help";

//const path = require('path');
// Common packages: jQuery, Bootstrap
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.js';

const App = () => {
  return (
    <Router>
      <Nav />
      <AppModal />
      <ProvisionAccountModal />
      <Help />
      <Routes>
        <Route path="/" element={<DA />} />
        <Route path="/2" element={<RIO />} />
      </Routes>
    </Router>
  );
};

export default App;
