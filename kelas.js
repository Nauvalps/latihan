var readline = require('readline-sync');
class Segitiga {
    constructor(a,t) {
        // mendefinisikan properti alas dan tinggi
        this.alas = a;
        this.tinggi = t;
    }

    luas(){
        return this.alas * this.tinggi / 2;
    }
}
// membaca data alas dan tinggi 
var a = parseFloat(readline.question('Masukkan alas: '));
var t = parseFloat(readline.question('Masukkan tinggi: '));

// membuat objek dari kelas segitiga
var obj = new Segitiga(a,t);

console.log(`obj.alas\t: ${obj.alas}`);
console.log(`obj.tinggi\t: ${obj.tinggi}`);
console.log(`obj.luas()\t: ${obj.luas()}`);