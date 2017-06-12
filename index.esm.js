import { createStyleSheet } from 'jss-theme-reactor';

function newStyleSheet(ReactComponentName, styleSheet) {
    createStyleSheet(ReactComponentName, function () { return (styleSheet); });
}
function classes(context, styleSheet) {
    return context.styleManager.render(styleSheet);
}
module.exports = {
    newStyleSheet: newStyleSheet,
    classes: classes
};
//# sourceMappingURL=index.esm.js.map
