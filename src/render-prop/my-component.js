import * as React from "react";
import { WithNow } from "./with-now";
import { WithNow as WithNowFACC } from "./facc";
import { Summary } from "./summary";

export default class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <WithNow
          render={now => {
            return <div>Now: {now.toLocaleString()}</div>;
          }}
        />

        <WithNowFACC>
          {now => <div>FACC: {now.toLocaleString()}</div>}
        </WithNowFACC>

        <Summary />
      </div>
    );
  }

  // @public
  ping() {
    return true;
  }
}
