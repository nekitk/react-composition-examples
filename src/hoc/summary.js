import * as React from "react";

export function Summary() {
  return (
    <React.Fragment>
      <section>
        Плюсы:
        <ul>
          <li>Простая и разнообразная композиция, т.к. HOC — функция</li>
          <li>
            Оптимизация ререндеров обёрнутых компонентов: можно делать scu по
            пропам из HOC-ов
          </li>
          <li>
            Оптимизация самих HOC-ов (например, connect — "pure" по умолчанию)
          </li>
        </ul>
      </section>
      <section>
        Минусы:
        <ul>
          <li>Неявные зависимости (откуда какой проп)</li>
          <li>
            Бойлерплэйт: прокинуть пропсы, прокинуть рефы, добавить название для
            девтулзов, склонировать статические методы
          </li>
          <li>
            Конфликт имен пропсов, особенно если много хоков — без ворнинга в
            отличие от миксинов
          </li>
          <li>
            Типизация (пропсы HOC-ов не должны попадать в тип экспортируемого
            компонента, но при этом быть видны внутри).
          </li>
          <li>
            Не стоит применять динамически (например, в рендере): каждый раз
            будет создаваться новый компонент, reconciler увидит, что компонент
            изменился, и заменит в DOM-е целиком
          </li>
          <li>
            Не копируются статические методы класса
            <br />
            https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over
          </li>
          <li>Много HOC-ов негативно влияют на производительность</li>
        </ul>
      </section>
      <section>
        Пример:
        <ul>
          <li>withRouter</li>
          <li>connect — HOC с параметрами</li>
        </ul>
      </section>
      <section>
        Ссылки:
        <ul>
          <li>Критика HOC-ов: https://www.youtube.com/watch?v=BcVAq3YFiuc</li>
        </ul>
      </section>
    </React.Fragment>
  );
}
