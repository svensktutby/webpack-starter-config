const webpack = require('webpack');
const DevServer = require('webpack-dev-server');
const chalk = require('chalk');

const {
  HOST,
  PORT,
} = require('./constants');

const getDevConfig = require('./config/webpack.dev');

const compiler = webpack(getDevConfig());

const server = new DevServer(compiler, {
  host:               HOST,
  port:               PORT,
  open:               false,
  publicPath:         '/',
  historyApiFallback: true,
  overlay:            true,
  quiet:              true,
  clientLogLevel:     'info',
  noInfo:             true,
});

server.listen(PORT, HOST, () => {
  console.log(
    `${chalk.greenBright('→ Server listening on')} ${chalk.blueBright(
      `http://${HOST}:${PORT}`,
    )}`,
  );
});
