var fs = require('fs');

// data yang akan ditulis ke dalam file
var data = `JavaScript
Python
Ruby`;

try {
    // menulis data ke dalam file
    fs.writeFileSync('./data.txt', data);
    console.log('File data.txt telah terbuat di direktori aktif');
} catch (error) {
    if (error) console.error(error);
}