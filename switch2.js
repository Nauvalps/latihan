var readline = require('readline-sync');

var a = parseInt(readline.question('Masukkan bilangan bulat: '));

switch (a) {
    case 1: console.log('Satu');
    case 2: console.log('Dua');
    case 3: console.log('Tiga');
    case 4: console.log('Empat');
    case 5: console.log('Lima');
    default:
        console.log('Selain 1,2,3,4, dan 5');
}