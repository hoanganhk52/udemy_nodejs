const fs = require('fs');

let fetchNotes = () => {
    try {
        return notes = JSON.parse(fs.readFileSync('notes-data.json'));
    } catch (e) {
        return [];
    }
};

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title: title,
        body: body
    };

    if (!notes.some(note => note.title === title)) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

let removeNote = (title) => {
    let notes = fetchNotes();
    let filteredNote = notes.filter(note => note.title !== title);
    saveNotes(filteredNote);
    return notes.length !== filteredNote.length;
};

let getNote = (title) => {
    let notes = fetchNotes();
    return notes.filter(note => note.title === title);
};

let getAll = () => {
    return fetchNotes();
};
let logNotes = (note) => {
    console.log('---');
    console.log(note.title);
    console.log(note.body);
};


module.exports = {
    addNote,
    getAll,
    removeNote,
    getNote,
    logNotes
};