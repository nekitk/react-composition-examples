import * as React from "react";

export function Summary() {
  return (
    <React.Fragment>
      <section>
        Плюсы:
        <ul>
          <li>Official way (на тот момент)</li>
          <li>Меньше нод в девтулзах (HOC hell)</li>
        </ul>
      </section>
      <section>
        Минусы:
        <ul>
          <li>Неявные зависимости (наличие определенных методов)</li>
          <li>
            Конфликт имён (стэйт, свойства и методы класса) — конфликты стэйта
            отлавливаются
          </li>
        </ul>
      </section>
      <section>
        Пример:
        <ul>
          <li>
            PureRenderMixin (предшественник PureComponent) — подмешивал sCU с
            shallow equal
          </li>
        </ul>
      </section>
      <section>
        Ссылки:
        <ul>
          <li>
            https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html
          </li>
          <li>
            https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750
          </li>
          <li>
            createReactClass in React 16:
            https://reactjs.org/docs/react-without-es6.html
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
}
