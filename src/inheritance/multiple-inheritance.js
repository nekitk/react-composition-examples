import * as React from "react";

const WithWidth = superclass =>
  class extends superclass {
    constructor(props) {
      super(props);

      this.state = {
        ...this.state,
        width: 100
      };
    }

    componentDidMount() {
      super.componentDidMount && super.componentDidMount();
      console.log("a mount");
    }
  };

const WithNow = superclass =>
  class extends superclass {
    constructor(props) {
      super(props);

      this.state = {
        ...this.state,
        now: new Date()
      };
    }

    componentDidMount() {
      super.componentDidMount && super.componentDidMount();
      console.log("b mount");
    }

    ping() {
      alert("Pinged Now");
    }
  };

export default class MyComponent extends WithWidth(WithNow(React.Component)) {
  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
    console.log("my mount");
  }

  render() {
    return (
      <span>
        Width: {this.state.width}
        <br />
        Now: {this.state.now.toLocaleString()}
        <br />
        http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/
      </span>
    );
  }
}
