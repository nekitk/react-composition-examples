import React from "react";

function Today({ now }) {
  return now.toLocaleString();
}

export class MyComponent extends React.Component {
  render() {
    return <Today now={new Date()} />;
  }

  // @public
  ping() {
    return true;
  }
}
