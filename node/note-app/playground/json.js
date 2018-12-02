const fs  = require('fs')

const note = {
  title: 'Harry',
  body: '82kg'
}

fs.writeFileSync('notes.json', JSON.stringify(note))
const noteString = fs.readFileSync('notes.json')

console.log(typeof noteString, JSON.parse(noteString))
