"use strict";

const cli = require('commander');

const { version } = require('./package');

cli
  .command('init <project>')
  .action((project, cmd) => {
    console.log(`Hello ${project}`);
  });

cli.version(version, '-v, --version');
cli.parse(process.argv);
