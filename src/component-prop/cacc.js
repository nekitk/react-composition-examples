import * as React from "react";

function WithFoo({ children: Component }) {
  return <Component foo="bar" />;
}

const Content = ({ foo }) => <h1>Content: {foo}</h1>;

export default function MyComponent() {
  return <WithFoo>{Content}</WithFoo>;
}
