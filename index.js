'use strict';

import './lib/theme.js';

await Promise.all([
  /* COMPONENTS */
  await import('./components/PersonDetails/PersonDetails.js'),
  await import('./components/Counter/Counter.js'),

  /* PAGES */
  await import('./pages/Home/home.js'),
]);
