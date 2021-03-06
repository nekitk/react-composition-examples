import * as React from "react";
import PropTypes from "prop-types";

export class WithNow extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  };

  render() {
    return this.props.children(this.state.now);
  }

  // common logic

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
