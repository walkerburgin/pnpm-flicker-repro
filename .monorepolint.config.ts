module.exports = {
  rules: {
    ":package-script": {
      options: {
        scripts: {
          "clean": "rm -rf dist",
          "build": "tsc -p src/",
        }
      },
      excludePackages: [],
    },
    ":package-order": true,
    ":alphabetical-dependencies": true,
    ":alphabetical-scripts": true,
  }
};
