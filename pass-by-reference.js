function increment(a) {
    a.x += 1;
}

// membuat objek
var obj = new Object();
// mendefinisikan properti x pada objek yang telah dibuat
obj.x = 10;
// menampilkan nilai obj.x sebelum dinaikkan
console.log('Sebelum dinaikkan nilainya');
console.log(`obj.x: ${obj.x}`);

// memanggil fungsi increment()
increment(obj);
// menampilkan nilai obj.x setelah dinaikkan
console.log('\nSetelah dinaikkan nilainya');
console.log(`obj.x: ${obj.x}`);