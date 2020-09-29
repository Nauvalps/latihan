function hello() {
    console.log('Hello Node.js!');
}

// menunda eksekusi fungsi hello() selama 3 detik
var t = setTimeout(hello,3000);

// membatalkan eksekusi fungsi hello()
clearTimeout(t);