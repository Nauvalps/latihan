var fs = require('fs');

console.log('Persiapan membaca file...');

fs.readFile('data.txt', function (err, data) {
    if (err) return console.error(err);
    console.log('\nIsi file: ');
    console.log(data.toString());
});

console.log('File selesai dibaca...');