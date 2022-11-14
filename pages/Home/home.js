import { defineComponent } from '../../lib/utils.js';

defineComponent({
  templatePath: '/pages/Home/home.html',
  htmlTag: 'p-home',
  define: ({ html }) => {
    return class Home extends HTMLElement {
      constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = html;
      }
    };
  },
});
