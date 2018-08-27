import * as React from "react";
import { WithNow } from "./with-now";

export function withNow(Component) {
  return class extends React.Component {
    render() {
      return (
        <WithNow render={now => <Component {...this.props} now={now} />} />
      );
    }
  };
}
