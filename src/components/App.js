import { Component } from "../core/Component";
import { Form } from "./Form";
import { List } from "./List";
import { ListItem } from "./ListItem";

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: [],
    };

    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "app";
    const $h1 = document.createElement("h1");
    $h1.className = "total-amount";
    $h1.textContent = "Итого: ";
    const $total = document.createElement("span");
    this.$total = $total;
    this.$total.textContent = `$${this.state.total}`;

    $h1.append($total);
    this.$rootElement.append($h1);

    const donateForm = new Form();
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
  }

  onItemCreate(amount) {
    // ...
  }
}
