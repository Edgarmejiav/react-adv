import React from "react";
import { Link, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

export const Navigation = () => {
  const { path, url } = useRouteMatch();
  return (
    <>
      <h2> Lazy-Layout pages </h2>
      <ul>
        <li>
          <Link to={`${url}/lazy1`}> Lazy page 1 </Link>
        </li>
        <li>
          <Link to={`${url}/lazy2`}> Lazy page 2 </Link>
        </li>
        <li>
          <Link to={`${url}/lazy3`}> Lazy page 3 </Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${path}/lazy1`}>
          <LazyPage1 />
        </Route>
        <Route exact path={`${path}/lazy2`}>
          <LazyPage2 />
        </Route>
        <Route exact path={`${path}/lazy3`}>
          <LazyPage3 />
        </Route>
        <Redirect to={`${url}/lazy1`} />
      </Switch>
    </>
  );
};
