module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb-base",
        "prettier"
        // 'eslint:recommended',
        // 'plugin:@typescript-eslint/recommended',
        // 'plugin:import/recommended',
        // 'plugin:import/typescript',
        // 'plugin:node/recommended',
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint", "prettier"
    ],
    "rules": {
        "prettier/prettier": [
            1,
            {
                trailingComma: "es5",
                singleQuote: true,
                semi: true,
            },
        ],
        "no-console": 0,
    },
};
