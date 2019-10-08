comunicacion = null;
$(document).ready(function(){
  comunicacion = window.location.origin;

  $('#tablaCategorias').DataTable({
    language: {
      paginate: {
        first:      "<i class='material-icons'>first_page</i>",
        previous:   "<i class='material-icons'>navigate_before</i>",
        next:       "<i class='material-icons'>navigate_next</i>",
        last:       "<i class='material-icons'>last_page</i>"
      }
    },
    "pagingType": "full_numbers",
    "responsive": true,
    "dom": "Bfrtip"
  });

  $('#admonProductos').on('click', function(){
    //ruta = comunicacion+'/MAGNO/productos/productos.html';
    ruta = comunicacion+'/productos/productos.html';
    $(this).attr('href', ruta)
  });

  
});
