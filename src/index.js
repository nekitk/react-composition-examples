import React from "react";
import { render } from "react-dom";

import { MyComponent } from "./composition/01-container-and-presentational.js";
// import { MyComponent } from "./composition/children-branching";
// import MyComponent from "./hoc/my-component";
// import MyComponent from "./render-prop/my-component";
// import MyComponent from "./component-prop/my-component";
// import MyComponent from "./decorator-hoc/my-component";
// import MyComponent from "./inheritance-hoc/my-component";
// import MyComponent from "./mixin/my-component";

// TODO табы с разными компонентами ?

class App extends React.Component {
  myRef = React.createRef();

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          Ping MyComponent
        </button>
        <br />
        <MyComponent ref={this.myRef} />
      </div>
    );
  }

  handleClick = () => {
    if (this.myRef.current.ping && this.myRef.current.ping()) {
      alert("Pinged");
    } else {
      alert("Ping failed");
    }
  };
}

render(<App />, document.getElementById("app"));
