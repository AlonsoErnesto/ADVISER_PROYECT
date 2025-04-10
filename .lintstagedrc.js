module.exports = {
  '*.{js,ts}': ['oxlint', 'eslint --fix', 'prettier --write'],
  '*.{json,md,yml,yaml}': ['prettier --write'],
};
