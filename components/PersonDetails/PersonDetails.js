import { defineComponent } from '../../lib/utils.js';

defineComponent({
  templatePath: '/components/PersonDetails/PersonDetails.html',
  define: ({ html }) => {
    return class PersonDetails extends HTMLElement {
      constructor() {
        super();

        this.attachShadow({ mode: 'open' });
      }

      connectedCallback() {
        console.log('mounted "PersonDetails"');
        this.shadowRoot.innerHTML = html;

        const style = document.createElement('style');
        style.textContent = `
          div { padding: 10px; border: 1px solid gray; width: 200px; margin: 10px; }
          h2 { margin: 0 0 10px; }
          ul { margin: 0; }
          p { margin: 10px 0; }
          `;

        this.shadowRoot.appendChild(style);
      }
    };
  },
});
