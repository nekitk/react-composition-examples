import * as React from "react";
import ReactDOM from "react-dom";

export function withWidth(Component) {
  class WithWidth extends React.Component {
    state = {
      width: undefined
    };

    componentRef;

    componentDidMount() {
      this.handleResize();
      window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
    }

    render() {
      const { forwardedRef, ...props } = this.props;

      this.componentRef = forwardedRef || React.createRef();

      return (
        <Component
          {...this.props}
          width={this.state.width}
          ref={this.componentRef}
        />
      );
    }

    handleResize = () => {
      const node = ReactDOM.findDOMNode(this.componentRef.current);
      this.setState({ width: node.offsetWidth });
    };
  }

  return React.forwardRef((props, ref) => {
    return <WithWidth {...props} forwardedRef={ref} />;
  });
}
