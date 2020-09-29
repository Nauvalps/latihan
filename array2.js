var barang = [
    ['A001', 'Spidol', 3500],
    ['A002', 'Pensil', 1500],
    ['A003', 'Penghapus', 2000]
];

console.log('KODE \t NAMA BARANG \t HARGA');
console.log('---- \t ----------- \t -----');
for(let i=0; i<barang.length; i++){
    for(let j=0; j<barang[i].length; j++){
        process.stdout.write(barang[i][j].toString());
        if (j<barang[i].length-1) {
            process.stdout.write(' \t ');
        }
        // console.log(barang[i].length);
    }
    console.log(); // ganti baris
}