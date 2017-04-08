# silk
Silk is a super lightweight and customizable collection of HTML components for web developers. Unlike other frameworks, Silk is intentionally barebones, focusing on functionality over uneccessary styles that you end up overriding later. Silk features purposeful and semantic HTML, minimal "vanilla" JavaScript, and SASS variables for easily customizing design. Silk currently includes the following modules:

 - [silk core](https://github.com/nickrigby/silk-core)
 - [silk grid](https://github.com/nickrigby/silk-grid)
 - [silk accordion](https://github.com/nickrigby/silk-accordion)
 - [silk nav](https://github.com/nickrigby/silk-nav)
 - [silk offcanvas](https://github.com/nickrigby/silk-offcanvas)

## Installation
After downloading Silk, dependencies need to be installed with [yarn](https://yarnpkg.com/lang/en/docs/install/) or [node](https://docs.npmjs.com/getting-started/installing-node).

Node: `npm install`
Yarn: `yarn install`

### Creating a SASS entry file
Copy the [index.scss.sample file](src/scss/index.scss.sample) found in `src/scss` to `src/scss/index.scss`. This file controls the silk modules you want to include, as well as any other style dependencies for your project.

### Creating a JavaScript entry file
Copy the [index.ts.sample file](src/js/index.ts.sample) found in `src/js` to `src/js/index.ts`. This file controls the silk modules you want to include, as well as any other JavaScript files/code dependencies for your project.

## Running the local dev server
The local development server — using [Webpack 2](webpack.js.org) — can be started with:

Node: `npm serve`
Yarn: `yarn serve`

## Overriding styles
Each silk module contains a number of default SASS variables that can be easily overridden by adding the variable to the [_overrides.scss file](src/scss/silk/_overrides.scss). For example, to add your own breakpoints, you would create the following variable in the overrides file:

```scss
$silk-core--breakpoints (
    ('sm', '400px'),
    ('md', '600px'),
    ('lg', '1000px'),
    ('xl, '1400px')
);
```

## Building for production
To build your code for production, run the following:

Node: `npm build`
Yarn: `yarn build`
