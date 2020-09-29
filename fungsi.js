var readline = require('readline-sync');

function kali(a, b) {
    return a * b;
}
var a = parseFloat(readline.question('Masukkan nilai a: '));
var b = parseFloat(readline.question('Masukkan nilai b: '));
var c;
// memanggil fungsi dan menampung hasilnya ke variable c
c = kali(a, b);
// console.log(`${a} x ${b} = ${c}`);
console.log(`${a} x ${b} = ${kali(a,b)}`);