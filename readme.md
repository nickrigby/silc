# silk
silk is a super leightweight and customizable collection of HTML components for web developers. silk is not another bootstrap, and is intentionally barebones, providing well structured HTML, minimal JavaScript, and SASS variables for customizing. silk currently includes the following modules:

 - [silk core](https://github.com/nickrigby/silk-core)
 - [silk grid](https://github.com/nickrigby/silk-grid)
 - [silk accordion](https://github.com/nickrigby/silk-accordion)
 - [silk nav](https://github.com/nickrigby/silk-nav)
 - [silk offcanvas](https://github.com/nickrigby/silk-offcanvas)

## Installation
After downloading silk, you will need to install the package dependencies using [yarn](https://yarnpkg.com/lang/en/docs/install/) or [node](https://docs.npmjs.com/getting-started/installing-node).

Using node
`npm install`

Using yarn
`yarn install`

### Creating a SASS entry file
Copy the [index.scss.sample file](src/scss/index.scss.sample) found in `src/scss` to `src/scss/index.scss`. In this file you can control which silk modules you want to include, as well as adding references to any other SCSS files for your project.

### Creating a JavaScript entry file
Copy the [index.ts.sample file](src/js/index.ts.sample) found in `src/js` to `src/js/index.ts`. In this file you can control which silk modules you wanrt to include, as well as adding references to any other JavaScript files/code for your project.

## Running the local dev server
To run the local development server, run

Using node
`npm serve`

Using yarn
`yarn serve`

## Overriding styles
Each silk module contains a number of default SASS variables that can easily be overriden by adding the variable to the [_overrides.scss file](src/scss/silk/_overrides.scss). For example, to add your own breakpoints, you would create the following variable in the overrides file:

```scss
$silk-core--breakpoints (
    ('sm', '400px'),
    ('md', '600px'),
    ('lg', '1000px'),
    ('xl, '1400px')
);
```

## Building for production
To build the code for production, run the following code

Using node
`npm build`

Using yarn
`yarn build`
