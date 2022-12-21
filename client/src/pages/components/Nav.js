import React from "react";

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

  export default Nav;