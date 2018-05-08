$(function(){

    // funcion ajax eliminar producto
    $('#tbl-productos #btn-eliminar').click(function(e){
        e.preventDefault();
        let elemento = $(this);
        let id = elemento.parent().parent().find('#id_carro').text();
        let confirmar = confirm('Desea eliminar el producto?');
        
        if(confirmar){
            $.ajax({
                url: 'http://localhost:3000/eliminarproducto',
                method: 'delete',
                data: {id: id},
                success: function(res){
                    if(res.res){
                        elemento.parent().parent().remove();
                    }
                }
            });
        }
    });
});
