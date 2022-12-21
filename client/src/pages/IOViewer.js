import React, { useState } from 'react';
import AppModal from './components/AppModal';
import ModelViewer from './components/ModelViewer';
import BIM360Modal from './components/BIM360Modal.js';
import Help from './components/Help';
//const path = require('path');
// Common packages: jQuery, Bootstrap
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.js';

function IOViewer () {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [outputLog, setOutputLog] = useState('');

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
      <AppModal />
      <ModelViewer />
      <BIM360Modal />
      <Help />
    </div>
  );
};

export default IOViewer;