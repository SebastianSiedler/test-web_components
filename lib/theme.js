'use strict';

const body = document.getElementsByTagName('body')[0];

const getIsDarkQuery = () => window.matchMedia('(prefers-color-scheme: dark)');

getIsDarkQuery().addEventListener('change', (event) => {
  applyTheme(event.matches, body);
});

/**
 *
 * @param {boolean} dark
 * @param {HTMLElement} element
 */
export const applyTheme = (dark, element) => {
  const DARK_THEME = 'theme--dark';
  const DEFAULT_THEME = 'theme--default';

  element.classList.add(dark ? DARK_THEME : DEFAULT_THEME);
  element.classList.remove(dark ? DEFAULT_THEME : DARK_THEME);
};

applyTheme(getIsDarkQuery().matches, body);
