'use strict';
import { applyTheme } from '../../lib/theme.js';
import { defineComponent } from '../../lib/utils.js';

defineComponent({
  templatePath: '/components/Counter/Counter.html',
  define: ({ html }) => {
    return class MyCounter extends HTMLElement {
      constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = html;

        shadowRoot.getElementById('usetheme').classList.add('theme--default');

        window
          .matchMedia('(prefers-color-scheme: dark)')
          .addEventListener('change', (event) => {
            applyTheme(event.matches, shadowRoot.getElementById('usetheme'));
          });

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
