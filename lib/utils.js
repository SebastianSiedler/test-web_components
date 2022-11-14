'use strict';

/**
 * @type {DefineComponent}
 */
export const defineComponent = async (param) => {
  const { templatePath, define } = param;

  /* Get HTML file content stream */
  const text = await getTextFromFile(templatePath);

  /* custom element */
  const customElementConstructor = define({ html: text });

  /* Autogenerate Name of the custom element */
  const htmlTag = PascalCaseToKebabCase(customElementConstructor.name);

  /* Try to register the component */
  if (!!customElements.get(htmlTag)) {
    throw `htmlTag "${htmlTag} is already defined. Choose a different name`;
  }

  /* register custom element globally */
  customElements.define(htmlTag, customElementConstructor);
};

/**
 *
 * @param {string} path
 * @returns
 */
export const getTextFromFile = async (path) => {
  const stream = await fetch(path);
  const text = await stream.text();
  return text;
};

/**
 *
 * "MyVar" -> "my-var"
 * @param {string} str
 * @returns
 */
const PascalCaseToKebabCase = (str) => {
  return str.replace(/([a-z0–9])([A-Z])/g, '$1-$2').toLowerCase();
};
