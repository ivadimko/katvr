module.exports = {
  "processors": [
    "stylelint-processor-styled-components"
  ],
  "extends": [
    "@mate-academy/stylelint-config",
    "stylelint-config-styled-components"
  ],
  "rules": {
    'value-keyword-case': ['lower', { ignoreKeywords: ['dummyValue'] }]
  }
};
