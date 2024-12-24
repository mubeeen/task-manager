import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container-fluid p-0">
      <div className="row vh-100 m-0">
        <div
          className="col-md-4 col-lg-3 sidebar bg-light d-flex flex-column"
          style={{ color: "red" }}
        >
          <h6 className="text-center mt-3">All boards (3)</h6>
          <div className="text-center mt-4">
            <p>option 1</p>
            <p>option 2</p>
            <p>option 3</p>
            <p>option 4</p>
          </div>
          <div className="mt-auto">
            <p>Bottom</p>
          </div>
        </div>
        <div className="col-md-8 col-lg-9 main-content d-flex flex-column">
          <div className="row">
            <div className="col">A</div>
            <div className="col">B</div>
            <div className="col">C</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
