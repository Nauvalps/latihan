var readline = require('readline-sync');

var a = parseFloat(readline.question('Masukkan nilai a: '))
var b = parseFloat(readline.question('Masukkan nilai b: '))
var c;

if (b === 0) {
    console.log('Kesalahan: Nilai b tidak boleh nol');
    Process.exit(1);
}

c = a / b;
console.log(`${a} / ${b} = ${c}`);
