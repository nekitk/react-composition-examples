import * as React from "react";
import hoistStatics from "hoist-non-react-statics";

export const withNow = (accuracy = 1000) => Component => {
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
      this.interval = setInterval(this.updateTime, accuracy);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    updateTime = () => {
      this.setState({ now: new Date() });
    };
  }

  const Enhanced = React.forwardRef((props, ref) => {
    return <WithNow {...props} forwardedRef={ref} />;
  });

  hoistStatics(Enhanced, Component);

  return Enhanced;
};
