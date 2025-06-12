import nextPlugin from "@next/eslint-plugin-next";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    plugins: {
      next: nextPlugin
    },
    rules: {
      "next/core-web-vitals": "error"
    },
    ignores: ["node_modules/**", ".next/**", "dist/**", "public/**"]
  },
  {
    files: ["app/**/*.{js,jsx,ts,tsx}"],
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn"
    }
  }
];
