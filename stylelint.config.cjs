// stylelint.config.cjs
module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-prettier",
    "stylelint-config-tailwindcss"
  ],
  rules: {
    "unit-disallowed-list": ["px"], // Optional: Helps enforce responsiveness
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen"]
      }
    ],
    "no-empty-source": null,
  },
};
