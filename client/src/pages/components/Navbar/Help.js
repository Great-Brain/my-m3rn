import React from "react";

const Help = () => {
  return (
    <div
      className="modal fade"
      id="provisionAccountStepsModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
    >
      <div className="modal-dialog modal-lg" role="document">
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
            <h4 className="modal-title" id="myModalLabel1">
              Step-by-step guide
            </h4>
          </div>
          <div className="modal-body">
            <p>
              To access your BIM 360 Docs files with this app, you need to
              connect your BIM 360 account with the app.
            </p>
            <ol>
              <li>
                Log in to{" "}
                <a
                  href="https://bim360enterprise.autodesk.com/"
                  target="_blank"
                >
                  BIM 360 Account Administration
                </a>
                . Note that you need account administrator permissions.
              </li>
              <li>
                If you have more than one account, select the account you want
                to integrate with the app.
              </li>
              <li>
                From the toolbar, select{" "}
                <strong>SETTINGS &gt; Apps &amp; Integrations</strong>.
                <br />
              </li>
              <li>
                Click the <strong>Add Integration</strong> button.
                <br />
              </li>
              <li>
                Select <strong>BIM 360 Account Administration</strong> and{" "}
                <strong>BIM 360 Docs</strong>, and click <strong>Next</strong>.
              </li>
              <li>
                Select <strong>I’m the developer</strong>, and click{" "}
                <strong>Next</strong>.
              </li>
              <li>
                In the <strong>APS Client ID</strong> and{" "}
                <strong>App Name</strong> fields, enter the APS client ID and
                app name provided by the app retailer.
              </li>
              <li>
                Select the{" "}
                <strong>
                  I have saved the Account ID information securely
                </strong>{" "}
                checkbox.
              </li>
              <li>
                Click <strong>Save</strong>.<br />
              </li>
              <p></p>
              <p>
                Congratulations! You can now access your BIM 360 Docs files.
              </p>
            </ol>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
            >
              Understood, thanks!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
