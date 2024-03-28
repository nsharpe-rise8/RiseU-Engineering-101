module.exports = {
  presets: [
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      { useBuiltIns: "entry", corejs: "2", targets: { node: "current" } },
    ],
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
  plugins: [
    function () {
      return {
        visitor: {
          MetaProperty(path) {
            path.replaceWithSourceString("process");
          },
        },
      };
    },
  ],
};
