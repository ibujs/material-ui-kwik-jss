module.exports = {
  "env": {
    "es6": true,
    "browser": true
  },
  "extends": "eslint-config-airbnb",
  "parser": "typescript-eslint-parser",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "typescript"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "windows"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-unused-vars": [
      "error",
      {
        "vars": "local",
        "args": "after-used"
    }],
    "no-mixed-operators": [
      "off"
    ],
    "no-var": [
      "off"
    ],
    "react/jsx-filename-extension": [
      "off"
    ]
  }
};