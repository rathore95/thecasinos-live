const fs = require('fs');

const casinos = JSON.parse(fs.readFileSync('casinos.json', 'utf8'));
const output = 'window.CASINOS_DATA = ' + JSON.stringify(casinos, null, 2) + ';';
fs.writeFileSync('casinos-data.js', output);
console.log('Build complete: Generated casinos-data.js with ' + casinos.length + ' casinos');
