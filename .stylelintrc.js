module.exports = {
  root: true,
  plugins: ['stylelint-scss'],
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier'
  ],
  rules: {
    'declaration-colon-space-before': 'never',
    'declaration-colon-space-after': 'always-single-line',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['include', 'mixin']
      }
    ],
    'rule-empty-line-before': ['never']
  }
}
