const _ = require('lodash');
const fs = require('fs');
const argv = require('yargs').argv;
const notes = require('./notes.js');
let command = argv._[0];

if (command === 'add') notes.addNote(argv.title, argv.body);
else if (command === 'list') notes.getAll();
else console.log('Command not recognized');
