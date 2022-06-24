// const createConfig = require("@titicaca/eslint-config-triple/create-config");

// module.exports = createConfig({
//   type: "frontend",
// });

module.exports = {
  extends: [
    "react-app/jest",
    "@titicaca/eslint-config-triple",
    "@titicaca/eslint-config-triple/frontend",
  ],
};
