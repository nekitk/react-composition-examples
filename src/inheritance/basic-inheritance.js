import * as React from "react";

class BasicComponent extends React.Component {
  state = {
    greeting: "Hello!"
  };

  componentDidMount() {
    console.log("basic mount");
  }
}

export default class MyComponent extends BasicComponent {
  componentDidMount() {
    super.componentDidMount();
    console.log("my mount");
  }

  render() {
    return this.state.greeting;
  }
}
