comunicacion = null;
$(document).ready(function(){
  comunicacion = window.location.origin;

  $('#admonProductos').on('click', function(){
    ruta = comunicacion+'/productos/productos.html';
    $(this).attr('href', ruta)
  });
});
