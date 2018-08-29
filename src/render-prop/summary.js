import * as React from "react";

export function Summary() {
  return (
    <React.Fragment>
      <section>
        Пример:
        <ul>
          <li>
            Новый Context API
            <br />
            <pre>
              {`
<Consumer>
  {value => /* render something based on the context value */}
</Consumer>
              `}
            </pre>
          </li>
          <li>
            react-router
            <br />
            https://reacttraining.com/react-router/core/api/Route/render-func
            <br />
            https://reacttraining.com/react-router/core/api/Route/children-func
          </li>
          <li>
            react-apollo
            <br />
            <pre>
              {`
<Query query={GET_DATA}>
  {({ loading, error, data }) => {
    if (loading) return 'Loading...';
    if (error) return 'Error!';

    return (
      <div>{JSON.stringify(data)}</div>
    );
  }}
</Query>
            `}
            </pre>
          </li>
        </ul>
      </section>
      <section>
        Плюсы:
        <ul>
          <li>Явно видно, что откуда берётся</li>
          <li>Динамическая композиция внутри render</li>
          <li>Легко типизировать</li>
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
          <li>
            Render prop hell — куча компонентов, вложенных друг в друга. Пример
            — собирать информацию сразу из нескольких контекстов.
            <pre>
              {`
<ConsumerA>
  {a => (
    <ConsumerB>
      {b => (
        <ConsumerC>
          {c => a + b + c}
        </ConsumerC>
      )}
    </ConsumerB>
  )}
</ConsumerA>
          `}
            </pre>
          </li>
        </ul>
      </section>
      <section>
        Ссылки:
        <ul>
          <li>https://www.youtube.com/watch?v=BcVAq3YFiuc</li>
        </ul>
      </section>
    </React.Fragment>
  );
}
