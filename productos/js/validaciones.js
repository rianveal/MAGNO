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

  $('#valorCompra').on('keyup', function(){
    var iva = $('#iva').val();
    var valorCompra = $(this).val()
    if( iva === '' ){
      $('#valorVenta').val(valorCompra)
    }else{
      calculoValorVenta = parseFloat(valorCompra) + (parseFloat(valorCompra) * (parseFloat(iva)/100));
      $('#valorVenta').val(calculoValorVenta)
    }
  })

  $('#iva').on('keyup', function(){
    var valorCompra = $('#valorCompra').val();
    var iva = $(this).val(); 
    if( valorCompra === '' ){
      M.toast({html: 'Campo VALOR COMPRA no puede ser vacio.', classes: 'rounded'});
      $(this).val('');
    }else{
      calculoValorVenta = parseFloat(valorCompra) + (parseFloat(valorCompra) * (parseFloat(iva)/100))
      $('#valorVenta').val(calculoValorVenta)
    }
  })

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
      limpiarFormularioProducto();
      return true;
    }
    e.preventDefault();
  
  });

  $('#btnSalirModalProducto').on('click', function(){
    limpiarFormularioProducto();
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

  // Solicitar productos (Modal)
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

  // Registrar categoria (Modal)
  $('#btnCrearCategoria').on('click', function(e){
    if( $('#nombreCategoria').val() === ''){
      $('#nombreCategoria').focus();
      M.toast({html: 'Campo NOMBRE CATEGORÍA no puede ser vacio.', classes: 'rounded'});
      return false;
    }else if( $('#descripcionCategoria').val() === '' ){
      $('#descripcionCategoria').focus();
      M.toast({html: 'Campo DESCRIPCIÓN DE CATEGORÍA no puede ser vacio.', classes: 'rounded'});
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

  $('#admonCategorias').on('click', function(){
    //ruta = comunicacion+'/MAGNO/categorias/categorias.html';
    ruta = comunicacion+'/categorias/categorias.html';
    $(this).attr('href', ruta)
  });

});

function limpiarFormularioProducto(){
  $('#codigo').val('');
  $('#nombre').val('');
  $('#marca').val('');
  $('#valorCompra').val('');
  $('#iva').val('');
  $('#valorVenta').val('');
  $('#topeMinimo').val('');
  $('#topeMaximo').val('');
}

function limpiarFormularioCategoria(){
  $('#nombreCategoria').val('');
  $('#descripcionCategoria').val('');
}