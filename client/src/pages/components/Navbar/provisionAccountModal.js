import React from "react";

const provisionAccountModal = () => {
  return (
    <div
      className="modal fade"
      id="provisionAccountModal"
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
            <h4 className="modal-title">Thanks for using this sample!</h4>
          </div>
          <div className="modal-body">
            <p>
              To view your BIM 360 Docs files on this app please authorize my
              APS Client ID with your BIM 360 Docs Account.
            </p>
            <p>
              <button
                type="button"
                className="btn btn-info"
                data-toggle="modal"
                data-target="#provisionAccountStepsModal"
              >
                Show me the steps
                <span className="glyphicon glyphicon-new-window"></span>
              </button>
            </p>
            Use this as APS Client ID:
            <div className="input-group">
              <input
                type="text"
                readOnly
                aria-describedby="CopyClientID"
                id="ClientID"
                className="form-control"
                value=""
              />
              <span
                className="input-group-addon"
                style={{ cursor: "pointer" }}
                data-clipboard-target="#ClientID"
                id="CopyClientID"
              >
                Copy to clipboard
              </span>
            </div>
            And this App Name:
            <div className="input-group">
              <input
                type="text"
                readOnly
                aria-describedby="CopyAppName"
                id="AppName"
                className="form-control"
                value="Excel Export & Import Sample"
              />
              <span
                className="input-group-addon"
                style={{ cursor: "pointer" }}
                data-clipboard-target="#AppName"
                id="CopyAppName"
              >
                Copy to clipboard
              </span>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              id="provisionAccountSave"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default provisionAccountModal;
