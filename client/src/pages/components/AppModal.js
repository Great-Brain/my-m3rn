import React from "react";

const AppModal = () => {
  return (
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
              Create/Update AppBundle & Activity
            </h4>
          </div>
          <div className="modal-body">
            <div className="alert alert-warning">
              <center>
                You just need to define AppBundle &amp; Activity once.
                <br />
                If the plugin code changed, redefine (creates a new version).
              </center>
            </div>
            <div className="form-group">
              <label htmlFor="localBundles">Select a local AppBundle:</label>
              <select className="form-control" id="localBundles">
                {" "}
              </select>
              <b>Tip:</b> Make sure .ZIP bundles are placed at <b>/bundles/</b>{" "}
              folder
            </div>
            <div className="form-group">
              <label htmlFor="engines">Select engine:</label>
              <select className="form-control" id="engines">
                {" "}
              </select>
            </div>
            For this sample the .ZIP name is used as suffix to define{" "}
            <b>AppBundle</b> and <b>Activity</b>
            names. Activities will have file and params input, and file output.
          </div>
          <div style={{ textAlign: "left" }}>
            <label id="configText">
              <h4>Status</h4>
            </label>
          </div>
          <div className="progress progress-striped active">
            <div
              id="configProgressBar"
              width="90%"
              className="progress-bar progress-bar-success"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "0%" }}
            >
              <span className="sr-only">40% 完成</span>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-danger" id="clearAccount">
              Clear account
            </button>
            <button
              type="button"
              className="btn btn-primary"
              id="createAppBundleActivity"
            >
              Create/Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppModal;
