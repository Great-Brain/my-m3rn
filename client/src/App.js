import React, { useState } from 'react';
//const path = require('path');
// Common packages: jQuery, Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// Files for this project
import './js/ApsDesignAutomation' 

const Nav = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <ul className="nav navbar-nav left">
          <li>
            <a href="http://tutorials.autodesk.io" target="_blank">
              <img alt="" src="" height="20" />
            </a>
          </li>
        </ul>
        <div
          style={{ float: 'right', marginTop: '15px', cursor: 'pointer' }}
          data-toggle="modal"
          data-target="#defineActivityModal"
          title="Configure AppBundle & Activity"
        >
          <span style={{ paddingRight: '5px' }}>
            <span className="glyphicon glyphicon-cog glyphiconTop mlink" /> Configure
          </span>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
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
      <Nav />
      <div className="container-fluid" style={{ marginTop: '70px' }}>
        <div className="row">
          <div className="col-sm-4">
            <div className="form-group">
              <label htmlFor="width">Width:</label>
              <input
                type="number"
                className="form-control"
                id="width"
                placeholder="Enter new width value"
                value={width}
                onChange={handleWidthChange}
                />
                </div>
                <div className="form-group">
                <label htmlFor="height">Height:</label>
                <input
                             type="number"
                             className="form-control"
                             id="height"
                             placeholder="Enter new height value"
                             value={height}
                             onChange={handleHeightChange}
                           />
                </div>
                <div className="form-group">
          <label htmlFor="inputFile">Input file</label>
          <input type="file" className="form-control-file" id="inputFile" />
        </div>
        <div className="form-group">
          <label htmlFor="activity">Existing activities</label>
          <select className="form-control" id="activity"> </select>
        </div>
        <center>
          <button className="btn btn-primary" onClick={startWorkitem}>
            Start workitem
          </button>
        </center>
        <br />
      </div>
      <div className="col-sm-8">
        <pre id="outputlog" style={{ height: 'calc(100vh - 120px)', overflowY: 'scroll' }}>
          {outputLog}
        </pre>
      </div>
    </div>
  </div>
  {/* Modal Define AppBundle & Activity */}
  <div
    className="modal fade"
    id="defineActivityModal"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="myModalLabel"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Cancel"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 className="modal-title" id="myModalLabel">
            Define AppBundle & Activity
          </h4>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="appbundle">AppBundle</label>
            <select className="form-control" id="appbundle"> </select>
          </div>
          <div className="form-group">
            <label htmlFor="activity">Activity</label>
            <select className="form-control" id="activityName"> </select>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              // Your existing code for handling the modal form submission here
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
);
};

export default App;