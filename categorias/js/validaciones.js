// categoria/js/validaciones.js
$(document).ready(function(){
  // Registrar categoria
  $('#btnAgregarCategoria').on('click', function(e){
    if( $('#nombreCategoria').val() === ''){
      $('#nombreCategoria').focus();
      M.toast({html: 'Campo NOMBRE CATEGORIA no puede ser vacio.', classes: 'rounded'});
      return false;
    }else if( $('#descripcionCategoria').val() === null ){
      $('#descripcionCategoria').focus();
      M.toast({html: 'ampo DESCRIPCION DE CATEGORIA no puede ser vacio.', classes: 'rounded'});
      return false;
    }else{
      return true;
    }
    e.preventDefault();
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