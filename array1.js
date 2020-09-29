var a = new Array();
a['http'] = 'Hypertext Transfer Protocol';
a['html'] = 'HyperText Markup Language';
a['xml'] = 'Extensible Markup Language';
a['json'] = 'Javascript Object Notation';

for(key in a){
    console.log(key.toUpperCase() + ' \t= ' + a[key]);
}