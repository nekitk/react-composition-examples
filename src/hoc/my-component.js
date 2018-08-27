import * as React from "react";
import { withNow } from "./with-now";
import { withWidth } from "./with-width";

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        Now: {this.props.now.toLocaleString()}
        <br />
        Width: {this.props.width}
      </div>
    );
  }

  // @public
  ping() {
    return true;
  }

  /*
    import MyComponent from './my-component';
    console.log(MyComponent.pingStatic) // -> undefinedz
  */
  static pingStatic() {
    alert("Pinged staticly");
  }
}

export default withWidth(withNow(MyComponent));
