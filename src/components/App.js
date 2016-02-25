import React from 'react';

import 'bootstrap.css';
import '../assets/scss/hero.scss';

/**
* App is a stateless function, we use it as a base structure
*/
var App = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1>Marvel's Codex</h1>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default App;