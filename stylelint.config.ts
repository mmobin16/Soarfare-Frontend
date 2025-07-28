import type { Config } from "stylelint";

const config: Config = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended",
  ],
  plugins: [
    "stylelint-order",
    "stylelint-declaration-block-no-ignored-properties"
  ],
  rules: {
    // Disallow fixed units (encourage responsive units)
    "unit-disallowed-list": ["px"],

    // Disallow !important
    "declaration-no-important": true,

    // Catch ignored or conflicting shorthand rules
    "plugin/declaration-block-no-ignored-properties": true,

    // Prefer shorthand properties
    "declaration-block-no-redundant-longhand-properties": true,

    // Disallow vendor prefixes (let PostCSS/autoprefixer handle this)
    "property-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,

    // Avoid hardcoded device-specific media queries
    "media-feature-name-disallowed-list": ["min-device-width", "max-device-width"],

    // Require consistent media feature naming
    "media-feature-name-no-vendor-prefix": true,

    // Property order
    "order/properties-order": []
  },
  ignoreFiles: [
    "**/*.js",
    "**/*.ts",
    "**/*.jsx",
    "**/*.tsx"
  ]
};

export default config;
