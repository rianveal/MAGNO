var comunicacion = '';
$(document).ready(function(){
  comunicacion = window.location.origin;
  rutaGeneral = comunicacion+'/MAGNO/'; // comunicacion+'/MAGNO/'
  
  $('#admonProductos').on('click', function(){
    ruta = rutaGeneral+'/productos/productos.html';
    $(this).attr('href', ruta)
  });

  $('#productoInformes').on('click', function(){
    ruta = rutaGeneral+'/productos/productos_informes.html';
    $(this).attr('href', ruta)
  });

  $('#admonOfertas').on('click', function(){
    ruta = rutaGeneral+'/productos/ofertas.html';
    $(this).attr('href', ruta)
  });

  $('#admonFavoritos').on('click', function(){
    ruta = rutaGeneral+'/productos/favoritos.html';
    $(this).attr('href', ruta)
  });
  
  $('#admonCategorias').on('click', function(){
    ruta = rutaGeneral+'/categorias/categorias.html';
    $(this).attr('href', ruta)
  });

  $('#admonBodegas').on('click', function(){
    ruta = rutaGeneral+'/bodegas/bodegas.html';
    $(this).attr('href', ruta)
  });

  $('#admonProveedores').on('click', function(){
    ruta = rutaGeneral+'/proveedores/proveedores.html';
    $(this).attr('href', ruta)
  });

  $('#admonUsuarios').on('click', function(){
    ruta = rutaGeneral+'/usuarios/usuarios.html';
    $(this).attr('href', ruta)
  });

  $('#admonPerfiles').on('click', function(){
    ruta = rutaGeneral+'/configuracion/perfiles.html';
    $(this).attr('href', ruta)
  });

  $('#admonEstados').on('click', function(){
    ruta = rutaGeneral+'/configuracion/estados/estados.html';
    $(this).attr('href', ruta)
  });

  
});