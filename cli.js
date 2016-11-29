#!/usr/bin/env node
const meow = require('meow');
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

trashJunk(cli.input[0]);
