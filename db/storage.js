// requirements
const util = require("util");
const fs = require("fs");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Storage {
    constructor() {
        this.lastId = 0;
    }

    read() {
        return readFileAsync("db/db.json", "utf8");
    }

    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    }

    // Sends back as an empty array if no notes are created into an array
    getNotes() {
        return this.read().then(notes => {
            let parsedNotes;

            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (error) {
                parsedNotes = [];
            }
            return parsedNotes;
        });
    }

    addNote(note) {
        const { title, text } = note;
        // If no title or text is included in the new note; throw this error
        if (!title || !text) {
            throw new Error("'title' and 'text' must contain information")
        }

        //Incrementing the list.lastid and equalling to newnoteid
        const newNote = { title, text, id: ++this.lastId };

        //Grabbing all the notes including the newly added one
        return this.getNotes()
            .then(notes => [...notes, newNotes])
            //newly created function (updatedNotes)
            .then(updatedNotes => this.write(updatedNotes))
            .then(() => newNote);


    }

    removeNote(id) {
        // Get all notes and clears any note with a given id and writes filtered notes
        return this.getNotes()
            .then(notes => notes.filter(note => note.id !== parseInt(id)))
            .then(filteredNotes => this.write(filteredNotes));
    }

}