const fs = require('fs');

let addNote = (title, body) => {
    let notes = [];
    let note = {
        title: title,
        body: body
    };

    try {
        notes = JSON.parse(fs.readFileSync('notes-data.json'));
    } catch (e) {}

    if (!notes.map(note => note.title === title)) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
};

let getAll = () => {
    console.log('Getting all notes');
};

module.exports = {
    addNote,
    getAll
};