Silc is a **S**imple, **I**ntuitive, **L**ibrary of **C**omponents for web developers. Unlike other "frameworks", silc is intentionally bare bones, focusing on functionality over uneccessary styles that you end up overriding later. Silc features purposeful and semantic HTML, minimal "vanilla" JavaScript, and SASS variables for easy customization.

## Modules
Silc contains a number of leightweight modules. Since silc modules are truly modular, any single silc module can be included in your own project using [npm](https://www.npmjs.com/).

### Grid
The grid module is a flexbox-based grid system, that allows you to create classes based on your own custom breakpoints.

[grid documentation](https://github.com/nickrigby/silc-grid) | [grid npm package](https://www.npmjs.com/package/silc-grid)

### Accordion
The accordion module has options for pure accordions, accordions that become tabs, and pure tabs.

[accordion documentation](https://github.com/nickrigby/silc-grid) | [accordion npm package](https://www.npmjs.com/package/silc-accordion)

### Offcanvas
The offcanvas module allows you to place content outside of the viewport, with the ability to trigger its visibility. The offcanvas module also has an option for basic modals.

[offcanvas documentation](https://github.com/nickrigby/silc-offcanvas) | [offcanvas npm package](https://www.npmjs.com/package/silc-offcanvas)

### Nav
The nav module allows you to create nested, multi-level navigations, which is collapsed by default — to work on smaller screens — with the ability to expand to a horizontal navigation on larger screens.

[nav documentation](https://github.com/nickrigby/silc-nav) | [nav npm package](https://www.npmjs.com/package/silc-nav)

### Utilities
The utilities module contains a number of utilities for hiding/showing content and more.

[utilities documentation](https://github.com/nickrigby/silc-utilities) | [utilities npm package](https://www.npmjs.com/package/silc-utilities)

### Core
The core module contains a number of SASS variables/mixins/functions, and a JavaScript classes that are dependencies for other silc modules.
[core documentation](https://github.com/nickrigby/silc-core) | [core npm package](https://www.npmjs.com/package/silc-core)

## Architecture
Silc uses [webpack 2](https://webpack.js.org/) to bundle and compile assets, [BEM](http://getbem.com/) for modular class definitions, [TypeScript](https://www.typescriptlang.org/) for modern "vanilla" JavaScript, and [SASS](http://sass-lang.com/) for extensible CSS.

## Installation and configuration
View the [Github project](https://github.com/nickrigby/silc) for detailed instructions on installation and configuration. 
