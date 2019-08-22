<h1 align="center">
  <img src="https://github.com/SocialGouv/linters/raw/master/.github/linter_logo.svg?sanitize=true" width="250"/>
  <p align="center">Linters</p>
  <p align="center" style="font-size: 0.5em">🧹The Social Gouv linters✨</p>
</h1>

<p align="center">
  <a href="https://travis-ci.com/SocialGouv/linters"><img src="https://travis-ci.com/SocialGouv/linters.svg?branch=master" alt="Travis Build Status"></a>
  <a href="https://opensource.org/licenses/Apache-2.0"><img src="https://img.shields.io/badge/License-Apache--2.0-yellow.svg" alt="License: Apache-2.0"></a>
  <a href="https://www.npmjs.com/package/@socialgouv/eslint-config-recommended"><img src="https://img.shields.io/npm/v/@socialgouv/eslint-config-recommended.svg" alt="Npm version"></a> 
</p>

<br>
<br>
<br>
<br>

## Packages

> This is a monorepo which contains many tools and packages:

| Project                       | Package                                                                                                    | Version                                                                                                                                                     | Links                                                                                                                                                       |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **eslint-config-recommended** | [`@socialgouv/eslint-config-recommended`](https://npmjs.com/package/@socialgouv/eslint-config-recommended) | [![latest](https://img.shields.io/npm/v/@socialgouv/eslint-config-recommended/latest.svg)](https://npmjs.com/package/@socialgouv/eslint-config-recommended) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/SocialGouv/linters/blob/master/packages/eslint-config-recommended/README.md) |
| **eslint-config-react**       | [`@socialgouv/eslint-config-react`](https://npmjs.com/package/@socialgouv/eslint-config-react)             | [![latest](https://img.shields.io/npm/v/@socialgouv/eslint-config-react/latest.svg)](https://npmjs.com/package/@socialgouv/eslint-config-react)             | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/SocialGouv/linters/blob/master/packages/eslint-config-react/README.md)       |
| **tslint-config-recommended** | [`@socialgouv/tslint-config-recommended`](https://npmjs.com/package/@socialgouv/tslint-config-recommended) | [![latest](https://img.shields.io/npm/v/@socialgouv/tslint-config-recommended/latest.svg)](https://npmjs.com/package/@socialgouv/tslint-config-recommended) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/SocialGouv/linters/blob/master/packages/tslint-config-recommended/README.md) |

<br>
<br>
<br>
<br>

## Usage

Each linters have their own REAME. **See links above**  
For example, as described in [`eslint-config-recommended` README](https://github.com/SocialGouv/linters/blob/master/packages/eslint-config-recommended/README.md#usage), you can install the config with : 

```sh
$ npm install -D @socialgouv/eslint-config-recommended eslint prettier
# or
$ yarn add -D @socialgouv/eslint-config-recommended eslint prettier
```


Add this to your `.eslintrc.yml` file:

```yaml
extends:
  - "@socialgouv/eslint-config-recommended"
```

or add this to your `.eslintrc.json` file:

```json
{
  "extends": ["@socialgouv/eslint-config-recommended"]
}
```

And enjoy it.

<br>
<br>
<br>
<br>

## Release policy

### Auto

Trigger a custom build on [Travis](https://travis-ci.com/SocialGouv/linters) (in the "More options" right menu) on the `master` branch with a custom config:

```yml
env:
  global:
    - RELEASE=true
```

### Manual

You need an [Github token](https://github.com/settings/tokens/new) to release.

```sh
#
# Bump, push to git and publish to npm
$ yarn lerna publish

#
# Publish the tag change log on the Github Release
$ CONVENTIONAL_GITHUB_RELEASER_TOKEN==************ npx conventional-github-releaser -p angular

#
# You might want to add a Gif to your release to make it groovy ;)
```
