comunicacion = null
$(document).ready(function(){
  comunicacion = window.location.origin;
  $('#miTabla').DataTable({
    "language": {
        "decimal": ",",
        "thousands": "."
    }
  });

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

  $('#admonCategorias').on('click', function(){
    ruta = comunicacion+'/categorias/categorias.html';
    $(this).attr('href', ruta)
  });


});