$(document).ready(function(){
  
  $('#eliminarProducto').on('click', function(){
    Swal.fire({
      title: 'Seguro(a)?',
      text: "No podra revertir esta decisión!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Eliminado!',
          'El registro ha sido borrado.',
          'success'
        )
      }
    })
  });

  $('#actualizarCategoria').on('click', function(){
    $('#btnActualizarCategoria').removeClass('disabled');
  });
  
  // Registrar categoria
  $('#btnCrearCategoria').on('click', function(e){
    if( $('#nombreCategoria').val() === ''){
      $('#nombreCategoria').focus();
      M.toast({html: 'Campo NOMBRE CATEGORIA no puede ser vacio.', classes: 'rounded'});
      return false;
    }else if( $('#descripcionCategoria').val() === '' ){
      $('#descripcionCategoria').focus();
      M.toast({html: 'Campo DESCRIPCION DE CATEGORIA no puede ser vacio.', classes: 'rounded'});
      return false;
    }else{
      limpiarFormularioCategoria();
      return true;
    }
    e.preventDefault();
  })

  $('#btnSalirModalCategoria').on('click', function(){
    limpiarFormularioCategoria();
  })

  // Actualizar categoria --> ac: actualizar
  $('#btnActualizarCategoria').on('click', function(e){
    if( $('#ac_nombre').val() === '' ){
      $('#ac_nombre').focus();
      M.toast({html: 'Campo NOMBRE no puede ser vacio.', classes: 'rounded'});  
      return false;
    }else if( $('#ac_descripcion').val() === '' ){
      $('#ac_descripcion').focus();
      M.toast({html: 'Campo DESCRIPCIÓN no puede ser vacio.', classes: 'rounded'});
      return false;
    }else{
      return true;
    }
    e.preventDefault();    
  });
});

function limpiarFormularioCategoria(){
  $('#nombreCategoria').val('');
  $('#descripcionCategoria').val('');
}