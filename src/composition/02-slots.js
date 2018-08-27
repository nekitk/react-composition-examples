import React from "react";

function Layout({ header, aside, main }) {
  return (
    <React.Fragment>
      <header>{header}</header>
      <aside>{aside}</aside>
      <main>{main}</main>
    </React.Fragment>
  );
}

export class MyComponent extends React.Component {
  render() {
    return (
      <Layout
        header={<h1>Header</h1>}
        aside={"Aside"}
        main={<section>Content</section>}
      />
    );
  }
}
