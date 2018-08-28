import * as React from "react";

const WithFoo = ({ render, children, component: Component }) => {
  const props = { foo: "bar" };

  return Component ? <Component {...props} /> : (render || children)(props);
};

export default function MyComponent() {
  return (
    <span>
      <WithFoo render={({ foo }) => `Render prop: ${foo}`} />
      <br />
      <WithFoo>{({ foo }) => `FACC: ${foo}`}</WithFoo>
      <br />
      <WithFoo component={FooComponent} />
    </span>
  );
}

class FooComponent extends React.Component {
  render() {
    return `Component prop: ${this.props.foo}`;
  }
}
