import * as React from "react";
import createReactClass from "create-react-class";
import { withNowMixin } from "./with-now";
import { Summary } from "./summary";

export default createReactClass({
  mixins: [withNowMixin],

  getInitialState() {
    return {
      greeting: "Hello!"
    };
  },

  componentDidMount() {
    console.log("mount in component");
  },

  render() {
    return (
      <div>
        {this.state.greeting} Now: {this.state.now.toLocaleString()}
        <Summary />
      </div>
    );
  },

  // @public
  ping() {
    return true;
  }
});
