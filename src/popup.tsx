import * as React from "react";
import * as ReactDOM from "react-dom";

import "./styles/popup.scss";

class Hello extends React.Component {
  render() {
    return (
      <div className="popup-padded">
        <h1>Hello World</h1>
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById("popup"));
