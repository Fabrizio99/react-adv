import { JsxElement } from "typescript";
import { Lazyload1, Lazyload2, Lazyload3 } from "../01-lazyload/pages";

interface Route {
  to: string;
  path: string;
  Component: () => JSX.Element;
  name: string;
}
export const routes: Route[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    Component: Lazyload1,
    name: "Lazy-1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: Lazyload2,
    name: "Lazy-2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    Component: Lazyload3,
    name: "Lazy-3",
  },
];
