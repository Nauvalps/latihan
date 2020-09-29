class Looping {
    constructor(sikuKanan,sikuKiri,samaSisi,persegiGenapGanjil) {
        this.sikuKanan = sikuKanan
        this.sikuKiri = sikuKiri
        this.samaSisi = samaSisi
        this.persegiGenapGanjil = persegiGenapGanjil
    }

    SegitigaSikuKanan () {
        for(var i = 1; i<= 5; i++) {
            for(var d = 4; d>= i; d--) {
                this.sikuKanan += ' '
            }
            for(var a = 1; a<= i; a++) {
                this.sikuKanan += '*'
            }
            this.sikuKanan += '\n'
        }
    }

    SegitigaSikuKiri () {
        for(var b = 1; b<= 5; b++) {
            for(var c = 1; c<= b; c++) {
                this.sikuKiri += '*'
            }
            for(var z = 4; z>= b; z--) {
                this.sikuKiri += ' '
            }
            this.sikuKiri += '\n'
        }
    }

    SegitigaSamaSisi() {
        for(var q = 1; q<= 5; q++) {
            for(var e = 4; e>= q; e--) {
                this.samaSisi += ' '
            }
            for(var i = 1; i<= q + (q - 1);  i++) {
                // o += i+1;
                this.samaSisi += '*'
            }
            this.samaSisi += '\n'
        }    
    }

    PersegiGenapGanjil () {
        for(var i = 1; i<= 3; i++) {
            for(var f = 1; f<= 6; f++) {
                if (i % 2 === 0) {
                    if (i === 2 && f % 2 === 0) {
                        this.persegiGenapGanjil += '   *'
                    }
                    this.persegiGenapGanjil += '' 
                }else{
                    this.persegiGenapGanjil += ' *'
                }
            }
            this.persegiGenapGanjil += ' '
            for(var d = 1; d<= 6; d++) {
                if (i % 2 === 0) {
                    if (i === 2 && d % 2 === 0) {
                        this.persegiGenapGanjil += '  '
                    }else{
                        this.persegiGenapGanjil += ' *'
                    }
                    this.persegiGenapGanjil += ''
                }else{
                    this.persegiGenapGanjil += ' *'
                }
            }
            this.persegiGenapGanjil += '\n'
        }
    }

    AngkaUrut () {
        var getRes = ''
        var res = ''
        for(var t = 1; t <= 4; t++) {
            for(var k = 8; k>= 1; k--) {    
                if (t === 2 && k === 8) {
                    k = k - 2
                }else if (t === 3 && k === 8) {
                    k = k - 4
                }else if (t === 4 && k === 8) {
                    k = k - 6
                }
                getRes += ' '+t
            }
           getRes += '\n'
        }
        console.log(getRes);
        for(var p = 4; p >= 1; p--) {
            for(var y = 8; y>= 1; y--) {
                if (p === 4 && y === 8) {
                    y = y - 6
                }else if (p === 3 && y === 8) {
                    y = y - 4
                }else if (p === 2 && y === 8) {
                    y = y - 2
                }
                res += ' '+p
            }
            res += '\n'
        }
        console.log(res);
    }
}
const cetak = new Looping('','','','')
cetak.SegitigaSikuKanan()
cetak.SegitigaSikuKiri()
cetak.SegitigaSamaSisi()
cetak.PersegiGenapGanjil()
cetak.AngkaUrut()
console.log(cetak.sikuKanan);
console.log(cetak.sikuKiri);
console.log(cetak.samaSisi);
console.log(cetak.persegiGenapGanjil);