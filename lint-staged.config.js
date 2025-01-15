const buildEslintCommand = (filenames) => `eslint --fix ${filenames.join(" ")}`;

const buildPrettierCommand = (filenames) =>
  `prettier ${filenames.join(" ")} -w`;

export default {
  "!(dist)/**/*.{js,ts,svelte}": [buildEslintCommand],
  "!(dist)/**/*.{js,ts,svelte,md,html,css}": [buildPrettierCommand],
};
