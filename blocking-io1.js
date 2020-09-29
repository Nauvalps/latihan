var fs = require('fs');

console.log('Persiapan membaca file...');

var data = fs.readFileSync('data.txt');
console.log('\nIsi file: ');
console.log(data.toString());

console.log('File selesai dibaca...');
