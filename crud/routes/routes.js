// import { throws } from 'assert';

var express = require('express');
var router = express.Router();
let dateformat = require('dateformat');


// rutas para home -----------------------------------------------------
router.get('/',(req, res)=>{
    res.render('index');
});
// rutas para home -----------------------------------------------------



// rutas para productos ------------------------------------------------
router.get('/productos', (req, res) => {
    let db = require('.././database/config');
        db.query('SELECT * FROM carros', function(err,rows,fields){
            if(err) throw err;
            productos = rows;
            res.render('productos/productos', {productos: productos});
        });
});
// rutas para productos ------------------------------------------------



// rutas para productos nuevos -----------------------------------------
router.get('/nuevo', (req, res) =>{
    res.render('productos/nuevo');
});
// rutas para productos nuevos -----------------------------------------



// rutas para crear productos ------------------------------------------
router
    .post('/crearproducto', (req, res)=>{
        let fechaactual = new Date();
        let fecha = dateformat(fechaactual, 'yyyy-mm-dd h:MM:ss');

        let producto = {
            nombre: req.body.nombre,
            precio: req.body.precio,
            stock: req.body.stock,
            fecha_creacion: fecha
        }
        
        const db = require('.././database/config');
        db.query('INSERT INTO carros SET ?', producto, function(err, rows, fields){
            if(err) throw err;
        });
        res.render('productos/nuevo', {info: 'Producto creado correctamente'});
    })
    

    .delete('/eliminarproducto', (req, res)=>{
        const db = require('.././database/config');
        let respuesta = {res: false};
        let id = req.body.id;
        db.query('DELETE FROM carros WHERE id_carro = ?', id, function(err, rows, fields){
            if(err) throw err;
            respuesta.res = true;
            res.json(respuesta);
        });
    })


    .get('/modificar/:id', (req, res)=>{
        let id = req.params.id;
        const db = require('.././database/config');  
        let producto = null;
        db.query('SELECT * FROM carros WHERE id_carro = ?' , id, (err, rows, fields)=>{
            if(err) throw err;
            producto = rows;
            res.render('productos/modificar', {producto: producto});
        });
    })


    .post('/editar', (req, res)=>{
        const db = require('.././database/config');  
        let producto = {
            nombre: req.body.nombre,
            precio: req.body.precio,
            stock: req.body.stock,
        };

        db.query('UPDATE carros SET ? WHERE ?', [producto, {id_carro: req.body.id_carro}], (err, rows, fields)=> {
            if(err) throw err;
        });
        res.redirect('/productos/');
    });
// rutas para crear productos ------------------------------------------


module.exports = router;