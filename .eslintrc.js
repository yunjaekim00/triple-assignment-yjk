// const createConfig = require('@titicaca/eslint-config-triple/create-config')

// module.exports = createConfig({
//   type: 'frontend'
// })

module.exports = {
  extends: [
    "@titicaca/eslint-config-triple/",
    "@titicaca/eslint-config-triple/frontend",
  ],
};
