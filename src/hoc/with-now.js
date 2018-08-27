import * as React from "react";

export function withNow(Component) {
  class WithNow extends React.Component {
    static displayName = `WithNow(${Component.displayName ||
      Component.name ||
      "Component"})`;

    render() {
      const { forwardedRef, ...props } = this.props;

      return <Component {...props} now={this.state.now} ref={forwardedRef} />;
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

  return React.forwardRef((props, ref) => {
    return <WithNow {...props} forwardedRef={ref} />;
  });
}
