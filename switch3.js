var readline = require('readline-sync');
var a = parseFloat(
    readline.question('Masukkan bilangan rill (1.0..1.5): ')
);

switch (a) {
    case 1.0:
        console.log('1.0');
        break;
    case 1.1:
        console.log('1.1');
        break;
    case 1.2:
        console.log('1.2');
        break;
    case 1.3:
        console.log('1.3');
        break;
    case 1.4:
        console.log('1.4');
        break;
    case 1.5:
        console.log('1.5');
        break;
    default:
        console.log('Nilai yang dimasukkan di luar rentang');
}