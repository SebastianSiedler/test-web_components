'use strict';
import { applyTheme } from '../../lib/theme.js';
import { defineComponent } from '../../lib/utils.js';

defineComponent({
  templatePath: '/components/Counter/Counter.html',
  define: ({ html }) => {
    return class MyCounter extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
      }

      connectedCallback() {
        console.log('mounted');

        if (this.shadowRoot === null) throw 'shadow root not found!';

        this.shadowRoot.innerHTML = html;

        this.shadowRoot
          .getElementById('usetheme')
          ?.classList.add('theme--default');

        const wrapper = this.shadowRoot.getElementById('usetheme');

        window
          .matchMedia('(prefers-color-scheme: dark)')
          .addEventListener('change', (event) => {
            applyTheme(event.matches, wrapper);
          });

        this._value = 0;

        this.valueElement = this.shadowRoot.querySelector('p');
        var incrementButton = this.shadowRoot.querySelectorAll('button')[0];
        var decrementButton = this.shadowRoot.querySelectorAll('button')[1];

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
