let fs = require('fs');
let path = require('path');

let files = fs.readdirSync(__dirname);

files.forEach((file)=>{
    let fileName = path.basename(file, '.js');
    if(fileName !== 'index'){
        exports[fileName] = require('./'+fileName);
    }
});