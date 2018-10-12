import * as React from "react";
import { Hover, Counter } from "react-powerplug";
import epitath from "epitath";

export default epitath(function*() {
  const hover = yield <Hover />;
  const counter = yield <Counter initial={0} />;

  return (
    <div {...hover.bind}>
      Hovered: {String(hover.hovered)}
      <br />
      count: {counter.count}
      <button onClick={counter.inc}>+</button>
    </div>
  );
});
