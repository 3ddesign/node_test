console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv
console.log(argv);

var command = argv._[0];

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.addNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('not recognized')
}


// console.log(_.isString('string'));
// var filtredArray = _.uniq(['test', 1, 'test', 1,2,3,4]);
// var res = notes.addNote();
// console.log(notes.add(2,3));
// var user = os.userInfo();
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
