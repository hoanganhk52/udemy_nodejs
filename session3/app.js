// const _ = require('lodash');
// const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes.js');
const argv = yargs
    .command('add', 'Add a new note', {
        title: {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        },
        body: {
            describe: 'Body of note',
            demand: true,
            alias: 'b'
        }
    })
    .help()
    .argv;

let command = argv._[0];

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if (note) notes.logNotes(note);
    else console.log('Note title taken');
} else if (command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    if (noteRemoved) console.log('Note removed');
    else console.log('Note title not found');
} else if (command === 'read') {
    let note = notes.getNote(argv.title);
    notes.logNotes(note);
}
else if (command === 'list') {
    let allNotes = notes.getAll();
    allNotes.forEach((note) => {
        notes.logNotes(note);
    });
}
else console.log('Command not recognized');
