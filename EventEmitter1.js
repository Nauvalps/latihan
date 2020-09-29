var events = require('events');

// membuat kelas turunan dari kelas eventemitter
class MyEventEmitter extends events.EventEmitter {
    constructor() {
        super();
    }
}

// membuat objek dari kelas MyEventEmitter
var obj = new MyEventEmitter();

// mendefinisikan event 'mulai'
obj.on('mulai', function () {
    console.log('\nTerjadi event \'mulai\'');
});

// mendefinisikan event 'selesai'
obj.on('selesai', function () {
    console.log('\nTerjadi event \'selesai\'');
});

obj.emit('mulai');
for (let i = 0; i < 20; i++) {
    // const element = array[index];
    process.stdout.write((i+1).toString() + ' ');
}
obj.emit('selesai');