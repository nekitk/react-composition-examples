import * as React from "react";
import { WithNow } from "./with-now";
import { Summary } from "./summary";

function FormattedNow({ now, minutes }) {
  return <span style={{ fontWeight: "bold" }}>{now.toLocaleString()}</span>;
}

export default class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Component Injection</h1>
        Now: <WithNow component={FormattedNow} />
        <Summary />
      </div>
    );
  }

  // @public
  ping() {
    return true;
  }
}
