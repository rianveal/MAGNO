comunicacion = null;
$(document).ready(function(){
  comunicacion = window.location.origin;

  $('#admonProductos').on('click', function(){
    ruta = comunicacion+'/MAGNO/productos/productos.html';
    $(this).attr('href', ruta)
  });
});
