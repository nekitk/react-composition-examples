import * as React from "react";
import { withNow } from "../hoc/with-now";
import { withWidth } from "../hoc/with-width";

@withNow
@withWidth
// @withRouter
// @connect(mapStateToProps)
export default class MyComponent extends React.Component {
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
}
