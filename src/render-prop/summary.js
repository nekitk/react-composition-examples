import * as React from "react";

export function Summary() {
  return (
    <React.Fragment>
      <section>
        Плюсы:
        <ul>
          <li>Явно видно, что откуда берётся</li>
          <li>Динамическая композиция внутри render</li>
        </ul>
      </section>
      <section>
        Минусы:
        <ul>
          <li>Сложнее избавиться от лишних ререндеров</li>
          <li>
            Нужно прокидывать данные в хэндлеры, т.к. их нет в пропсах.
            Например, было бы сложно использовать connect через рендерпроп.
          </li>
        </ul>
      </section>
      <section>
        Пример:
        <ul>
          <li>Новый Context API</li>
          <li>react-router</li>
          <li>
            react-apollo
            <br />
            <pre>
              {`<Query query={GET_DATA}>
  {({ loading, error, data }) => {
    if (loading) return 'Loading...';
    if (error) return 'Error!';

    return (
      <div>{JSON.stringify(data)}</div>
    );
  }}
</Query>`}
            </pre>
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
