import React, { lazy, Suspense, Fragment } from "react";
import ReactDOM from "react-dom";

const CoolWidget = lazy(() => import("./lib/cool-widget"));
const Counter = lazy(() => import("./lib/counter"));

ReactDOM.render(
  <Suspense fallback={<p>loading....</p>}>
    <Counter />
  </Suspense>,
  document.querySelector("#root")
);
