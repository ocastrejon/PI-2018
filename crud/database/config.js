const mysql = require(`mysql`);

let db = mysql.createConnection({
    host     : 'localhost',
    user     : 'Oscar',
    password : 'oscar',
    database : 'pi',
    dateStrings: true
});

db.connect((err) => {
    if (err){
        console.log(`Hay un error en la conexion`);
        throw err;
    }
})

module.exports = db;


