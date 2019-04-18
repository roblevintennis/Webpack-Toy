import React, { lazy, Suspense, Fragment } from "react";
import ReactDOM from "react-dom";

const CoolWidget = lazy(() => import("./lib/cool-widget"));
const Counter = lazy(() => import("./lib/counter"));
const PrimaryButton = lazy(() => import("./lib/theme/button-primary.jsx"));
const SecondaryButton = lazy(() => import("./lib/theme/button-secondary.jsx"));

ReactDOM.render(
  <Suspense fallback={<p>loading....</p>}>
    <PrimaryButton />
    <SecondaryButton />
  </Suspense>,
  document.querySelector("#root")
);
