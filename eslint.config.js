import globals from "globals";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import svelte from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";
import svelteConfig from "./svelte.config.js";

export default tseslint.config(
  js.configs.recommended,
  tseslint.configs.recommended,
  svelte.configs["flat/recommended"],
  prettier,
  svelte.configs["flat/prettier"],
  {
    files: ["**/*.{js,ts,svelte}"],
    ignores: ["**/*.json", "**/*.d.ts", "dist"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: svelteParser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".svelte"],
        svelteConfig,
      },
    },
    rules: {
      indent: [
        "warn",
        2,
        {
          SwitchCase: 1,
          FunctionDeclaration: {
            body: 1,
            parameters: 1,
          },
          FunctionExpression: {
            body: 1,
            parameters: 1,
          },
          CallExpression: {
            arguments: 1,
          },
        },
      ],
      quotes: [
        "warn",
        "double",
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      semi: ["warn", "always"],
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "_",
        },
      ],
      "comma-dangle": ["warn", "always-multiline"],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "svelte/no-at-html-tags": "warn",
    },
  },
);
