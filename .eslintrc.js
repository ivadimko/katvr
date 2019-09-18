const {resolve} = require('./next.aliases');

module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": [
    "airbnb",
    "plugin:@typescript-eslint/recommended"
  ],
  "plugins": [
    "@typescript-eslint",
    "react-hooks"
  ],
  "globals": {
    "document": true,
    "window": true,
    "process": true,
    "IntersectionObserver": true
  },
  "rules": {
    // typescript
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/camelcase": ["error", { "properties": "never" }],
    "no-unused-expressions": ["warn", {
      "allowShortCircuit": true,
      "allowTernary": true
    }],
    "@typescript-eslint/no-unused-vars": ["error"],

    // react
    "react/jsx-filename-extension": ["warn", {
      "extensions": [".jsx", ".tsx"]
    }],
    "react/jsx-props-no-spreading": ["off"],
    "react/prop-types": "off", // Incompatible with TS props type?
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "hrefLeft", "hrefRight" ],
      "aspects": [ "invalidHref", "preferButton" ]
    }],
    "react-hooks/rules-of-hooks": "error",
    "react/no-danger": "off",

    // rest
    "no-console": ["error"],
    "no-underscore-dangle": ["error", { "allow": ["__NEXT_DATA__"] }],
    "no-nested-ternary": "off",
    "global-require": "off",
    "import/prefer-default-export": "off", // Allow single Named-export
    "import/no-unresolved": ["error", { ignore: ['\.svg?'] }],
    "max-len": ["error", 80, {
      "ignoreStrings": true
    }],
    "arrow-parens": ["error", "always"],
  },
  settings: {
    'import/resolver': {
      "alias": {
        "map": [
          ...Object.entries(resolve.alias)
        ],
        "extensions": resolve.extensions
      },
      "node": {
        "extensions": resolve.extensions
      }
    }
  }
};
