var events = require('events');

//membuat objek dari kelas EventEmitter
var obj = new events.EventEmitter();

// mendefinisikan event 'mulai'
obj.on('mulai', function () {
    console.log('Terjadi event \'mulai\'');
});

// mendefinisikan event 'selesai'
obj.on('selesai', function () {
   console.log('\nTerjadi event \'selesai\''); 
});

obj.emit('mulai');
for (let i = 0; i < 20; i++) {
    process.stdout.write((i+1).toString() + ' ');
}
obj.emit('selesai');