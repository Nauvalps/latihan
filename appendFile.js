var fs  = require('fs');

// data yang akan di tulis ke dalam file
var data = `C++
Java
PHP
Ruby`;

// menambah data ke dalam file data.txt
fs.appendFile('./data.txt', data, function (error){
    if (error) console.error(error);
    console.log('Proses penambahan data ke data.txt sukses');
})