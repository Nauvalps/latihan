var fs = require('fs');

// data yang akan ditulis ke dalam file
var data = `JavaScript Is Beautiful
PHP Is Wonderfull`;

// menulis data ke dalam file
fs.writeFile('./data.txt', data, function (err) {
    if (err) console.error(err);
    console.log('File data.txt telah terbuat di direktori aktif');
})