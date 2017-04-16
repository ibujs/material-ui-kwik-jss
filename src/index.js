// @flow
import { createStyleSheet } from "jss-theme-reactor";

export function newStyleSheet(ReactComponentName: string, styleSheet: Object) {
  createStyleSheet(ReactComponentName, () => (styleSheet));
}

export function classes(context: Object, styleSheet: Object) {
  return context.styleManager.render(styleSheet);
}

export default {
  newStyleSheet,
  classes,
};
