import * as React from "react";
import { withNow } from "./with-now";
import { withWidth } from "./with-width";
import { Summary } from "./summary";

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>HOC</h1>
        Now: {this.props.now.toLocaleString()}
        <br />
        Width: {this.props.width}
        <br />
        <Summary />
      </div>
    );
  }

  // @public
  ping() {
    return true;
  }

  /*
    import MyComponent from './my-component';
    console.log(MyComponent.pingStatic) // -> undefined
  */
  static pingStatic() {
    alert("Pinged staticly");
  }
}

export default withWidth(withNow(3000)(MyComponent));
