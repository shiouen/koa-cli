"use strict";

const cli = require('commander');

const { version } = require('./package');

cli.command('init').action((cmd) => {
  console.log('Hello!');
});

cli.version(version, '-v, --version');
cli.parse(process.argv);
