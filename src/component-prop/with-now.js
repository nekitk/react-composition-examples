import * as React from "react";
import PropTypes from "prop-types";

export class WithNow extends React.Component {
  static propTypes = {
    component: PropTypes.func
  };

  render() {
    const Component = this.props.component;

    return <Component now={this.state.now} />;
  }

  // Common logic

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

  updateTime = () => {
    this.setState({ now: new Date() });
  };
}
