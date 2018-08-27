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
