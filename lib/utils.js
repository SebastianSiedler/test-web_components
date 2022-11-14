'use strict';

/**
 * @param {Object} param Object - object params
 * @param {string} param.templatePath - path to the PATH.html file for the component
 * @param {string} param.htmlTag - the name ob the reusable componenent
 * @param {function({html:string}):CustomElementConstructor} param.define
 */
export const defineComponent = async (param) => {
  const { templatePath, define, htmlTag } = param;

  /* Get HTML file content stream */
  const text = await getTextFromFile(templatePath);

  /* Try to register the component */
  if (!!customElements.get(htmlTag)) {
    throw `htmlTag "${htmlTag} is already defined. Choose a different name`;
  }
  customElements.define(htmlTag, define({ html: text }));
};

export const getTextFromFile = async (path) => {
  const stream = await fetch(path);
  const text = await stream.text();
  return text;
};
