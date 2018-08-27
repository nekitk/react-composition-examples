import React from "react";

function Today({ now }) {
  return now.toLocaleString();
}

export class MyComponent extends React.Component {
  state = {
    now: new Date()
  };

  interval;

  componentDidMount() {
    this.interval = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <Today now={this.state.now} />;
  }

  updateTime = () => {
    this.setState({ now: new Date() });
  };

  // @public
  ping() {
    return true;
  }
}
