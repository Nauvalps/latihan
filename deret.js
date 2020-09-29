

var deretAngka;

deretAngka = () => {
    var x = 11
    var baris = []
    var counter = 1, counterAkhir = 11
    var ganjil = 0
    var genap = 2;
    var result = []
    for(var i = 0; i< x; i++) {
        baris.push(counter)// 1, 3, 3
        // console.log(baris);
        if (i % 2 === 0) {
            counter += genap
            genap++  //3, 
        }
        else{
            counter -= ganjil 
            ganjil++ 
        }
        result.push(baris[i])
    }
    console.log(result.toString());

    var result2 = []
    for(var l = 10; l>= 0; l--) {
        if (l % 2 === 0) {
            counter += genap
            genap++  //3, 
        }
        else{
            counter -= ganjil 
            ganjil++ 
        }
        result2.push(baris[l])
    }
    console.log(result2.toString()); 
}
var c
c = deretAngka();