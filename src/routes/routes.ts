import { lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponet = () => JSX.Element;
interface Route {
  path: string;
  Component: JSXComponet | React.LazyExoticComponent<JSXComponet>;
  name: string;
  children?: Route[];
}

//const LazyPage1 = lazy(  () =>   import(/*webpackChunkName: "LazyPage1"*/ "../01-lazyload/pages/LazyPage1"))

export const routes: Route[] = [
  {
    path: "/lazyLoad-Nested",
    Component: lazy(
      () =>
        import(
          /*webpackChunkName: "lazyLoad"*/ "../01-lazyload/layout/LazyLayout"
        )
    ),
    name: "lazyLoad",
  },
  {
    path: "/No-lazyLoad",
    Component: NoLazy,
    name: "No-lazyLoad",
  },
];
