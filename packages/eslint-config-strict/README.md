# @socialgouv/eslint-config-strict

> Our strict eslint config.

## Install

```sh
$ npm install -D @socialgouv/eslint-config-strict eslint prettier
# or
$ yarn add -D @socialgouv/eslint-config-strict eslint prettier
```

## Usage

Add this to your `.eslintrc.yml` file:

```yaml
extends:
  - "@socialgouv/eslint-config-strict"
```

or add this to your `.eslintrc.json` file:

```json
{
  "extends": ["@socialgouv/eslint-config-strict"]
}
```

## Suggestions

In some cases, sorting objects keys doesn't make sense. You can disable this rule for some files and directories:

```yaml
overrides:
  - files:
    - src/elements/**/*.js
    rules:
      sort-keys-fix/sort-keys-fix: off
```

```json
{
  "overrides": [
    {
      files: ["src/elements/**/*.js"],
      rules: {
        "sort-keys-fix/sort-keys-fix": "off"
      }
    }
  ]
}
```
