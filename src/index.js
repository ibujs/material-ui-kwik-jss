// @flow
import { createStyleSheet } from "jss-theme-reactor";

export function newStyleSheet(ReactComponent: string, styleSheet: Object) {
  createStyleSheet(ReactComponent, () => (styleSheet));
}

export function classes(context: Object, styleSheet: Object) {
  return context.styleManager.render(styleSheet);
}

export default {
  newStyleSheet,
  classes,
};
