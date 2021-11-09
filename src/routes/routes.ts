import { lazy } from "react";

type JSXComponet = () => JSX.Element;
interface Route {
  path: string;
  Component: JSXComponet | React.LazyExoticComponent<JSXComponet>;
  name: string;
  children?: Route[];
}

const LazyPage1 = lazy(
  () =>
    import(/*webpackChunkName: "LazyPage1"*/ "../01-lazyload/pages/LazyPage1")
);
const LazyPage2 = lazy(
  () =>
    import(/*webpackChunkName: "LazyPage2"*/ "../01-lazyload/pages/LazyPage2")
);
const LazyPage3 = lazy(
  () =>
    import(/*webpackChunkName: "LazyPage3"*/ "../01-lazyload/pages/LazyPage3")
);

export const routes: Route[] = [
  {
    path: "/lazy",
    Component: LazyPage1,
    name: "Lazypage- 1",
  },
  {
    path: "/lazy2",
    Component: LazyPage2,
    name: "Lazypage- 2",
  },
  {
    path: "/lazy3",
    Component: LazyPage3,
    name: "Lazypage- 3",
  },
];