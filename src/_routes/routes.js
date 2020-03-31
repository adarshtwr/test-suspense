import React, { lazy, Suspense } from "react";
import { Router, Route, Switch } from "react-router-dom";

import { history } from "../_helpers";

const HomePage = lazy(() => import("../HomePage/HomePage"));
import LoadingScreen from "../LoadingScreen/LoadingScreen";

export class Routes extends React.Component {
  render() {
    return (
      <Suspense fallback={<LoadingScreen />}>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Router>
      </Suspense>
    );
  }
}
