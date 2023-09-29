module.exports = {
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".vue", ".ts", ".d.ts"],
      },
      alias: {
        extensions: [".vue", ".js", ".ts", ".scss", ".d.ts"],
        map: [
          ["@", "./src"],
          ["@/components", "./src/components"],
          ["@/layouts", "./src/layouts"],
          ["@/assets", "./src/assets"],
          ["@/pages", "./src/pages"],
          ["@configs", "./configs"],
          ["@composables", "./composables"],
        ],
      },
    },
  },
};
