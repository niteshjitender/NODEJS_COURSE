const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My name is Jitender')
fs.appendFileSync('notes.txt',"\nAppend this to the file")