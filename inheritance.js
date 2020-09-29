var readline = require('readline-sync');

class Persegi {
    constructor(p,l){
        // mendefinisikan properti
        this.panjang = p;
        this.lebar = l;
    }

    luas(){
        return this.panjang * this.lebar;
    }

    cetakProperti(){
        console.log(`Panjang\t: ${this.panjang}`);
        console.log(`Lebar\t: ${this.lebar}`);
    }
}

class PersegiWarna extends Persegi {
    constructor(p,l,w) {
        super(p,l); // memanggil konstruktor kelas segitiga
        this.warna = w;
    }

    cetakProperti(){
        super.cetakProperti(); // memanggil Persegi.cetakProperti()
        console.log(`warna\t: ${this.warna}`);
    }
}

// membaca data panjang dan lebar
var p = parseFloat(readline.question('Masukkan panjang: '));
var l = parseFloat(readline.question('Masukkan lebar: '));

// membuat objek dari kelas PersegiWarna
var obj = new PersegiWarna(p,l,'Hijau');
obj.cetakProperti();

// memanggil metode luas()
console.log(`luas\t: ${obj.luas()}`);