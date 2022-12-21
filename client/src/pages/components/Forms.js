import React from "react";
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

  export default Forms;