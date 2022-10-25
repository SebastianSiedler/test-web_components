'use strict'
import { defineComponent } from "../../lib/utils.js";

defineComponent({
  templatePath: "./components/Counter/Counter.html",
  htmlTag: "my-counter",
  define: (html) => {
    return class Counter extends HTMLElement {
      constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.innerHTML = html;

        this._value = 0;

        this.valueElement = shadowRoot.querySelector('p');
        var incrementButton = shadowRoot.querySelectorAll('button')[0];
        var decrementButton = shadowRoot.querySelectorAll('button')[1];

        incrementButton.onclick = () => this.value++;
        decrementButton.onclick = () => this.value--;
      }

      set value(value) {
        this._value = value;
        this.valueElement.innerText = this._value;
      }

      get value() {
        return this._value;
      }
    };
  },
});