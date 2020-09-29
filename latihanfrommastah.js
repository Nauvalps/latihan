var readline = require('readline-sync');
function buyEgg(tgl,duit = 0) {
    var telor = 12;
    var cekPrima = 0;
    const hargaSatutelor = 2500;
    for (let i= 2; i<=tgl; i++) {
        // console.log(i);
        if (tgl % i == 0) {
            cekPrima++;
        } 
    }
    // cek bil prima
    if (cekPrima == 1) {
        let bonusTelor = 2;
        var SumPrima;
        if (duit % hargaSatutelor === 0) {
            var getTelor = duit / hargaSatutelor;
            var SumbonusTelor = getTelor/telor*bonusTelor;
            SumPrima = getTelor+SumbonusTelor;
            console.log("Telor yg didapat jika tgl prima beserta bonus: "+SumPrima);
        }else if(duit >= hargaSatutelor){
            getTelor = duit / hargaSatutelor;
            console.log("telor yg dibeli jika tgl prima: "+Math.round(getTelor));
        }else{
            console.log("duit anda kurang");
        }
    }
    // cek bil ganjil 
    if (tgl % 2 === 1) {
        var SumGanjil
        let bonus = 3;
        if (duit % hargaSatutelor === 0) {
            var getTelorBilGanjil = duit / hargaSatutelor;
            var SumbonusTelorBilGanjil = getTelorBilGanjil/telor*bonus;
            SumGanjil = getTelorBilGanjil+SumbonusTelorBilGanjil;
            console.log("Telor yg didapat jika tgl ganjil beserta bonus: "+SumGanjil);   
        }else if(duit >= hargaSatutelor){
            getTelorBilGanjil = duit / hargaSatutelor;
            console.log("telor yg dibeli jika tgl ganjil bukan prima: "+Math.round(getTelorBilGanjil));
        }else{
            console.log("duit anda kurang");
        }
    }else{
        console.log("not tgl ganjil");
    }
    // cek tgl kelipatan 5
    if (tgl % 5 === 0) {
        var kelipatan;
        var sum;
        var bonusKelipatan = SumbonusTelorBilGanjil + SumbonusTelor;
        const getTelorKelipatan = duit / hargaSatutelor; 
        if (duit % hargaSatutelor === 0) {
            if (bonusKelipatan % 2 === 0) {
                if (SumbonusTelor == null) {
                    kelipatan = 10;
                    sum = SumbonusTelorBilGanjil * kelipatan;
                    console.log("bonus telor genap: "+sum)    
                }else{
                    kelipatan = 10;
                    sum = bonusKelipatan * kelipatan;
                    console.log("bonus telor genap: "+sum)
                }
            }else{
                if (SumbonusTelor == null) {
                    kelipatan = 5;
                    sum = SumbonusTelorBilGanjil * kelipatan;
                    console.log("bonus telor ganjil: "+sum)    
                }else{
                    kelipatan = 5;
                    sum = bonusKelipatan * kelipatan;
                    console.log("bonus telor ganjil: "+sum)
                }
            }
        }else if(duit >= hargaSatutelor){
            console.log("telor yg dibeli jika tgl kelipatan 5: "+Math.round(getTelorKelipatan));
        }else{
            console.log("duit anda kurang");
        }
    }
}
var tgl = parseFloat(readline.question('Masukkan tanggal: '));
var duit = parseFloat(readline.question('Masukkan duit: '));
buyEgg(tgl, duit);
