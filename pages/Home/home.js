import { defineComponent } from '../../lib/utils.js';

defineComponent({
  templatePath: '/pages/Home/home.html',
  define: ({ html }) => {
    return class PageHome extends HTMLElement {
      constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = html;
      }
    };
  },
});
