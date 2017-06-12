# silc
silc is a Simple Intuitive Library of Components for web developers. Unlike other "frameworks", silc is intentionally barebones, focusing on functionality over uneccessary styles that you end up overriding later. silc features purposeful and semantic HTML, minimal "vanilla" JavaScript, and SASS variables for easily customizing design. silc currently includes the following modules:

 - [silc core](https://github.com/nickrigby/silc-core)
 - [silc grid](https://github.com/nickrigby/silc-grid)
 - [silc accordion](https://github.com/nickrigby/silc-accordion)
 - [silc nav](https://github.com/nickrigby/silc-nav)
 - [silc offcanvas](https://github.com/nickrigby/silc-offcanvas)

## Installation
After downloading silc, dependencies need to be installed with [yarn](https://yarnpkg.com/lang/en/docs/install/) or [node](https://docs.npmjs.com/getting-started/installing-node).

`npm install` or `yarn install`

## Running the local dev server
The local development server — using [Webpack 2](webpack.js.org) — can be started with:

`npm run serve` or `yarn serve`

## Overriding styles
Each silc module contains a number of default SASS variables that can be easily overridden by adding the variable to the [silc/_overrides.scss file](src/scss/silc/_overrides.scss). For example, to add your own breakpoints, you would create the following variable in the overrides file:

```scss
$silc-core--breakpoints (
    ('sm', '400px'),
    ('md', '600px'),
    ('lg', '1000px'),
    ('xl, '1400px')
);
```

## Building for production
To build your code for production, run the following:

`npm run build:production` or `yarn build:production`
