"use strict";

await Promise.all([
  await import("./components/PersonDetails/PersonDetails.js"),
  await import("./components/Counter/Counter.js"),
]);
