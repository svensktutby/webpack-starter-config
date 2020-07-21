# webpack-starter-config
Webpack 4 boilerplate starter configuration with babel, scss, and lintig JS and Styles.
Js and css will minify in production mode.

### Installation

```
npm install
```

### Start Dev Server

```
npm start
```

### Build Prod Version

```
npm run build
```

### Features:

* Separated development and production webpack settings you can understand
* ES6
* SCSS
* ESlint
* Stylelint
* CSS Vendor prefixing
* Development server
* Sourcemaps
* SVG sprite generation
* Production optimizations

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `.html` file.
