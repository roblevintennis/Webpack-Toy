import React, { lazy, Suspense, Fragment } from "react";
import ReactDOM from "react-dom";

const CoolWidget = lazy(() => import("./lib/cool-widget"));

ReactDOM.render(
  <Suspense fallback={<p>loading....</p>}>
    <CoolWidget>Webpack Toy Success: </CoolWidget>
  </Suspense>,
  document.querySelector("#root")
);
