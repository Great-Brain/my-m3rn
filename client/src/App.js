import React, { useState } from 'react';
//const path = require('path');
// Common packages: jQuery, Bootstrap
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.js';

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

const Forms = () => {
  return (
    <div className="container-fluid" style={{ marginTop: '70px' }}>
      <div className="row">
          <div className="col-sm-4">
              <div className="form-group">
                  <label htmlFor='width'>Width:</label>
                  <input type="number" className="form-control" id="width" placeholder="Enter new width value"/>
              </div>
              <div className="form-group">
                  <label htmlFor="height">Height:</label>
                  <input type="number" className="form-control" id="height" placeholder="Enter new height value"/>
              </div>

              <div className="form-group">
                  <label htmlFor="inputFile">Input file</label>
                  <input type="file" className="form-control-file" id="inputFile"/>
              </div>
              <div className="form-group">
                  <label htmlFor="activity">Existing activities</label>
                  <select className="form-control" id="activity"> </select>
              </div>
              <center><button className="btn btn-primary" id="startWorkitem">Start workitem</button></center><br />
          </div>
          <div className="col-sm-8">
              <pre id="outputlog" style={{ height: 'calc(100vh - 120px)', overflowY: 'scroll' }}></pre>
          </div>
      </div>
    </div>
    );
};


const AppModal = () => {
  return (
    <div className="modal fade" id="defineActivityModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Cancel"><span
                      aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">Create/Update AppBundle & Activity</h4>
          </div>
          <div className="modal-body">
          <div className="alert alert-warning">
            <center>You just need to define AppBundle &amp; Activity once.<br />If the plugin code changed,
                redefine (creates a new version).</center>
          </div>
          <div className="form-group">
              <label htmlFor="localBundles">Select a local AppBundle:</label>
              <select className="form-control" id="localBundles"> </select>
              <b>Tip:</b> Make sure .ZIP bundles are placed at <b>/bundles/</b> folder
          </div>
          <div className="form-group">
              <label htmlFor="engines">Select engine:</label>
              <select className="form-control" id="engines"> </select>
          </div>
          For this sample the .ZIP name is used as suffix to define <b>AppBundle</b> and <b>Activity</b>
          names. Activities will have file and params input, and file output.
          </div>
            <div className="modal-footer">
                <button className="btn btn-danger" id="clearAccount">Clear account</button>
                <button type="button" className="btn btn-primary" id="createAppBundleActivity">Create/Update</button>
            </div>
        </div>
      </div>
    </div>
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
      <Forms />
      <AppModal />
    </div>
);
};

export default App;