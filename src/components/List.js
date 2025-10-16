import { Component } from "../core/Component";

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donates-container";
    const $donatesContainer = document.createElement("div");
    $donatesContainer.className = "donates-container";
    const $donatesContainerTitle = document.createElement("h2");
    $donatesContainerTitle.className = "donates-container__title";
    $donatesContainerTitle.textContent = "Список донатов";
    $donatesContainer.append($donatesContainerTitle);
    this.$rootElement.append($donatesContainer);
    this.$listContainer = $donatesContainer;
  }

  addItem(item) {}
}
