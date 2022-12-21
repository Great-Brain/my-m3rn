import React from "react";

const ModelViewer = () => {
  return (
    <div className="container-fluid fill">
      <div className="row fill">
        <div className="col-sm-3 fill">
          <br />
          <div>
            <label>
              <h4>Select Revit Model (Non Cloud Model)</h4>{" "}
            </label>
          </div>
          <div className="panel panel-default fill">
            <div
              className="panel-heading"
              data-toggle="tooltip"
              style={{ padding: "0px" }}
            >
              <span
                id="refreshSourceHubs"
                className="glyphicon glyphicon-refresh"
                style={{ cursor: "pointer", display: "none" }}
                title="Refresh list of files"
              />
            </div>
            <div id="sourceHubs">
              <div style={{ paddingTop: "100px", textAlign: "center" }}>
                <br />
                <br />
                <br /> You may also need to provision your
                <br /> BIM 360 Docs account for this app.
                <br />
                <a href="https://aps.autodesk.com/blog/bim-360-docs-provisioning-forge-apps">
                  Learn more
                </a>
                .
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 fill">
          <div className="row fill">
            <div className="col-sm-11 fill">
              <div style={{ paddingTop: "10px", textAlign: "center" }}>
                <h2>
                  <b>Model Viewer</b>
                </h2>
              </div>
              <div id="apsViewer" />
              <div className="col-sm-1" />
            </div>
          </div>
        </div>
        <div className="col-sm-3 fill">
          <div className="row">
            <div style={{ paddingTop: "10px", textAlign: "center" }}>
              <h2>
                <b>Revit Excel Export & Import</b>
              </h2>
            </div>
          </div>
          <div className="row ">
            <div style={{ paddingTop: "10px", textAlign: "center" }}>
              <form className="bs-example bs-example-form" role="form">
                <div className="row">
                  <div style={{ paddingTop: "10px", textAlign: "left" }}>
                    <div className="col-lg-12">
                      <div style={{ textAlign: "left" }}>
                        <label>Select parameters:</label>
                      </div>
                      <div className="input-group">
                        <span className="input-group-addon">
                          <input type="checkbox" id="includeFireRating" />
                        </span>
                        <label className="form-control">
                          Door Type Fire Rating{" "}
                        </label>
                      </div>
                      <div className="input-group">
                        <span className="input-group-addon">
                          <input
                            type="checkbox"
                            id="includeComments"
                            defaultChecked
                          />
                        </span>
                        <label className="form-control">
                          {" "}
                          Door Instance Comments{" "}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div style={{ paddingTop: "10px", textAlign: "left" }}>
                    <div className="col-lg-12">
                      <div style={{ textAlign: "left" }}>
                        <label>Export or Import:</label>
                      </div>
                      <div className="input-group">
                        <span className="input-group-addon">
                          <input
                            type="radio"
                            name="exportOrImport"
                            value="export"
                            defaultChecked
                          />
                        </span>
                        <label className="form-control">
                          Export parameters To Excel
                        </label>
                      </div>
                      <div className="input-group">
                        <span className="input-group-addon">
                          <input
                            type="radio"
                            name="exportOrImport"
                            value="import"
                          />
                        </span>
                        <label className="form-control">
                          Import parameters from Excel
                        </label>
                      </div>
                      <div
                        className="form-group"
                        id="importFile"
                        style={{ display: "none" }}
                      >
                        <label htmlFor="file">Excel File:</label>
                        <input type="file" className="form-control" id="file" />
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-sm-12">
                    <button
                      type="button"
                      className="btn btn-primary"
                      id="exportImportButton"
                    >
                      Export / Import
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelViewer;
