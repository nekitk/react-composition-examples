import * as React from "react";
import { withNow } from "./with-now";

@withNow(2000)
export default class MyComponent extends React.Component {
  state = {
    greeting: "Hi!"
  };

  componentDidMount() {
    console.log("my mount");
  }

  render() {
    return (
      <div>
        {this.state.greeting} Now: {this.state.now.toLocaleString()}
        * Не работает с функциональными компонентами
        <br />
        * Обратный вариант невозможен, т.к. нет множественного наследования
        (`class MyComponent extends WithNow, WithWidth`)
      </div>
    );
  }

  // @public
  ping() {
    return true;
  }
}