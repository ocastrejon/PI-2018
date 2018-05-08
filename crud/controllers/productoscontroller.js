// var mysql = require('mysql');

// // producto controller
// module.exports = {
//     // funciones del controlador

//     getProductos : function(req, res){
//         let config = require('.././database/config');
//         let db = mysql.createConnection(config);
//         db.connect((err) => {
//             if (err){
//                 console.log(`Hay un error en la conexion`);
//                 throw err;
//             }
//         })
//         // let productos = null;
//         // db.query('SELECT * FROM carros', function(err,rows,fields){
//         //     if(err) throw err;
//         //     productos = rows;
//         //     db.end();
//         //     res.render('productos/productos', {productos: productos});
//         // });
//     }

//     // getNuevoProducto: function(req, res, next){
//     //     res.render('productos/nuevo')
//     // }
// }