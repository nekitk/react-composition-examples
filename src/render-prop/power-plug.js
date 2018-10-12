import * as React from "react";
import { Compose, Hover, Counter } from "react-powerplug";

export default class MyComponent extends React.Component {
  render() {
    return (
      <Compose components={[Hover, <Counter initial={0} />]}>
        {(hover, counter) => (
          <div {...hover.bind}>
            Hovered: {String(hover.hovered)}
            <br />
            count: {counter.count}
            <button onClick={counter.inc}>+</button>
          </div>
        )}
      </Compose>
    );
  }
}
