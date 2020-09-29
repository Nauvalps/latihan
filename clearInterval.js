var counter = 3;

function generate() {
    process.stdout.write(counter.toString() + ' ');
    counter--;
    if (counter == 0) {
        clearInterval(t);
    }
}
process.stdout.write('Hitung mundur: ');
var t = setInterval(generate, 1000);