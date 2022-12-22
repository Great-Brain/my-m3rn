import React from "react";
import AppModal from "./AppModal";
import ProvisionAccountModal from "./provisionAccountModal";
import Help from "./Help";

const Nav = () => {
  return (
    <div>
      <AppModal />
      <ProvisionAccountModal />
      <Help />
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <ul className="nav navbar-nav left col-lg-6">
            <li>
              <a
                href="http://developer.autodesk.com"
                target="_blank"
                rel="noreferrer"
              >
                <img alt="james app" src="" height="20" />
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav right col-lg-2">
            <li>
              <div 
              style={{ float: "right", marginTop: "15px", cursor: "pointer" }}
              >
                <span
                  style={{ paddingRight: "5px" }}
                  data-bs-toggle="modal"
                  data-bs-target="#provisionAccountModal"
                  title="Enable my BIM 360 Account"
                >
                  <span className="glyphicon glyphicon-cog glyphiconTop mlink" />{" "}
                  Enable my BIM 360 Account
                </span>
              </div>
            </li>
          </ul>
          <ul className="nav navbar-nav right col-lg-2">
            <li>
              <div
                style={{ float: "right", marginTop: "15px", cursor: "pointer" }}
              >
                <span
                  style={{ paddingRight: "5px" }}
                  data-bs-toggle="modal"
                  data-target="#defineActivityModal"
                  title="Configura AppBundle & Activity"
                >
                  <span className="glyphicon glyphicon-cog glyphiconTop mlink" />{" "}
                  Configure 
                </span>
              </div>
            </li>
          </ul>
          <ul className="nav navbar-nav right col-lg-2">
            <div style={{ paddingTop: "10px", textAlign: "right" }}>
              <li>
                <button
                  className="btn btn-sm btn-default"
                  id="autodeskSigninButton"
                  hidden
                >
                  Sign In &nbsp;&nbsp;
                  <img src="https://cdn.autodesk.io/autodesk.png" height="20" />
                </button>
                <button
                  className="btn btn-sm btn-default"
                  id="autodeskSignOutButton"
                  hidden
                >
                  Sign Out &nbsp;&nbsp;
                  <span id="userInfo" />
                </button>
              </li>
            </div>
          </ul>
        </div>
      </nav>
  </div>
  );
};

export default Nav;
