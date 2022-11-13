'use strict';

import './lib/theme.js';

await Promise.all([
  await import('./components/PersonDetails/PersonDetails.js'),
  await import('./components/Counter/Counter.js'),
]);
