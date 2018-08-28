import React from "react";
import PropTypes from "prop-types";

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.exact({
      header: PropTypes.node,
      aside: PropTypes.node,
      main: PropTypes.node
    })
  };

  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <header>{children.header}</header>
        <aside>{children.aside}</aside>
        <main>{children.main}</main>
      </React.Fragment>
    );
  }
}

export class MyComponent extends React.Component {
  render() {
    return (
      <Layout>
        {{
          header: <h1>Header</h1>,
          aside: "Aside",
          main: <section>Content</section>
        }}
      </Layout>
    );
  }
}
