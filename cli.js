#!/usr/bin/env node
const meow = require('meow');
const path = require('path');
const trashJunk = require('trash-junk');

const cli = meow(`
    Usage
        $ trash-junk <path>
    Examples
        $ trash-junk node_modules
`);

if (!cli.input[0]) {
    console.error('You should specify path');
    process.exit(1);
}

const realPath = path.resolve(cli.input[0]);

trashJunk(realPath);
