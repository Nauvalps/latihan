var readline = require('readline-sync');
while (true) {
    var username = readline.question('Username: ');
    var password = readline.question('Password: ');
    if (username !== 'Javascript' || password !== 'Node.js') {
        console.log('Username/password salah\n');
        continue; // kembali keatas (bagian awal blok pengulangan)
    }

    // perintah dibawah ini akan diabaikan ketika username/password salah
    console.log('\nSelamat datang, login berhasil');
    break;
}