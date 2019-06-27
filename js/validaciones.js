$(document).ready(function(){
  // productos/productos.jsp --> Registrar producto
  $('#btnRegistrarProducto').on('click', function(e){
    if( $('#codigo').val() === ''){
      $('#codigo').focus();
      M.toast({html: 'Campo CÓDIGO no puede ser vacio.', classes: 'rounded'});
      return false;
    }else if( $('#nombre').val() === '' ){
      $('#nombre').focus();
      M.toast({html: 'Campo NOMBRE no puede ser vacio.', classes: 'rounded'});
      return false;
    }else if( $('#marca').val() === '' ){
      $('#marca').focus();
      M.toast({html: 'Campo MARCA no puede ser vacio.', classes: 'rounded'});
      return false;  
    }else if( $('#valorCompra').val() === '' ){
      $('#valorCompra').focus();
      M.toast({html: 'Campo VALOR COMPRA no puede ser vacio.', classes: 'rounded'});
      return false;
    }else if( $('#topeMinimo').val() === '' ){
      $('#topeMinimo').focus();
      M.toast({html: 'Campo TOPE MINIMO no puede ser vacio.', classes: 'rounded'});
      return false; 
    }else if( $('#topeMaximo').val() === '' ){
      $('#topeMaximo').focus();
      M.toast({html: 'Campo TOPE MÁXIMO no puede ser vacio.', classes: 'rounded'});
      return false;   
    }else if( $('#categoria').val() === null ){
      $('#categoria').focus();
      M.toast({html: 'Es necesiario seleccionar una CATEGORIA.', classes: 'rounded'});
      return false;
    }else if( $('#bodega').val() === null ){
      $('#bodega').focus();
      M.toast({html: 'Es necesiario seleccionar una BODEGA.', classes: 'rounded'});
      return false;
    }else if( $('#proveedor').val() === null ){
      $('#proveedor').focus();
      M.toast({html: 'Es necesiario seleccionar un PROVEEDOR.', classes: 'rounded'});
      return false;
    }else{
      return true;
    }
    e.preventDefault();
  });
  // productos/productos.jsp --> Administrar productos (Modal)
  $('#btnActualizarProducto').on('click', function(e){
    if( $('#adpr_codigo').val() === ''){
      $('#adpr_codigo').focus();
      M.toast({html: 'Campo CÓDIGO no puede ser vacio.', classes: 'rounded'});
      return false;
    }else if( $('#adpr_nombre').val() === '' ){
      $('#adpr_nombre').focus();
      M.toast({html: 'Campo NOMBRE no puede ser vacio.', classes: 'rounded'});
      return false;
    }else if( $('#adpr_marca').val() === '' ){
      $('#adpr_marca').focus();
      M.toast({html: 'Campo MARCA no puede ser vacio.', classes: 'rounded'});
      return false;  
    }else if( $('#adpr_valorCompra').val() === '' ){
      $('#adpr_valorCompra').focus();
      M.toast({html: 'Campo VALOR COMPRA no puede ser vacio.', classes: 'rounded'});
      return false;
    }else if( $('#adpr_topeMinimo').val() === '' ){
      $('#adpr_topeMinimo').focus();
      M.toast({html: 'Campo TOPE MINIMO no puede ser vacio.', classes: 'rounded'});
      return false; 
    }else if( $('#adpr_topeMaximo').val() === '' ){
      $('#adpr_topeMaximo').focus();
      M.toast({html: 'Campo TOPE MÁXIMO no puede ser vacio.', classes: 'rounded'});
      return false;   
    }else if( $('#adpr_categoria').val() === null ){
      $('#adpr_categoria').focus();
      M.toast({html: 'Es necesiario seleccionar una CATEGORIA.', classes: 'rounded'});
      return false;
    }else if( $('#adpr_bodega').val() === null ){
      $('#adpr_bodega').focus();
      M.toast({html: 'Es necesiario seleccionar una BODEGA.', classes: 'rounded'});
      return false;
    }else if( $('#adpr_proveedor').val() === null ){
      $('#adpr_proveedor').focus();
      M.toast({html: 'Es necesiario seleccionar un PROVEEDOR.', classes: 'rounded'});
      return false;
    }else{
      return true;
    }
    e.preventDefault();
  })

  //
  $('#btnSolicitarProducto').on('click', function(e){
    if( $('#sopr_cantidadSolicitar').val() === ''){
      $('#sopr_cantidadSolicitar').focus();
      M.toast({html: 'Campo CANTIDAD A SOLICITAR no puede ser vacio.', classes: 'rounded'});
      return false;
    }else if( $('#sopr_proveedor').val() === null ){
      $('#sopr_proveedor').focus();
      M.toast({html: 'Es necesiario seleccionar un PROVEEDOR.', classes: 'rounded'});
      return false;
    }else{
      return true;
    }
    e.preventDefault();
  });

  //
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

});