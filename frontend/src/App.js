import React, { Fragment } from "react";
import "./App.css";

function App() {
  const issueSubmit = () => {};
  return (
    <Fragment>
      <div>
        <div>
          <h1>PROJECT WEB PORTAL</h1>
        </div>
        <form onSubmit={issueSubmit}>
          <div>
            <input type="text" placeholder="Project Name" />
          </div>
          <div>
            <input type="text" placeholder="Project Title" />
          </div>
          <div>
            <input type="text" placeholder="Description" />
          </div>
          <div>
            <input type="number" name="" id="" placeholder="Priority" />
          </div>

          <input type="submit" value="Create Issue" />
        </form>
      </div>
    </Fragment>
  );
}

export default App;
