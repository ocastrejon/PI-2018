$(function(){
    $('.form-nuevoproducto form').form({
        nombre: {
            identifier: 'nombre',
            rules:[
                {
                    type: 'empty',
                    prompt: 'Porfavor ingrese un nombre'
                }
            ]
        },
        precio: {
            identifier: 'precio',
            rules: [
                {
                    type: 'empty',
                    prompt: 'Porfavor ingrese un numero'
                },
                {
                    type: 'number',
                    prompt: 'El precio debe ser de tipo numerico'
                }
            ]
        },
        stock: {
            identifier: 'stock',
            rules: [
                {
                    type: 'empty',
                    prompt: 'Porfavor ingrese el stock'
                },
                {
                    type: 'integer',
                    prompt: 'El stock debe ser un numero entero'
                }
            ]
        }
    });
});