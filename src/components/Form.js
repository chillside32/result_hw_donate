import { Component } from "../core/Component";

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: "",
    };
    this.$rootElement = document.createElement("form");
    this.$rootElement.className = "donate-form";
    const $label = document.createElement("label");
    $label.className = "donate-form__input-label";
    $label.textContent = "Введите ссуму в $";

    const $input = document.createElement("input");
    $input.className = "donate-form__donate-input";
    $input.name = "amount";
    $input.type = "number";
    $input.max = 100;
    $input.min = 1;
    $input.required = true;
    this.$input = $input;

    $label.append($input);
    this.$rootElement.append($label);

    const $button = document.createElement("button");
    $button.className = "donate-form__submit-button";
    $button.type = "submit";
    $button.textContent = "Задонатить";
    $button.disabled = true;
    this.$rootElement.append($button);
    this.$button = $button;

    this.$input.addEventListener("input", (e) => {
      this.state.amount = e.target.value;
      this.handleInput(e);
    });

    this.$rootElement.addEventListener("submit", (event) => {
      this.handleSubmit(event);
    });
  }

  handleInput(event) {
    if (this.$button) {
      this.$button.disabled = !this.isValid;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid) {
      console.log(this.state.amount);
      this.state.amount = "";
      this.$input.value = "";
      this.$button.disabled = true;
    }
  }

  get isValid() {
    const amount = Number(this.state.amount);
    return !isNaN(amount) && amount >= 1 && amount <= 100;
  }
}
