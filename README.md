Asset Management

https://webpack.js.org/guides/asset-management/

### Global Assets

As long as you've installed any external dependencies;
And your configuration has the same loaders defined, you should be good to go.

However, let's say you're locked into your old ways or you have some assets that are shared between multiple components (views, templates, modules, etc.). It's still possible to store these assets in a base directory and even use aliasing to make them easier to import.

### TODO:

1.use aliasing to make import easier: https://webpack.js.org/configuration/resolve/#resolve-alias
2.image loading optimization：
https://github.com/tcoopman/image-webpack-loader.git


### loaders
https://webpack.js.org/concepts/loaders/
[ts-loader](https://github.com/TypeStrong/ts-loader)
&& css-loader
[sass-loader](https://webpack.js.org/loaders/sass-loader/)

### for(sass && scss, use) Sass-loader:

* Install
npm install sass-loader node-sass webpack --save-dev
The sass-loader requires node-sass and webpack as peerDependency. Thus you are able to control the versions accurately.

### for ES2015 /ES2016 /ES2017
https://webpack.js.org/loaders/babel-loader/
* Install
npm install babel-loader babel-core babel-preset-env webpack

echo '{ "presets": ["env"] }' > .babelrc
http://babeljs.io/docs/plugins/preset-env/

### for jsx, react
http://babeljs.io/docs/plugins/preset-react/
npm install --save-dev babel-cli babel-preset-react
echo '{ "presets": ["env", "react"] }' > .babelrc

### see more loaders
https://github.com/webpack-contrib/awesome-webpack#loaders