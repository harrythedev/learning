const yargs = require('yargs')

const notes = require('./notes')

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
}
const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
}

const { title, body } = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv
const command = process.argv[2]

switch(command) {
  case `add`:
    const note = notes.addNote(title, body)
    if (note) {
      console.log('Note Created')
      notes.logNote(note)
    } else {
      console.log('Note title taken')
    }
    break
  case `list`:
    const allNotes = notes.getAll()
    console.log(`Printing ${allNotes.length} note(s).`)
    allNotes.forEach((note) => notes.logNote(note));
    break
  case `read`:
    const noteFound = notes.getNote(title)
    if (noteFound) {
      console.log('Note Found')
      notes.logNote(noteFound)
    } else {
      console.log('Note not found')
    }
    break
  case `remove`:
    const noteRemoved = notes.removeNote(title)
    const message = noteRemoved ? `Note was removed` : `Note not found`
    console.log(message)
    break
  default:
    return console.log(`Command not recognized`)
}
