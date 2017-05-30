// Import jss-theme-reactor.
import { createStyleSheet } from "jss-theme-reactor";

// Create a function to define a new stylesheet. Takes in a React Component and a stylesheet.
function newStyleSheet(ReactComponentName: string, styleSheet: Object) {
  // Create a stylesheet via theme-reactor, passing the React component and the JSS stylesheet.
  createStyleSheet(ReactComponentName, () => (styleSheet));
}

// Write an interface defining a jss-theme-reactor styleManager inside a React Context.
interface MinimalStyleManager { render: Function } // eslint-disable-line no-undef

// Write another interface defining the React Context with a style manager.
// eslint-disable-next-line no-undef
interface ReactContextWithStyleManager { styleManager: MinimalStyleManager }

// Returns an object of the inline classes. To be called only once per component.
function classes(context: ReactContextWithStyleManager, styleSheet: Object) {
  return context.styleManager.render(styleSheet);
}

module.exports = {
  newStyleSheet,
  classes,
};
