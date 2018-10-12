import * as React from "react";
import { WithNow } from "./with-now";
import { compose, mapProps, pure } from "recompose";

const Time = compose(
  mapProps(props => ({
    hours: props.now.getHours(),
    minutes: props.now.getMinutes()
  })),
  pure
)(({ hours, minutes }) => {
  console.log("render time", new Date());
  return (
    <span style={{ fontWeight: "bold" }}>
      {hours}h {minutes}m
    </span>
  );
});

const Year = compose(
  mapProps(props => ({
    year: props.now.getFullYear()
  })),
  pure
)(({ year }) => {
  return <i>{year}</i>;
});

export default class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Component Injection</h1>
        Time: <WithNow component={Time} />
        <br />
        Year: <WithNow component={Year} />
        <br />
        Value: <WithNow component={({ now }) => now.valueOf()} />
      </div>
    );
  }

  // @public
  ping() {
    return true;
  }
}
