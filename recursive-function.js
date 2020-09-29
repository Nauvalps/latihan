function lakukanPembelian(uang, beli) {

    if (!beli.includes("Minyak")) {
        uang -= 25000;
        beli.push('Minyak');
    }else if (!beli.includes("Gula")) {
        uang -= 15000;
        beli.push('Gula');
    }else if (!beli.includes("Telur")) {
        uang -= 27000;
        beli.push('Telur');
    }else{
        return uang;
    }

    return lakukanPembelian(uang, beli);
}

var uang = 100000; beli = [];
var sisaUang = lakukanPembelian(uang, beli);
console.log(sisaUang);