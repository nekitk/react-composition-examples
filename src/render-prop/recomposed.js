import * as React from "react";
import { WithNow } from "./with-now";
import { compose, mapProps, pure } from "recompose";

export default class MyComponent extends React.Component {
  render() {
    return (
      <div>
        Now: <WithNow render={this.renderNow} />
      </div>
    );
  }

  renderNow = now => <this.Now now={now} />;

  Now = compose(
    mapProps(props => ({
      hours: props.now.getHours(),
      minutes: props.now.getMinutes()
    })),
    pure
  )(({ hours, minutes }) => {
    console.log("render", new Date());
    return (
      <span style={{ fontWeight: "bold" }}>
        {hours}h {minutes}m
      </span>
    );
  });

  // @public
  ping() {
    return true;
  }
}
