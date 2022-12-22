import React, { useState } from "react";
import Forms from "./components/Forms";
//const path = require('path');
// Common packages: jQuery, Bootstrap
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.js';

function DA() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [outputLog, setOutputLog] = useState("");

  const handleWidthChange = (e) => {
    setWidth(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const startWorkitem = () => {
    // Your existing startWorkitem code here
  };

  return (
    <div>
      <Forms />
    </div>
  );
}

export default DA;
