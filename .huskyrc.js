module.exports = {
  hooks: {
    'pre-commit': 'yarn lint-staged',
    'pre-push': 'CI=true yarn test',
  },
}
