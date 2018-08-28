import * as React from "react";

export function Summary() {
  return (
    <React.Fragment>
      <section>
        Плюсы:
        <ul>
          <li>Можно оптимизировать ререндеры проп-компонента</li>
          <li>
            Можно передавать общие компоненты (китовые кнопки:
            component=UIButton, componentProps=color: green)
          </li>
        </ul>
      </section>
      <section>
        Минусы:
        <ul>
          <li>Менее понятно, откуда в компоненте берутся пропсы</li>
          <li>
            Неудобно прокидывать дополнительные пропсы компоненту — надо
            добавлять отдельный проп с дополнительными пропсами
            (componentProps). Либо можно переделать на renderProp (inline
            stateless component).
          </li>
          <li>
            Сложно сделать компонент с динамическим контентом: нужно либо
            пересоздавать компонент динамически (вызовет ремаунтинг), либо
            прокидывать доп. пропсы (component, componentProps), либо замыкать
            компонент на родителя (см. ниже). Пример: кнопка «Удалить» или
            кнопка «Удалить 10»
          </li>
          <li>
            Если прокидываемый компонент замкнут на родителя, провайдер нельзя
            делать Pure (аналогично render props).
            <code>this.Button = () => `Удалить this.state.count`</code>
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
}
